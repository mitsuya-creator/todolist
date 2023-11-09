import React from "react";
import ListTodosByActions from "./listTodosByActions";
import PropTypes from "prop-types";

function EventsHere(props) {
    const { isExpanding } = props;
    return (
        <div className={isExpanding ? "d-none" : "ontainer_todos_by_actions"}>
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
EventsHere.propType = {
    isExpanding: PropTypes.any
}

export default EventsHere;