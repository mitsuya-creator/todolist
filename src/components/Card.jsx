import React from "react";
import { Link } from "react-router-dom";

function Card({ title, descriptions, id, isCompleted }) {
    return (
        <li className="body_list_by_actions">
            <section>
                <Link to={`/events/detail/${id}`} className="text_decoration_none">
                    <div className={isCompleted && "line_through"}>
                        <h1>{title}</h1>
                        <p>{descriptions}</p>
                    </div>
                </Link>
                <input type="checkbox" checked={isCompleted} className={isCompleted ? "checkbox_card checked" : "checkbox_card"} />
            </section>
        </ li>
    )
}
export default Card;