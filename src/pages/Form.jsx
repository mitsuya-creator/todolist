import * as React from "react";
import Slide from '@mui/material/Slide';
import ButtonBackNavigation from "@/components/button/ButtonNavigationBack";

export default function Form() {
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div className="container_new_task">
                <div className="container_button_back">
                    <ButtonBackNavigation />
                    <h1>New event</h1>
                </div>
                <div className="container_form">
                    <div className="body_form">
                        <div className="title_form">
                            <h1>New event</h1>
                        </div>
                        <div>
                            <label htmlFor="enter_event">Enter event</label>
                            <input type="text" id="enter_event" />
                        </div>
                        <div>
                            <label htmlFor="date_event">Date</label>
                            <input type="date" id="date_event" />
                        </div>
                        <div>
                            <label htmlFor="description_event">Description</label>
                            <div contentEditable="true" className="div_as_input" />
                        </div>
                        <div className="container_submit_form">
                            <button className="submit_form">Add event</button>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}