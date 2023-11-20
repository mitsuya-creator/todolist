import { React, useReducer, useState, useRef, useEffect } from "react";
import Slide from '@mui/material/Slide';
import ButtonBackNavigation from "@/components/button/ButtonNavigationBack";
import { getItemFromLocalStorage, addItemToLocalStorage } from "@/utils/getItemLocalStorage";
import { eventsReducer } from "@/utils/reducer";

const inititalEvents = getItemFromLocalStorage();
export default function Form() {
    const [events, dispatch] = useReducer(eventsReducer, inititalEvents);
    const [content, setContent] = useState({
        title: "", date: "", description: ""
    })
    useEffect(() => {
        addItemToLocalStorage(events);
    }, [events])
    const textAreaRows = useRef();
    const handleAddEvent = () => {
        dispatch({
            type: "added",
            title: content.title,
            date: content.date == "" ? new Date() : content.date,
            description: content.description
        })
    }
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
                            <input type="text" id="enter_event" onChange={e => setContent({ ...content, title: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="date_event">Date</label>
                            <input type="date" id="date_event" onChange={e => setContent({ ...content, date: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="description_event">Description</label>
                            <textarea ref={textAreaRows} type="text" rows={1} cols={20} style={{ resize: "none" }} className="input_as_input" onChange={e => setContent({ ...content, description: e.target.value })} onInput={() => {
                                textAreaRows.current.style.height = "";
                                textAreaRows.current.style.height = textAreaRows.current.scrollHeight + "px";
                            }} />
                        </div>
                        <div className="container_submit_form">
                            <button className="submit_form" onClick={handleAddEvent}>Add event</button>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}