import { React } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreButtonActions from "./moreButtonActions";
import { toggleMoreButtonActiveList } from "@/utils/toggleMoreButtonActiveList";

function Card({ title, descriptions, id }) {
    const handleMoreIcon = idCard => {
        toggleMoreButtonActiveList(idCard);
    }
    return (
        <li className="body_list_by_actions">
            <section>
                <div>
                    <h1>{title}</h1>
                    <p>{descriptions}</p>
                </div>
                <MoreVertIcon onClick={() => handleMoreIcon(id)} className="more_vertical_icon" />
                <MoreButtonActions />
            </section>
        </li>
    )
}
export default Card;