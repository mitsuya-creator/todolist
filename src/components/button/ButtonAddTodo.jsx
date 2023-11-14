import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";

export default function ButtonAddTodo() {
    return (
        <Link to={"/newtask"}>
            <div className="container_button_add_todo">
                <AddCircleIcon />
                <button>New events</button>
            </div>
        </Link>
    )
}