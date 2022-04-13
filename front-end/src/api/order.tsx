import { OrderType } from "../pages/types/order";
import instance from "./instance";


export const listorder = () => {
    const url = `/order`;
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/order/${id}`;
    return instance.delete(url);
}
export const add = (order: OrderType) => {
    const url = `/order/`;
    return instance.post(url, order);
}
export const listbyIdorder = (id: number) => {
    const url = `/order/${id}`;
    return instance.get(url);
}
export const update = (order: OrderType) =>{
    const url = `/order/${order._id}`;
    return instance.put(url, order)
}