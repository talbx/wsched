import {Dish, dishes} from "../models/Dish";
import {deliveryServices} from "../models/Order";

var md5 = require('md5');

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
    dishes.forEach((dish: Dish) => {
        if (veggieOnly && dish.veggie || !veggieOnly) {
            arr.push(dish)
        }
    });

    if (withBbq) {
        console.log("WITH BBQ: ", withBbq);
        const shuffled = arr.sort(() => 0.5 - Math.random());
        let slice = shuffled.slice(0, 6);
        slice.push(new Dish("Grillen", false));
        return slice.sort(() => 0.5 - Math.random())
    }
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 7);
}

export const isValidPassphrase = (
    passphrase: string,
    fn: (input: string) => string = md5,
    pred: (p: string, comp: string) => boolean = (a, b) => a === b
): boolean => {
    let transformed = fn(passphrase);
    const hash = "9e3c4c2eb394293e3ab9e1d1e1e2c3ee";
    return pred(transformed, hash);
}

export const dow = ['Montag', "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
