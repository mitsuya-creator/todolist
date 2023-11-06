import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('recents');
    const [isAdded, setIsAdded] = React.useState(false)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleIsAdded = () => {
        setIsAdded(!isAdded)
    }

    return (
        <>
            <div className="w-full h-full bg-black-20"></div>
            <div className="fixed-bottom w-full">
                <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="Home"
                        value="recents"
                        icon={<HomeIcon />}
                    />
                    <div className="add-close-btn mt-15">
                        <BottomNavigationAction
                            label=""
                            value="add"
                            onClick={handleIsAdded}
                            icon={isAdded ? <CloseIcon /> : <AddCircleIcon />}
                        />
                    </div>
                    <BottomNavigationAction
                        label="Calendar"
                        value="calendar"
                        icon={<CalendarMonthIcon />}
                    />
                </BottomNavigation>
            </div>
        </>
    );
}
