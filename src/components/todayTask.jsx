import React from "react";
import Card from "@/components/card";

function TodayTask({ isExpanding, setIsExpanding, todos }) {

    return (
        <div className="container_today_task">
            <div className="container_today_task_view_lessen">
                <section className="title_task">
                    <h1>Today's Task</h1>
                    <button type="buttons">View all</button>
                </section>
                <section className="body_today_task_view_lessen">
                    <ul>
                        {todos.map(data => <Card title={data.title} descriptions={data.description} key={data.id} id={data.id} />)}
                    </ul>
                </section>
            </div>
        </div>
    )
}
export default TodayTask;