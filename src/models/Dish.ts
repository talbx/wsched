import {FoodType} from "./FoodType";

var md5 = require('md5');

export class Dish {
    name: string;
    uuid: string;
    veggie: boolean;
    type: FoodType

    constructor(name: string, veggie: boolean, type: FoodType) {
        this.name = name;
        this.veggie = veggie;
        this.type = type;
        this.uuid = md5(name + veggie + type);
        console.log("created dish " + this.name + " with uuid " + this.uuid);
    }
}

export enum Gender {
    FEMALE = "FEMALE",
    MALE = "MALE"
}

export class ExceptionDish extends Dish {

    sex: Gender;

    constructor(name: string, veggie: boolean, type: FoodType, sex: Gender) {
        super(name, veggie, type);
        this.sex = sex;
    }
}

const dish = (name: string, veggie: boolean, type: FoodType): Dish => {
    return new Dish(name, veggie, type);
};

const regularDish = (name: string, veggie: boolean): Dish => {
    return dish(name, veggie, FoodType.REGULAR);
};

const order = (name: string, veggie: boolean): Dish => {
    return dish(name, veggie, FoodType.ORDER);
}

const femaleDish = (name: string): ExceptionDish => {
    return exceptionDish(name, true, Gender.FEMALE);
}

const maleDish = (name: string): ExceptionDish => {
    return exceptionDish(name, false, Gender.MALE);
}

const exceptionDish = (name: string, veggie: boolean, gender: Gender) => {
    return new ExceptionDish(name, veggie, FoodType.EXCEPTION, gender);
}

export const dishes: Dish[] = [
    regularDish("Auflauf", true),
    regularDish("Bolo", false),
    regularDish("Brot mit Aufschnitt", true),
    regularDish("Carbonara", false),
    regularDish("Chili con carne", false),
    regularDish("Flammkuchen", false),
    regularDish("Gemüsepfanne", true),
    regularDish("Gulasch", false),
    regularDish("Grillen", false),
    regularDish("Hühnerfrikassee", false),
    regularDish("Pizza", true),
    regularDish("Normales Reiscurry", true),
    regularDish("Nudeln mit Sahne sauce", true),
    regularDish("Pfannkuchen", true),
    regularDish("Risotto", true),
    regularDish("Süßes Ananas Reis Curry", true),
    regularDish("Salat", true),
    regularDish("Tomatencreme Suppe", true),
    regularDish("Buntes Gemüse-Tortilla (Glutenfreies Kochbuch)", true),
    regularDish("Exotische Mörensuppe (Glutenfreies Kochbuch)", true),
    regularDish("Fischfilet mit Kräuterkruste (Glutenfreies Kochbuch)", false),
    regularDish("Geflügel-Reis Salat (Glutenfreies Kochbuch)", false),
    regularDish("Gulasch Petti di Pollo (Glutenfreies Kochbuch)", false),
    regularDish("Kalbsroulade (Glutenfreies Kochbuch)", false),
    regularDish("Kokos-Curry (Glutenfreies Kochbuch)", true),
    regularDish("Rote Linsen mit Schafskäse (Glutenfreies Kochbuch)", true),
    regularDish("Reispfanne mit Lachs (Glutenfreies Kochbuch)", false),
    regularDish("Rinderlende mit Paprika-Mix (Glutenfreies Kochbuch)", false)
];

export const deliveryServices: Dish[] = [
    order("Kirat", true),
    order("Irodion", false),
    order("BurgerMe", false),
    order("Rohhäppchen", false),
    order("ReadyPizza", true)
];

export const exceptionDishes: ExceptionDish[] = [
    maleDish("Steak mit Reis"),
    femaleDish("Tomate - Mozzarella Salat")
]

export const allDishesAndServices: Dish[] = [...dishes, ...deliveryServices]
