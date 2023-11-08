import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ListTodosByActions() {
    const testLoop = [0, 1, 2, 3]
    return (
        <ul className="container_list_by_actions">
            {testLoop.map((index) => <li className="body_list_by_actions" key={index}>
                <section>
                    <div>
                        <h1>React JS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officiis maiores modi odio animi commodi est reiciendis? Aliquam nobis praesentium fuga id ex eaque, architecto error ipsam labore necessitatibus odio.</p>
                    </div>
                    <div className="more_vertical_icon">
                        <MoreVertIcon onClick={() => console.log(index)} />
                    </div>
                </section>
            </li>
            )}
        </ul>
    )
}