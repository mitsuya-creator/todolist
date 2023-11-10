import { React, useState } from "react";
// import ListTodosByActions from "./listTodosByActions";
// import PropTypes from "prop-types";

function EventsHere(props) {
    // const { todos } = props;
    // const [isCompleted, setIsCompleted] = useState(false);
    // const filterTodos = todos.filter(todo => todo.isCompleted === isCompleted);
    // console.log(filterTodos)
    return (
        <div className="ontainer_todos_by_actions">
            {/* <section className="button_actions">
                <div>
                    <button className={isCompleted ? "button_actions_active" : null} onClick={() => setIsCompleted(true)}>Completed</button>
                    <button className={isCompleted ? null : "button_actions_active"} onClick={() => setIsCompleted(false)}>Uncompleted</button>
                </div>
            </section>
            <ListTodosByActions filterTodos={filterTodos} /> */}
            Hello
        </div>
    )
}
// EventsHere.propType = {
//     todos: PropTypes.any
// }

export default EventsHere;