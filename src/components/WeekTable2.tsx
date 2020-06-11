import React from "react";
import {Container} from "semantic-ui-react";
import {Dish} from "../models/Dish";
import {DishCard} from "./DishCard";
import {getCurrentWeek} from "../util/dateUtils";

//@ts-ignore
type Props = { dishes: Dish[] };
const WeekTable2 = ({dishes}: Props) => {
    const curs = getCurrentWeek();
    return (
        <div>
            <Container>
                {
                    curs.map(day => {
                        var index = curs.indexOf(day);
                        var dish = dishes[index];
                        return <DishCard key={dish.uuid} dish={dish} weekDay={day}/>
                    })
                }
            </Container>
        </div>
    )
};

export default WeekTable2;
