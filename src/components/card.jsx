import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreButtonActions from "./moreButtonActions";
import PropType from "prop-types";

function Card(props) {
    const { title, description } = props;
    return (
        <li className="body_list_by_actions">
            <section>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
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

Card.propTypes = {
    title: PropType.any,
    description: PropType.any
}
export default Card;