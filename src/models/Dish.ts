import {uuidv4} from "../util/tools";
import {FoodType} from "./FoodType";

export class Dish {
    name: string;
    uuid: string;
    veggie: boolean;
    type: FoodType

    constructor(name: string, veggie: boolean, type: FoodType) {
        this.name = name;
        this.uuid = uuidv4();
        this.veggie = veggie;
        this.type = type;
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

export const dishes: Dish[] = [
    regularDish("Carbonara", false),
    regularDish("Bolo", false),
    regularDish("Pizza", true),
    regularDish("Normales Reiscurry", true),
    regularDish("Pfannkuchen", true),
    regularDish("Flammkuchen", false),
    regularDish("Brot mit Aufschnitt", true),
    regularDish("Tomatencreme Suppe", true),
    regularDish("Nudeln mit Sahne sauce", true),
    regularDish("Auflauf", true),
    regularDish("Süßes Ananas Reis Curry", true),
    regularDish("Salat", true),
    regularDish("Gulasch", false),
    regularDish("Chili con carne", false),
    regularDish("Geflügel-Reis Salat (Glutenfreies Kochbuch)", false),
    regularDish("Exotische Mörensuppe (Glutenfreies Kochbuch)", true),
    regularDish("Kokos-Curry (Glutenfreies Kochbuch)", true),
    regularDish("Buntes Gemüse-Tortilla (Glutenfreies Kochbuch)", true),
    regularDish("Rote Linsen mit Schafskäse (Glutenfreies Kochbuch)", true),
    regularDish("Risotto", true),
    regularDish("Fischfilet mit Kräuterkruste (Glutenfreies Kochbuch)", false),
    regularDish("Reispfanne mit Lachs (Glutenfreies Kochbuch)", false),
    regularDish("Gulasch Petti di Pollo (Glutenfreies Kochbuch)", false),
    regularDish("Rinderlende mit Paprika-Mix (Glutenfreies Kochbuch)", false),
    regularDish("Kalbsroulade (Glutenfreies Kochbuch)", false),
    regularDish("Gemüsepfanne", true),
    regularDish("Hühnerfrikassee", false),
    regularDish("Grillen", false)
];

export const deliveryServices: Dish[] = [
    order("Kirat", true),
    order("Irodion",false),
    order("BurgerMe",false),
    order("Kirat",  true),
    order("Rohhäppchen", false),
    order("ReadyPizza", true)
];


export const allDishesAndServices: Dish[] = [...dishes, ...deliveryServices]
