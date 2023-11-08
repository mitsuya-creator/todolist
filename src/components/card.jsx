import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreButtonActions from "./moreButtonActions";

export default function Card() {
    return (
        <li className="body_list_by_actions">
            <section>
                <div>
                    <h1>React JS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officiis maiores modi odio animi commodi est reiciendis? Aliquam nobis praesentium fuga id ex eaque, architecto error ipsam labore necessitatibus odio.</p>
                </div>
                <div className="more_vertical_icon">
                    <MoreVertIcon onClick={() => console.log(index)} />
                </div>
                <div>
                    <MoreButtonActions />
                </div>
            </section>
        </li>
    )
}