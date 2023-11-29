import { React, useContext, useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import Slide from '@mui/material/Slide';
import User from "@/components/userProfile";
import { PickersDay } from '@mui/x-date-pickers';
import { DispatchContext, EventsContext } from '@/utils/contex';
import { showFormattedDate } from '@/utils/showFormattedDate';
import Card from '@/components/Card';
import NoEventHere from '@/components/NoEvents';


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



let date = showFormattedDate(new Date());
const isSpecialDay = (datePickers, dateHasEvent) => {
    return dateHasEvent.includes(JSON.stringify(datePickers.$d));
};

function HasEvent({ day, ...props }) {
    const events = useContext(EventsContext)
    let eventDay, dateHasEvent = [];
    events.map((event) => {
        dateHasEvent.push(JSON.stringify(new Date(event.date)))
    })
    eventDay = isSpecialDay(day, dateHasEvent);
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
            onClick={e => {
                let dateSelected = e.target.dataset.timestamp / 1000;
                date = showFormattedDate(dateSelected * 1000)

            }}
        >
            {dayjs(day).format('D')}
        </PickersDay >
    );
}

export default function Calendar() {
    const [value, setValue] = useState(dayjs(new Date()));
    const events = useContext(EventsContext);
    const dispatch = useContext(DispatchContext);
    const eventsBaseOnDate = events.filter(event => event.date == date);
    console.log(eventsBaseOnDate);
    const handleOnChange = event => {
        dispatch({
            type: "changed",
            event: event
        })
    }
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <section className="section_single_slide_mark">
                <div className="sticky_top">
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
                                        slots={{ day: HasEvent }}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </ThemeProvider>
                </div>
                <h1 className="title_date sticky_top">{date}</h1>
                <div>
                    <ul className="body_events_calendar">
                        {eventsBaseOnDate.length != 0 ? eventsBaseOnDate.map(data => <Card key={data.id} onChange={handleOnChange} data={data} />) : <NoEventHere text={"Create an event for the day"} />}
                    </ul>
                </div>
            </section>
        </Slide >
    );
}