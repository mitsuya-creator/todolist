import React from "react";
import Card from "./card";
import PropTypes from "prop-types";

function TodayTask(props) {
    const { isExpanding, setIsExpanding, todos } = props;
    return (
        <div className="container_today_task">
            <div className={isExpanding ? "container_today_task_view_expand" : "container_today_task_view_lessen"}>
                <section className="title_task">
                    <h1>Today's Task</h1>
                    <button type="buttons" onClick={() => setIsExpanding(!isExpanding)}>{isExpanding ? "Lessen" : "Expand"}</button>
                </section>
                <section className={isExpanding ? "body_today_task_view_expand" : "body_today_task_view_lessen"}>
                    <ul>
                        {todos.map(todo => <Card key={todo.id} title={todo.title} description={todo.description} />)}
                    </ul>
                </section>
            </div>
        </div>
    )
}
TodayTask.propTypes = {
    isExpanding: PropTypes.any,
    setIsExpanding: PropTypes.any,
    todos: PropTypes.any
}
export default TodayTask;