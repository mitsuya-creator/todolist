import { getItemFromLocalStorage } from "@/utils/itemLocalStorage";

let initialData = getItemFromLocalStorage();
export function getDetailEvent(id) {
    return initialData.filter(data => data.id == id);
}