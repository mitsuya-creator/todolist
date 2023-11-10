import { React, useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import TodayIcon from '@mui/icons-material/Today';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useLocation, Outlet } from "react-router-dom";

export default function BottomNavigation() {
    const { pathname } = useLocation();
    const [selected, setSelected] = useState("/dashboard");
    useEffect(() => {
        setSelected(pathname)
    }, [pathname])
    return (
        <>
            <div className="container_bottom_navigation">
                <div>
                    <Link to="/dashboard" className="text_decoration_none">
                        <button className={selected === "/dashboard" ? "active" : "not_active"}>
                            <HomeIcon />
                            <span>Home</span>
                        </button>
                    </Link>
                    <Link to="/dashboard/events" className="text_decoration_none">
                        <button className={selected === "/dashboard/events" ? "active" : "not_active"}>
                            <TodayIcon />
                            <span>Events</span>
                        </button>
                    </Link>
                    <Link to="/dashboard/calendar" className="text_decoration_none">
                        <button className={selected === "/dashboard/calendar" ? "active" : "not_active"}>
                            <CalendarMonthIcon />
                            <span>Calendar</span>
                        </button>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}