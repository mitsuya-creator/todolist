import { React } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreButtonActions from "@/components/moreButtonActions";
import { toggleMoreButtonActiveList } from "@/utils/toggleMoreButtonActiveList";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Card({ title, descriptions, id, isCompleted }) {
    const handleMoreIcon = idCard => {
        toggleMoreButtonActiveList(idCard);
    }
    return (
        <li className="body_list_by_actions">
            <section>
                <div>
                    <h1>{title}{isCompleted ? <CheckCircleIcon fontSize={"small"} className="success_svg" /> : null} </h1>
                    <p>{descriptions}</p>
                </div>
                <MoreVertIcon onClick={() => handleMoreIcon(id)} className="more_vertical_icon" />
                <MoreButtonActions id={id} />
            </section>
        </ li>
    )
}
export default Card;