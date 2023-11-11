import React from "react";
import { Link } from "react-router-dom";
export default function NoEventHere() {
    return (
        <div className="container_noevent">
            <div className="body_noevent">
                <section>
                    <p>There is no events here</p>
                    <Link to="/newtask">
                        <button type="button">Create events</button>
                    </Link>
                </section>
            </div>
        </div>
    )
}