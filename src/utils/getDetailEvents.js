import { getItemFromLocalStorage } from "@/utils/getItemLocalStorage";

let initialData = getItemFromLocalStorage();
export function getDetailEvent(id) {
    return initialData.filter(data => data.id == id);
}