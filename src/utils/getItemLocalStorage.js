import { data } from "@/utils/initialData";


let initialData;
function getItemFromLocalStorage() {
    if (localStorage.getItem("events") == null) {
        localStorage.setItem("events", JSON.stringify(data));
    }
    initialData = localStorage.getItem("events");
    return JSON.parse(initialData);
}
function addItemToLocalStorage(updateData) {
    console.log("addItem")
    localStorage.setItem("events", JSON.stringify(updateData))
    return 0;
}

export { getItemFromLocalStorage, addItemToLocalStorage };