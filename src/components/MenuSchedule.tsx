import React from "react";
import {Container} from "semantic-ui-react";
import {Dish} from "../models/Dish";
import {DishCard} from "./DishCard";
import {getCurrentWeek} from "../util/dateUtils";

//@ts-ignore
type Props = { dishes: Dish[] };
const MenuSchedule = ({dishes}: Props) => {
    const curs = getCurrentWeek();
    return (
        <div>
            <Container>
                {
                    curs.map(day => {
                        const index = curs.indexOf(day);
                        const dish = dishes[index];
                        return <DishCard key={dish.uuid} dish={dish} weekDay={day}/>
                    })
                }
            </Container>
        </div>
    )
};

export default MenuSchedule;
