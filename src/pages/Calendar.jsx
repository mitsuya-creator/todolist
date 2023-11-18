// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { createTheme } from '@mui/material/styles'
// import { ThemeProvider } from '@emotion/react';
// import { showFormattedDate } from '@/utils/showFormattedDate';
// import Slide from '@mui/material/Slide';
// import User from "@/components/userProfile";
// import { DatePicker } from '@mui/x-date-pickers';

// const newTheme = (theme) => createTheme({
//     ...theme,
//     components: {
//         MuiPickersDay: {
//             styleOverrides: {
//                 root: {
//                     color: '#bbdefb',
//                     borderRadius: 8,
//                     borderWidth: 0,
//                     borderColor: '#2196f3',
//                     border: '0px solid',
//                     backgroundColor: '#594AB2',
//                 },
//                 today: {
//                     color: '#bbdefb',
//                     borderRadius: 8,
//                     borderWidth: 0,
//                     borderColor: '#2196f3',
//                     border: '0px solid',
//                     backgroundColor: '#796EC7',
//                 },
//                 day: {
//                     '&:nth-child(1)': {
//                         backgroundColor: 'red', // Change background color for the 15th day
//                         color: 'red',
//                         borderRadius: 8,
//                         borderWidth: 0,
//                         borderColor: '#2196f3',
//                         border: '0px solid'
//                     }
//                 }
//             },
//         },
//         MuiDayCalendar: {
//             styleOverrides: {
//                 weekDayLabel: {
//                     color: '#bbdefb',
//                     borderRadius: 0,
//                     borderWidth: 0,
//                     borderColor: '#e91e63',
//                     border: '0px solid',
//                     backgroundColor: '#594AB2',
//                 }
//             }
//         }
//     }
// })
// const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
//     <input
//         readOnly
//         ref={ref}
//         value={value}
//         onClick={onClick}
//         placeholder="Select Date"
//         style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             cursor: 'pointer',
//         }}
//     />
// ));
// const DateCalendar = ({ value, onChange }) => {
//     const isSpecialDay = (date) => {
//         console.log(date)
//         return date.date() === 15; // Check if it's the 15th day of the month
//     };
//     return (
//         <DatePicker
//             openTo="day"
//             value={value}
//             onChange={onChange}
//             renderDay={(day, _value, DayProps) => {
//                 const is15th = isSpecialDay(day);
//                 return (
//                     <div
//                         style={{
//                             backgroundColor: is15th ? '#FFC107' : 'inherit',
//                             borderRadius: '50%',
//                             width: '36px',
//                             height: '36px',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                         }}
//                         {...DayProps}
//                     >
//                         {day.getDate()}
//                         {console.log(day.getDate())}
//                     </div>
//                 );
//             }}
//         />
//     )
// }
// export default function Calendar() {
//     const [value, setValue] = React.useState(dayjs(new Date()));
//     const date = showFormattedDate(value);
//     // console.log(date)

//     return (
//         <Slide direction="left" in={true} mountOnEnter unmountOnExit>
//             <section className="section_single_slide_mark">
//                 <div className="fixed_top">
//                     <User />
//                 </div>
//                 <div className="container_calendar">
//                     <ThemeProvider theme={newTheme}>
//                         <LocalizationProvider dateAdapter={AdapterDayjs}>
//                             <DemoContainer components={['DateCalendar', 'DateCalendar']}>
//                                 <DemoItem>
//                                     <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
//                                 </DemoItem>
//                             </DemoContainer>
//                         </LocalizationProvider>
//                     </ThemeProvider>
//                 </div>
//             </section>
//         </Slide>
//     );
// }






import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import { DatePicker } from '@mui/x-date-pickers';
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
                },
                today: {
                    color: '#bbdefb',
                    borderRadius: 8,
                    borderWidth: 0,
                    borderColor: '#2196f3',
                    border: '0px solid',
                },
            },
        },
    },
});

//Change backgroudn color for spesifik day
const DateCalendar = ({ value, onChange }) => {
    const isSpecialDay = (date) => {
        console.log(date)
        return date.date() === 1; // Check if it's the 15th day of the month
    };

    return (
        <DatePicker
            openTo="day"
            value={value}
            onChange={onChange}
            slots={{
                day: ({ day, ...props }) => {
                    const is15th = isSpecialDay(day);
                    return (
                        <PickersDay
                            {...props}
                            day={day}
                            selected={is15th} // Apply selected style for the 15th day
                            sx={{
                                backgroundColor: is15th ? '#FFC107' : 'inherit',
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {dayjs(day).format('D')}
                        </PickersDay>
                    );
                },
            }}
        />
    );
};

export default function Calendar() {
    const [value, setValue] = React.useState(dayjs(new Date()));

    return (
        <ThemeProvider theme={newTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
            </LocalizationProvider>
        </ThemeProvider>
    );
}
//end of change spesifik Day