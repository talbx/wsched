import {Dish} from "./Dish";

export class BBQ extends Dish{
    name = "Grillen";
    constructor(name: string) {
        super(name, false);
    }
}
