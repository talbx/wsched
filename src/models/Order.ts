import {Dish} from "./Dish";

export class Order extends Dish {
    type: FoodType;

    constructor(name: string, type: FoodType, veggie: boolean) {
        super(name, veggie);
        this.type = type;
    }
}

export enum FoodType {
    SUSHI = "SUSHI",
    PIZZA = "PIZZA",
    GREEK = "GRIECHISCH",
    ASIA = "ASIATISCH",
    BURGER = "BURGER",
    REGULAR = "REGULAR"
}

export const deliveryServices: Order[] = [
    new Order("Kirat", FoodType.ASIA, true),
    new Order("Irodion", FoodType.GREEK, false),
    new Order("BurgerMe", FoodType.BURGER, false),
    new Order("Kirat", FoodType.SUSHI, true),
    new Order("Rohhäppchen", FoodType.SUSHI, false),
    new Order("ReadyPizza", FoodType.PIZZA, true)
];
