import React from "react";
import ListTodosByActions from "./listTodosByActions";

export default function EventsHere() {
    return (
        <div className="container_todos_by_actions">
            <section className="button_actions">
                <div>
                    <button className="button_actions_active">Completed</button>
                    <button>Uncompleted</button>
                </div>
            </section>
            <ListTodosByActions />
        </div>
    )
}