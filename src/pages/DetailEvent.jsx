import { React, useState, useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ButtonBackNavigation from "@/components/button/ButtonNavigationBack";
import Slide from '@mui/material/Slide';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDetailEvent } from "@/utils/useDetailEvents";
import CardDetail from "@/components/CardDetail";
import ButtonAddTodo from '@/components/button/ButtonAddTodo';
import ModalConfirmDelete from "@/components/ModalConfirmDelete";
import { DispatchContext } from "@/utils/contex";
import SuccessCheckAnimation from '@/components/SuccessCheckAnimation';


export default function DetailEvent() {
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    const event = useDetailEvent(id)[0];
    const dispatch = useContext(DispatchContext);
    const navigate = useNavigate();
    const [isDeleted, setIsDeleted] = useState(false)
    const handleDeleted = eventId => {
        dispatch({
            type: "deleted",
            id: eventId
        })
    }
    useEffect(() => {
        let nav;
        if (isDeleted) {
            nav = setTimeout(() => navigate("/dashboard/events"), 1000)
        }
        return () => clearTimeout(nav);
    }, [isDeleted])
    let content;
    if (isDeleted) {
        content = <SuccessCheckAnimation />
    } else {
        content = <div className="container_detail_event">
            <div className="container_button_back_detail">
                <section className="button_back_title">
                    <ButtonBackNavigation />
                    <h1>Detail event</h1>
                </section>
                <section className="container_icon_title">
                    <Link to={`/events/detail/edit/${event.id}`} className="link">
                        <button>
                            <EditIcon />
                            <span>Edit</span>
                        </button>
                    </Link>
                    <button onClick={() => setIsOpen(true)}>
                        <DeleteIcon />
                        <span>Delete</span>
                    </button>
                </section>
            </div>
            <CardDetail event={event} />
            <ButtonAddTodo style={"container_button_add_todo_detail_event"} />
            <ModalConfirmDelete isOpen={isOpen} setIsOpen={setIsOpen} handleDeleted={() => handleDeleted(event.id)} setIsDeleted={setIsDeleted} />
        </div>
    }

    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div>
                {content}
            </div>
        </Slide>
    )
}