import {Dish, dishes} from "./Dishes";
import {deliveryServices} from "./Order";

export function uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const generateNRandomDishes = (n: number) => {
    const shuffled = dishes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

export const generateDishes = (withOrder: boolean, veggieOnly: boolean, withBbq: boolean) => {
    const arr: any[] = [];
    if (withOrder) {
        deliveryServices.forEach(service => {
            if (veggieOnly && service.veggie || !veggieOnly) {
                arr.push(service)
            }
        });
    }
    dishes.forEach(dish => {
        if (veggieOnly && dish.veggie || !veggieOnly) {
            arr.push(dish)
        }
    });

    if (withBbq) {
        console.log("WITH BBQ: ", withBbq);
        const shuffled = arr.sort(() => 0.5 - Math.random());
        let slice = shuffled.slice(0, 6);
        slice.push(new Dish("Grillen", uuidv4(), false));
        return  slice.sort(() => 0.5 - Math.random())
    }
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 7);
}
