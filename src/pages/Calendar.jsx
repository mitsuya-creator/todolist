import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';

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
    const [value, setValue] = React.useState(dayjs('2023-04-17'));
    console.log(value)

    return (
        <ThemeProvider theme={newTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                    <DemoItem label="Controlled calendar">
                        <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </ThemeProvider>
    );
}
