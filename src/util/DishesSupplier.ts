import {Supplier} from "./Supplier";
import {deliveryServices, Dish, dishes, exceptionDishes} from "../models/Dish";

export class DishesSupplier implements Supplier<Dish[]> {
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

    supply(): Dish[] {
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
        return shuffled.slice(0, 7);
    }
}
