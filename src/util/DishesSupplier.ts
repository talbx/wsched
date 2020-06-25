import {Supplier} from "./Supplier";
import {deliveryServices, Dish, dishes, exceptionDishes} from "../models/Dish";

var md5 = require('md5');

export interface WeekSchedule {
    dishes: Dish[],
    uuid: string
}

export class DishesSupplier implements Supplier<WeekSchedule> {
    private withOrder_ = false;
    private veggieOnly_ = false;
    private exceptionDishes_ = false;
    private withBbq_ = false;

    withOrder(bool: boolean) {
        this.withOrder_ = bool;
        return this;
    }

    veggieOnly(bool: boolean) {
        this.veggieOnly_ = bool;
        return this;
    }

    withBBQ(bool: boolean) {
        this.withBbq_ = bool;
        return this;
    }

    withExceptionDishes(bool: boolean) {
        this.exceptionDishes_ = bool;
        return this;
    }

    supply(): WeekSchedule {
        const arr: any[] = [];
        if (this.withBbq_ && !this.veggieOnly_) {
            arr.push(dishes.find(dish => dish.name === 'Grillen'));
        }
        if (this.withOrder_) {
            deliveryServices.forEach(service => {
                if ((this.veggieOnly_ && service.veggie) || !this.veggieOnly_) {
                    arr.push(service)
                }
            });
        }
        dishes.forEach((dish: Dish) => {
            if ((this.veggieOnly_ && dish.veggie) || !this.veggieOnly_) {
                arr.push(dish)
            }
        });

        if (this.exceptionDishes_) {
            arr.push(...exceptionDishes);
        }

        const shuffled = arr.sort(() => 0.5 - Math.random());
        return {
            dishes: shuffled.slice(0, 7),
            uuid: generateHash(dishes)
        };
    }
}

export const hashToWeekSchedule = (hash: string): Dish[] => {
    const shuffeld = dishes.sort(() => 0.5 - Math.random());
    var tempHash = '';
    let col = shuffeld.slice(0, 7);
    col.forEach(dish => tempHash = tempHash + dish.uuid);
    if (hash === tempHash) {
        return col;
    }
    return hashToWeekSchedule(hash);
}

const generateHash = (dishes: Dish[]): string => {
    var toBehashed = '';
    dishes.forEach(dish => toBehashed = toBehashed + dish.uuid)
    let md = md5(toBehashed);
    console.log('md5 length', md.length);
    return md;
}
