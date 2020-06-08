import {Dish} from "../models/Dish";
import {FoodType, Order} from "../models/Order";
import {Divider, Label, Table} from "semantic-ui-react";
import React from "react";
import {uuidv4} from "./tools";

export class DishEntry {
    constructor(dishEntryBuilder: DishEntryBuilder) {
        return (
            <Table.Cell key={dishEntryBuilder.uuid}> {dishEntryBuilder.name} <br/>
                <Divider/>
                {
                    buildBBQ(dishEntryBuilder.name) &&
                    buildVeggie(dishEntryBuilder.veggie) &&
                    buildOrder(dishEntryBuilder.type)
                }
                <i onClick={() => console.log("HUHUHU")} aria-hidden="true" className="refresh icon"/>
            </Table.Cell>
        );
    }
}

function buildOrder(type: FoodType) {
    if (type !== FoodType.REGULAR) {
        return (
            <div>
                <Label basic className="mini" color="black">Bestellung</Label>
                <Label basic className="mini" color="blue">{type}</Label>
            </div>
        );
    }
    return <div/>;
}

function buildVeggie(veggie: boolean) {
    console.log("checking if it is veggie: ", veggie);
    if (veggie) {
        return (
            <Label basic className="mini" color="green">Veggie</Label>
        );
    }
    return <div/>;
}

function buildBBQ(name: string) {
    console.log("checking if it is Grillen", name);
    if (name === "Grillen") {
        return (
            <Label basic className="mini" color="red">BBQ</Label>
        );
    }
    return <div/>
}

export class DishEntryBuilder {
    get type(): FoodType {
        return this._type;
    }

    get veggie(): boolean {
        return this._veggie;
    }

    get uuid(): string {
        return this._uuid;
    }

    get name(): string {
        return this._name;
    }

    //@ts-ignore
    private _name: string;
    //@ts-ignore
    private _uuid: string;
    //@ts-ignore
    private _veggie: boolean;

    //@ts-ignore
    private _type: FoodType;


    withName(name: string) {
        this._name = name;
        return this;
    }

    withVeggie(veggie: boolean) {
        this._veggie = veggie;
        return this;
    }

    withType(fn: () => FoodType) {
        this._type = fn();
        return this;
    }

    build() {
        this._uuid = uuidv4();
        return new DishEntry(this);
    }
}


export function buildDishEntry(dish: Dish): DishEntry {
    return new DishEntryBuilder()
        .withName(dish.name)
        .withType(() => {
            if (dish instanceof Order) {
                return dish.type;
            }
            return FoodType.REGULAR;
        })
        .withVeggie(dish.veggie)
        .build();
}
