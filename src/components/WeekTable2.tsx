import React, {useRef} from "react";
import {Container, GridRow} from "semantic-ui-react";
import {dow} from "../util/tools";
import {Dish} from "../models/Dish";
import {DishCard} from "./DishCard";

//@ts-ignore
type Props = { dishes: Dish[] };
const WeekTable2 = ({dishes}: Props) => {
    const ref = useRef();
    return (
        //@ts-ignore
        <div ref={ref}>
            <Container>
                {
                    dow.map(day => {
                        var index = dow.indexOf(day);
                        var dish = dishes[index];
                        return <DishCard  key={dish.uuid} dish={dish} weekDay={day}/>
                    })
                }
            </Container>
        </div>
    )
};

export default WeekTable2;
