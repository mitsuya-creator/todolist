import { React, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreButtonActions from "./moreButtonActions";

function Card({ title, descriptions, id }) {
    const [action, setAction] = useState(false);
    const handleMoreIcon = idCard => {
        //Check if morebutonaction active on other card
        if (document.body.classList.add("more_button_actived"))
            if (idCard == id) {
                setAction(true)
            }
        console.log(idCard)
    }
    return (
        <li className="body_list_by_actions">
            <section>
                <div>
                    <h1>{title}</h1>
                    <p>{descriptions}</p>
                </div>
                <div className="more_vertical_icon">
                    <MoreVertIcon onClick={() => handleMoreIcon(id)} />
                </div>
                {action ? <MoreButtonActions /> : null}
                <div>
                </div>
            </section>
        </li>
    )
}
export default Card;