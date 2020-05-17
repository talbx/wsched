import {uuidv4} from "./tools";

export class Dish {
    name: string;
    uuid: string;
    veggie: boolean;

    constructor(name: string, uuid: string, veggie: boolean) {
        this.name = name;
        this.uuid = uuid;
        this.veggie = veggie;
    }
}

const dish = (name: string, veggie: boolean): Dish => {
    return new Dish(name, uuidv4(), veggie);
};

export const dishes: Dish[] = [
    dish("Carbonara", false),
    dish("Bolo", false),
    dish("Pizza", true),
    dish("Normales Reiscurry", true),
    dish("Pfannkuchen", true),
    dish("Flammkuchen", false),
    dish("Brot mit Aufschnitt", true),
    dish("Tomatencreme Suppe", true),
    dish("Nudeln mit Sahne sauce", true),
    dish("Auflauf", true),
    dish("Süßes Ananas Reis Curry", true),
    dish("Salat", true),
    dish("Gulasch", false),
    dish("Chili con carne", false),
    dish("Geflügel-Reis Salat (Glutenfreies Kochbuch)", false),
    dish("Exotische Mörensuppe (Glutenfreies Kochbuch)", true),
    dish("Kokos-Curry (Glutenfreies Kochbuch)", true),
    dish("Buntes Gemüse-Tortilla (Glutenfreies Kochbuch)", true),
    dish("Rote Linsen mit Schafskäse (Glutenfreies Kochbuch)", true),
    dish("Risotto", true),
    dish("Fischfilet mit Kräuterkruste (Glutenfreies Kochbuch)", false),
    dish("Reispfanne mit Lachs (Glutenfreies Kochbuch)", false),
    dish("Gulasch Petti di Pollo (Glutenfreies Kochbuch)", false),
    dish("Rinderlende mit Paprika-Mix (Glutenfreies Kochbuch)", false),
    dish("Kalbsroulade (Glutenfreies Kochbuch)", false),
    dish("Gemüsepfanne", true),
    dish("Hühnerfrikassee", false)
];
