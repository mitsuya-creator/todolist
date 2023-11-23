import { React, useState, useContext } from "react";
import Slide from '@mui/material/Slide';
import User from "@/components/userProfile";
import Card from "@/components/Card";
import { DispatchContext, EventsContext } from "@/utils/contex";

function EventsHere() {
    const events = useContext(EventsContext)
    const dispatch = useContext(DispatchContext);
    const handleOnChange = event => {
        dispatch({
            type: "changed",
            event: event
        })
    }
    const [completed, setCompleted] = useState(true);
    let selectedEvents;
    if (completed) {
        selectedEvents = events.filter(data => data.isCompleted === true)
    } else {
        selectedEvents = events.filter(data => data.isCompleted === false)
    }
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <section className="section_single_slide_mark">
                <div className="fixed_top">
                    <User />
                </div>
                <div className="container_todos_by_actions">
                    <section>
                        <div className="button_actions">
                            <div>
                                <button className={completed ? "button_actions_active" : null} onClick={() => setCompleted(true)}>Completed</button>
                                <button className={completed ? null : "button_actions_active"} onClick={() => setCompleted(false)}>Uncompleted</button>
                            </div>
                        </div>
                        <div className="card_events">
                            <ul className="flex flex-direction-column">
                                {selectedEvents.map(todo => <Card key={todo.id} data={todo} onChange={handleOnChange} />)}
                            </ul>
                        </div>
                    </section>
                </div>
            </section>
        </Slide>
    )
}

export default EventsHere;