import React from "react";
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function User() {
    return (
        <div className="container_user">
            <section>
                <PersonPinIcon fontSize="large" />
                <p><span>User0012</span></p>
            </section>
            <p><span>TodosApp</span></p>
        </div>
    )
}