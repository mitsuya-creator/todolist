import React from "react";
import Card from "./card";

export default function ListTodosByActions() {
    const testLoop = [0, 1, 2, 3]
    return (
        <ul className="container_list_by_actions">
            {testLoop.map((index) => <Card key={index} />)}
        </ul>
    )
}