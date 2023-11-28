import React from "react";
import Card from "@/components/Card";
import { Link } from "react-router-dom";

function TodayTask({ unCompletedEventsToday, onChange }) {
    let content;
    if (unCompletedEventsToday.length != 0) {
        content = <ul>
            {unCompletedEventsToday.map(data => <Card key={data.id} onChange={onChange} data={data} />)}
        </ul>
    } else {
        content = <h3 className="good_job">Good job, you've completed events today's</h3>
    }
    return (
        <div className="container_today_task">
            <div className="container_today_task_view_lessen">
                <section className="title_task">
                    <h1>Today's Events</h1>
                    <Link to={"/dashboard/events"}>
                        <button type="buttons">View all</button>
                    </Link>
                </section>
                <section className="body_today_task_view_lessen">
                    {content}
                </section>
            </div>
        </div>
    )
}
export default TodayTask;