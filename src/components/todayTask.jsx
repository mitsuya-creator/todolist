import React from "react";
import Card from "./card";

export default function TodayTask() {
    const testLoop = [1, 2, 3, 4]
    return (
        <div className="container_today_task_view_all">
            <section className="title_task">
                <h1>Today's Task</h1>
                <button type="buttons">View all</button>
            </section>
            <section className="body_today_task">
                {testLoop.map(index => <Card key={index} />)}
            </section>
        </div>
    )
}