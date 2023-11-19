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
import { PickersDay } from '@mui/x-date-pickers';


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
                },
                today: {
                    color: '#bbdefb',
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: '#2196f3',
                    border: '0px solid',
                    backgroundColor: '#1976D2 !important',
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

const isSpecialDay = (date) => {
    const initialDate = [11, 12, 13, 14, 15]
    return initialDate.includes(date.date());
};

function EventsDate({ day, ...props }) {
    const eventDay = isSpecialDay(day);
    return (
        <PickersDay
            {...props}
            day={day}
            selected={eventDay}
            sx={{
                backgroundColor: eventDay ? '#796EC7 !important' : '#594AB2',
                borderRadius: "8px",
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onClick={e => console.log(e)}
        >
            {dayjs(day).format('D')}
        </PickersDay>
    );
}

export default function Calendar() {
    const [value, setValue] = React.useState(dayjs(new Date()));
    const date = showFormattedDate(value);

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
                                    <DateCalendar
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                        slots={{ day: EventsDate }}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </ThemeProvider>
                </div>
            </section>
        </Slide>
    );
}