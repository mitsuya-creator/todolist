import { React, useReducer } from "react";
import Card from "@/components/Card";
import { Link } from "react-router-dom";
import { eventsReducer } from "@/utils/reducer"

function TodayTask({ todos }) {
    const [events, dispatch] = useReducer(eventsReducer, todos);
    const handleOnChange = (event) => {
        dispatch({
            type: "changed",
            event: event
        })
    }
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
                        {events.map(data => <Card key={data.id} onChange={handleOnChange} data={data} />)}
                    </ul>
                </section>
            </div>
        </div>
    )
}
export default TodayTask;