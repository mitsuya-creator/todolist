import React from "react";
import User from "@/components/userProfile";
import NoEventHere from "@/components/NoEvents";
import Slide from '@mui/material/Slide';
import Card from "@/components/card";
import { data } from "@/utils/initialData";

export default function Home() {
    console.log("dashboard")
    return (
        <div className="container_todos_app">
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <div className="fixed_top">
                    <User />
                    <ul className="container_list_by_actions">
                        {data.map(data => <Card title={data.title} descriptions={data.description} key={data.id} id={data.id} />)}
                    </ul>
                    {/* <NoEventHere /> */}
                </div>
            </Slide>
        </div>
    )
}
