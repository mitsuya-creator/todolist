import React from "react";
import { useParams } from "react-router-dom";
import ButtonBackNavigation from "@/components/button/ButtonNavigationBack";
import Slide from '@mui/material/Slide';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function DetailEvents() {
    const { id } = useParams();
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div className="container_detail_events">
                <div className="container_button_back_detail">
                    <section className="button_back_title">
                        <ButtonBackNavigation />
                        <h1>Detail events</h1>
                    </section>
                    <section className="container_icon_title">
                        <div>
                            <EditIcon />
                            <span>Edit</span>
                        </div>
                        <div>
                            <DeleteIcon />
                            <span>Delete</span>
                        </div>
                    </section>
                </div>

            </div>
        </Slide>
    )
}