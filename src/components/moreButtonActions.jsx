import React from "react";

export default function MoreButtonActions({ id }) {
    return (
        <div className="container_more_button_actions d-none">
            <button type="button">Move{id}</button>
            <button type="button">Delete</button>
            <button type="button">Edit</button>
        </div>
    )
}