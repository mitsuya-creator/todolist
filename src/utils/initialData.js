export const data = [
    {
        id: +new Date(),
        title: "Get Up",
        date: new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }),
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lor",
        isCompleted: true
    }
]
