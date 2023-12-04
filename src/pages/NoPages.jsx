import React from "react";
import { Link } from "react-router-dom";
export default function NoPages() {
    return (
        <div className="no_pages">
            <section>
                <h3>404</h3>
                <h1>Page Not Found</h1>
                <p>Sorry, we could not find the page.</p>
            </section>
            <section>
                <Link to={"/dashboard"}><button>Go to Dashboard</button></Link>
            </section>
        </div>
    )
}