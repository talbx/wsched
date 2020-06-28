import React from "react";
import {Container, Grid} from "semantic-ui-react";
import {Dish} from "../../models/Dish";
import {DishCard} from "./DishCard";
import {getCurrentWeek} from "../../util/dateUtils";
import {Moment} from "moment";

//@ts-ignore
type Props = { dishes: Dish[] };
const DishesContainer = ({dishes}: Props) => {
    const curs = getCurrentWeek();
    return (
        <div id="wsched">
            <Container>
                <Grid>
                    {
                        curs.map(day => createDishCard(day, curs, dishes))
                    }
                </Grid>
            </Container>
        </div>
    )
};

const createDishCard = (day: Moment, curs: Moment[], dishes: Dish[]) => {
    console.log("DISCH", dishes);
    const index = curs.indexOf(day);
    const dish = dishes[index];
    return <DishCard key={dish.uuid} dish={dish} weekDay={day}/>;
}

export default DishesContainer;
