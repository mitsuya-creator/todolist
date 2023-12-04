import { React, useContext } from "react";
import User from "@/components/userProfile";
import NoEventHere from "@/components/NoEvents";
import Slide from '@mui/material/Slide';
import Card from "@/components/Card";
import TodayTask from "@/components/todayTask";
import ButtonAddTodo from "@/components/button/ButtonAddTodo";
import { DispatchContext, EventsContext } from "@/utils/contex";
import { showFormattedDate } from "@/utils/showFormattedDate";

export default function Home() {
    const events = useContext(EventsContext);
    const dispatch = useContext(DispatchContext);
    const handleOnChange = event => {
        dispatch({
            type: "changed",
            event: event
        })
    }
    const completedEventsToday = events.filter(data => data.isCompleted === true && data.date == showFormattedDate(new Date()))
    const unCompletedEventsToday = events.filter(data => data.isCompleted === false && data.date == showFormattedDate(new Date()))
    let isThereEventsToday = events.filter(data => data.date == showFormattedDate(new Date())).length > 0;
    let content;
    if (isThereEventsToday) {
        content = <>
            <ul className={completedEventsToday.length == 1 ? "container_list_by_actions flex justify-center" : "container_list_by_actions"}>
                {completedEventsToday.length != 0 ? completedEventsToday.map(data => <Card key={data.id} data={data} onChange={handleOnChange} />) : <div className="container_list_by_actions flex justify-center"><pre className="uncompleted_events">Today, you have {unCompletedEventsToday.length} uncompleted events.<br />Make sure you have completed today!</pre></div>}
            </ul>
            <TodayTask unCompletedEventsToday={unCompletedEventsToday} onChange={handleOnChange} />
            <ButtonAddTodo style="container_button_add_todo_home" />
        </>
    } else {
        content = <div className="h_full flex justify-center align_center"><NoEventHere text={"Create an event for today"} /></div>

    }
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <section className="section_single_slide_mark">
                <div className="sticky_top">
                    <User />
                </div>
                {content}
            </section>
        </Slide>
    )
}
