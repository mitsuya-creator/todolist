import { React, useState } from "react";
import Slide from '@mui/material/Slide';

function EventsHere() {
    return (
        <div className="container_todos_by_actions">
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                {/* <section className="button_actions">
                <div>
                    <button className={isCompleted ? "button_actions_active" : null} onClick={() => setIsCompleted(true)}>Completed</button>
                    <button className={isCompleted ? null : "button_actions_active"} onClick={() => setIsCompleted(false)}>Uncompleted</button>
                </div>
            </section>
            <ListTodosByActions filterTodos={filterTodos} /> */}
                <h1>Hello</h1>
            </Slide>
        </div>
    )
}

export default EventsHere;