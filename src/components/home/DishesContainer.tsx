import React from "react";
import {Container, Grid} from "semantic-ui-react";
import {Dish} from "../../models/Dish";
import {DishCard} from "./DishCard";
import {getCurrentWeek} from "../../util/dateUtils";
import {Moment} from "moment";
import {regenerateDish} from "../../util/tools";

//@ts-ignore
type Props = { dishes: Dish[], callback: (old: Dish, newDish: Dish) => void };
const DishesContainer = ({dishes, callback}: Props) => {

    const createDishCard = (day: Moment, curs: Moment[], dishes: Dish[]) => {
        const dish = dishes[curs.indexOf(day)];
        return <DishCard recreateWeekKeyCallback={callback}
                         recreateCommand={recreateOne}
                         key={dish.uuid}
                         dish={dish}
                         weekDay={day}/>;
    }

    const recreateOne = (dish: Dish): Dish => {
        let newDish = regenerateDish(dish, dishes);
        dishes.filter(d => d !== dish).push(newDish);
        return newDish;
    }

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


export default DishesContainer;
