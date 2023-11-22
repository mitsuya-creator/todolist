import { React, useContext } from "react";
import User from "@/components/userProfile";
import NoEventHere from "@/components/NoEvents";
import Slide from '@mui/material/Slide';
import Card from "@/components/Card";
import TodayTask from "@/components/todayTask";
import ButtonAddTodo from "@/components/button/ButtonAddTodo";
import { DispatchContext, EventsContext } from "@/utils/contex";

export default function Home() {
    const events = useContext(EventsContext);
    const dispatch = useContext(DispatchContext);
    const handleOnChange = event => {
        dispatch({
            type: "changed",
            event: event
        })
    }
    const completedTask = events.filter(data => data.isCompleted === true)
    let isThereEvent = events.length > 0;
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <section className="section_single_slide_mark">
                <div className="fixed_top">
                    <User />
                </div>
                <ul className={completedTask.length == 1 ? "container_list_by_actions flex justify-center" : "container_list_by_actions"}>
                    {completedTask.map(data => <Card key={data.id} data={data} onChange={handleOnChange} />)}
                </ul>
                {/* <NoEventHere /> */}
                <TodayTask events={events} onChange={handleOnChange} />
                <ButtonAddTodo style="container_button_add_todo_home" />
            </section>
        </Slide>
    )
}
