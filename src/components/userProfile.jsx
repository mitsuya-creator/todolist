import React from "react";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from "react-router-dom";

export default function User() {
    return (
        <div className="container_user">
            <section>
                <PersonPinIcon fontSize="large" />
                <p><span>User0012</span></p>
            </section>
            <p><Link to={"/"} className="text_decoration_none">TodosApp</Link></p>
        </div>
    )
}