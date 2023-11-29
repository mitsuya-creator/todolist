import { React, useState, useRef, useEffect, useContext } from "react";
import Slide from '@mui/material/Slide';
import ButtonBackNavigation from "@/components/button/ButtonNavigationBack";
import { addItemToLocalStorage } from "@/utils/itemLocalStorage";
import { DispatchContext, EventsContext } from "@/utils/contex";
import SuccessCheckAnimation from "@/components/SuccessCheckAnimation";
import { useNavigate, useParams } from "react-router-dom";
import { useDetailEvent } from "@/utils/useDetailEvents";
import { showFormattedDate } from "@/utils/showFormattedDate";

export default function FormEdit() {
    const { id } = useParams();
    const events = useContext(EventsContext);
    const event = useDetailEvent(id)[0];
    const dispatch = useContext(DispatchContext);
    let convertDateToYearMonthDate = new Date(event.date);
    convertDateToYearMonthDate = `${convertDateToYearMonthDate.getFullYear()}-${convertDateToYearMonthDate.getMonth() + 1}-${convertDateToYearMonthDate.getDate()}`;
    const [content, setContent] = useState({
        title: event.title, date: convertDateToYearMonthDate, description: event.description, checkmark: event.checkmark
    })
    console.log(event)
    // const navigate = useNavigate()
    // useEffect(() => {
    //     addItemToLocalStorage(events);
    //     let nav;
    // if (content.checkmark) {
    //     nav = setTimeout(() => {
    //         navigate("/dashboard", { replace: true })
    //     }, 2000)
    // }
    //     return () => clearTimeout(nav);
    // }, [events])
    const textAreaRows = useRef();
    const handleOnChange = event => {
        dispatch({
            type: "changed",
            event: event
        })
    }
    // console.log(convertDate.getFullYear(), convertDate.getMonth(), convertDate.getDate())
    // event.date = `${convertDate.getFullYear()}-${convertDate.getMonth()}-${convertDate.getDate()}`;
    // console.log(showFormattedDate(event.date))
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div className="container_new_task">
                <div className="container_button_back">
                    <ButtonBackNavigation />
                    <h1>Editing event</h1>
                </div>
                <div className="container_form">
                    <div className="body_form">
                        <div className="title_form">
                            <h1>Editing event</h1>
                        </div>
                        <div>
                            <label htmlFor="enter_event">Enter event</label>
                            <input type="text" id="enter_event" value={content.title} onChange={e => setContent({ ...content, title: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="date_event">Date</label>
                            <input type="date" id="date_event" value={content.date} onChange={e => setContent({ ...content, date: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="description_event">Description</label>
                            <textarea ref={textAreaRows} type="text" value={content.description} rows={1} cols={20} style={{ resize: "none" }} className="input_as_input" onChange={e => setContent({ ...content, description: e.target.value })
                            } onInput={() => {
                                textAreaRows.current.style.height = "";
                                textAreaRows.current.style.height = textAreaRows.current.scrollHeight + "px";
                            }} />
                        </div>
                        <div className="container_submit_form">
                            <button className="submit_form" style={{ opacity: content.title == "" ? 0.5 : 1 }} onClick={() => handleOnChange({
                                ...event,
                                title: content.title,
                                date: showFormattedDate(content.date),
                                description: content.description
                            })} disabled={content.title == ""}>Save change</button>
                        </div>
                    </div>
                </div>
                {/* {content.checkmark ? <SuccessCheckAnimation /> : null} */}
            </div>
        </Slide>
    )
}