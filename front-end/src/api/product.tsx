import { ProductType } from "../pages/types/product";
import { isAuthenticate } from "../utils/auth";
import instance from "./instance";



export const list = () => {
    const url = `/products/?_expand=category`;
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const add = (product: ProductType, { token, user} = isAuthenticate()) => {
    const url = `/products/${user._id}`;
    return instance.post(url, product,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const listbyID = (id: number) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const update = (product: ProductType) =>{
    const url = `/products/${product._id}`;
    return instance.put(url, product)
}