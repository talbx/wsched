import {Supplier} from "./Supplier";
import {allDishesAndServices, deliveryServices, Dish, dishes, exceptionDishes} from "../models/Dish";

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
        let selection = shuffled.slice(0, 7);
        return {
            dishes: selection,
            uuid: generateKey(selection)
        };
    }
}

export const keyToSchedule = (key: string): WeekSchedule => {
    console.log("restoring wsched with key", key);
    let match = key.match(new RegExp('.{1,' + 4 + '}', 'g'));
    var result = allDishesAndServices.filter(dish => match?.includes(dish.uuid.substring(0, 4)));
    const shuffled = result.sort(() => 0.5 - Math.random());
    return {
        dishes: shuffled,
        uuid: key
    };
}
const generateKey = (dishes: Dish[]): string => {
    var key = '';
    dishes.forEach(dish => key = key + dish.uuid.substring(0, 4))
    console.log('key generated', key, key.length);
    return key;
}
