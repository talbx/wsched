import {uuidv4} from "./tools";

export class Order {
    name: string;
    type: FoodType;
    veggie: boolean;
    uuid: string;

    constructor(name: string, type:FoodType, veggie: boolean) {
        this.name = name;
        this.type = type;
        this.veggie = veggie;
        this.uuid = uuidv4();
    }
}

export enum FoodType {
    SUSHI,
    PIZZA,
    GREEK,
    ASIA,
    BURGER
}

export const deliveryServices: Order[] = [
    new Order("Kirat", FoodType.ASIA, true),
    new Order("Irodion", FoodType.GREEK, false),
    new Order("BurgerMe", FoodType.BURGER, false),
    new Order("Kirat", FoodType.SUSHI, true),
    new Order("Rohhäppchen", FoodType.SUSHI, false),
    new Order("ReadyPizza", FoodType.PIZZA, true)
];
