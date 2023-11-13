import React from "react";
import User from "@/components/userProfile";
import NoEventHere from "@/components/NoEvents";
import Slide from '@mui/material/Slide';
import Card from "@/components/card";
import TodayTask from "@/components/todayTask";
import { data } from "@/utils/initialData";

export default function Home() {
    const completedTask = data.filter(data => data.isCompleted === true)
    console.log("dashboard")
    return (
        <div className="container_todos_app">
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <section className="section_single_slide_mark">
                    <div className="fixed_top">
                        <User />
                        <ul className={completedTask.length == 1 ? "container_list_by_actions flex justify-center" : "container_list_by_actions"}>
                            {completedTask.map(data => <Card title={data.title} descriptions={data.description} key={data.id} id={data.id} isCompleted={data.isCompleted} />)}
                        </ul>
                        {/* <NoEventHere /> */}
                    </div>
                    <TodayTask todos={data} />
                </section>
            </Slide>
        </div>
    )
}
