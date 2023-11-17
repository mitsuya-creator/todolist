import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import { showFormattedDate } from '@/utils/showFormattedDate';
import Slide from '@mui/material/Slide';
import User from "@/components/userProfile";

const newTheme = (theme) => createTheme({
    ...theme,
    components: {
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    color: '#bbdefb',
                    borderRadius: 8,
                    borderWidth: 0,
                    borderColor: '#2196f3',
                    border: '0px solid',
                    backgroundColor: '#594AB2',
                }
            }
        },
        MuiDayCalendar: {
            styleOverrides: {
                weekDayLabel: {
                    color: '#bbdefb',
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: '#e91e63',
                    border: '0px solid',
                    backgroundColor: '#594AB2',
                }
            }
        }
    }
})
export default function Calendar() {
    const [value, setValue] = React.useState(dayjs(new Date()));
    const date = showFormattedDate(value);
    console.log(date)

    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <section className="section_single_slide_mark">
                <div className="fixed_top">
                    <User />
                </div>
                <div className="container_calendar">
                    <ThemeProvider theme={newTheme}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                <DemoItem>
                                    <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </ThemeProvider>
                </div>
            </section>
        </Slide>
    );
}
