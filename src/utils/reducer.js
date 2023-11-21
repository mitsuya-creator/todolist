import { showFormattedDate } from "@/utils/showFormattedDate";


export function eventsReducer(events, action) {
    switch (action.type) {
        case "added": {
            return [
                ...events, {
                    id: +new Date(),
                    title: action.title,
                    date: showFormattedDate(action.date),
                    description: action.description,
                    isCompleted: false
                }
            ]
        }
        case "changed": {
            return events.map(event => {
                if (event.id === action.event.id) {
                    return action.event
                } else {
                    return event
                }
            })
        }
        default: {
            throw Error("Unknown action");
        }
    }
}