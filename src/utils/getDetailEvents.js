import { data } from "@/utils/initialData";

export function getDetailEvent(id) {
    return data.filter(data => data.id == id);
}