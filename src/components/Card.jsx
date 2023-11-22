import React from "react";
import { Link } from "react-router-dom";

function Card({ data, onChange }) {
    return (
        <li className="body_list_by_actions bg_primary">
            <section>
                <Link to={`/events/detail/${data.id}`} className="text_decoration_none">
                    <div className={data.isCompleted ? "line_through" : null}>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                    </div>
                </Link>
                <input type="checkbox" checked={data.isCompleted} className={data.isCompleted ? "checkbox_card checked" : "checkbox_card"} onChange={e => {
                    onChange({
                        ...data,
                        isCompleted: e.target.checked
                    })
                }} />
            </section>
        </ li>
    )
}
export default Card;