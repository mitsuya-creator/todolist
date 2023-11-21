import React from "react";
import Card from "@/components/Card";
import { Link } from "react-router-dom";

function TodayTask({ todos }) {

    return (
        <div className="container_today_task">
            <div className="container_today_task_view_lessen">
                <section className="title_task">
                    <h1>Today's Task</h1>
                    <Link to={"/dashboard/events"}>
                        <button type="buttons">View all</button>
                    </Link>
                </section>
                <section className="body_today_task_view_lessen">
                    <ul>
                        {todos.map(data => <Card key={data.id} {...data} />)}
                    </ul>
                </section>
            </div>
        </div>
    )
}
export default TodayTask;