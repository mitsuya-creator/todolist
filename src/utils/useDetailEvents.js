import { useContext } from "react";
import { EventsContext } from "@/utils/contex";

export function useDetailEvent(id) {
    const events = useContext(EventsContext)
    const event = events.filter(event => event.id == id);
    return event;
}