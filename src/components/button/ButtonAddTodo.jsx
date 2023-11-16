import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";

export default function ButtonAddTodo({ style }) {
    return (
        <Link to={"/newtask"}>
            <div className={style}>
                <button><AddCircleIcon /> <span>New event</span></button>
            </div>
        </Link>
    )
}