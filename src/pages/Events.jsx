import { React, useState } from "react";
import Slide from '@mui/material/Slide';
import User from "@/components/userProfile";
import Card from "@/components/Card";
import { data } from "@/utils/initialData";
import ButtonAddTodo from "@/components/button/ButtonAddTodo";

function EventsHere() {
    const [completed, setCompleted] = useState(true);
    let viewTodos;
    if (completed) {
        viewTodos = data.filter(data => data.isCompleted === true)
    } else {
        viewTodos = data.filter(data => data.isCompleted === false)
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
                                {viewTodos.map(todo => <Card key={todo.id} title={todo.title} descriptions={todo.description} id={todo.id} isCompleted={todo.isCompleted} />)}
                            </ul>
                        </div>
                    </section>
                </div>
            </section>
        </Slide>
    )
}

export default EventsHere;