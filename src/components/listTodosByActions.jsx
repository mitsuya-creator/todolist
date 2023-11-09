import React from "react";
import Card from "./card";

export default function ListTodosByActions({ filterTodos }) {
    return (
        <ul className="container_list_by_actions">
            {filterTodos.map(todo => <Card key={todo.id} title={todo.title} description={todo.description} />)}
        </ul>
    )
}