import React from "react";
import Card from "./card";
import PropTypes from "prop-types";

function TodayTask({ isExpanding, setExpanding }) {
    const testLoop = [1]
    return (
        <div className="container_today_task">
            <div className={isExpanding ? "container_today_task_view_expand" : "container_today_task_lessen"}>
                <section className="title_task">
                    <h1>Today's Task</h1>
                    <button type="buttons" onClick={() => setExpanding(!isExpanding)}>{isExpanding ? "Expand" : "Lessen"}</button>
                </section>
                <section className={isExpanding ? "body_today_task_view_expand" : "body_today_task_view_lessen"}>
                    <ul>
                        {testLoop.map(index => <Card key={index} title={index} />)}
                    </ul>
                </section>
            </div>
        </div>
    )
}
TodayTask.PropTypes = {
    isExpanding: PropTypes.bool,
    setExpanding: PropTypes.func
}
export default TodayTask;