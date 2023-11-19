import { data } from "@/utils/initialData";


let initialData;
function getItemFromLocalStorage() {
    if (localStorage.getItem("events") == null) {
        localStorage.setItem("events", JSON.stringify(data));
    }
    initialData = localStorage.getItem("events");
    return JSON.parse(initialData);
}

export { getItemFromLocalStorage };