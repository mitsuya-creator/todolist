export function eventsReducer(events, action) {
    switch (action.type) {
        case "added": {
            return [
                ...events, {
                    id: +new Date(),
                    title: action.title,
                    date: action.date,
                    description: action.description,
                    isCompleted: false
                }
            ]
        }
        default: {
            throw Error("Unknown action");
        }
    }
}