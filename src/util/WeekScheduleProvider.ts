import {allDishesAndServices, deliveryServices, Dish, dishes, exceptionDishes} from "../models/Dish";

interface Provider<T>{
    provide(): T
}

export interface WeekSchedule {
    dishes: Dish[],
    uuid: string
}

export class WeekScheduleProvider implements Provider<WeekSchedule> {
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

    provide(): WeekSchedule {
        const arr: any[] = [];
        this.handleBbq(arr);
        this.handleOrders(arr);
        this.handleVeggies(arr);
        this.handleExceptionDishes(arr);
        const selection = this.shuffle(arr);
        return {
            dishes: selection,
            uuid: generateKey(selection)
        };
    }

    private shuffle(arr: any[]) {
        return arr.sort(() => 0.5 - Math.random()).slice(0, 7);
    }

    private handleExceptionDishes(arr: any[]) {
        if (this.exceptionDishes_) {
            arr.push(...exceptionDishes);
        }
    }

    private handleVeggies(arr: any[]) {
        dishes.forEach((dish: Dish) => {
            if ((this.veggieOnly_ && dish.veggie) || !this.veggieOnly_) {
                arr.push(dish)
            }
        });
    }

    private handleOrders(arr: any[]) {
        if (this.withOrder_) {
            deliveryServices.forEach(service => {
                if ((this.veggieOnly_ && service.veggie) || !this.veggieOnly_) {
                    arr.push(service)
                }
            });
        }
    }

    private handleBbq(arr: any[]) {
        if (this.withBbq_ && !this.veggieOnly_) {
            arr.push(dishes.find(dish => dish.name === 'Grillen'));
        }
    }
}

// broken key: 5fca158cdccc457c5fcad68fcba4
// workin key: b3a8aca30313b565b27bdccc0e57
export const keyToSchedule = (key: string): WeekSchedule => {
    let match = key.match(new RegExp('.{1,' + 4 + '}', 'g'));
    var result = allDishesAndServices.filter(dish => match?.includes(dish.uuid.substring(0, 4)));
    const shuffled = result.sort(() => 0.5 - Math.random());
    return {
        dishes: shuffled,
        uuid: key
    };
}
export const generateKey = (dishes: Dish[]): string => {
    var key = '';
    dishes.forEach(dish => key = key + dish.uuid.substring(0, 4))
    return key;
}
