import React from "react";
import {Container, Grid, Message, Placeholder} from "semantic-ui-react";
import {Dish} from "../../models/Dish";
import {DishCard} from "./DishCard";
import {getCurrentWeek} from "../../util/dateUtils";
import {Moment} from "moment";
import {regenerateDish} from "../../util/tools";
import {CorruptionCard} from "./CorruptionCard";

//@ts-ignore
type Props = { dishes: Dish[], callback: (old: Dish, newDish: Dish) => void };
const DishesContainer = ({dishes, callback}: Props) => {

    const createDishCard = (day: Moment, curs: Moment[], dishes: Dish[]) => {
        const dish = dishes[curs.indexOf(day)];
        return dish ? <DishCard recreateWeekKeyCallback={callback}
                                recreateCommand={recreateOne}
                                key={dish.uuid}
                                dish={dish}
                                weekDay={day}/> : <CorruptionCard/>;
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
                {
                    dishes.length !== 7 &&
                    <div style={{marginBottom: "5%"}}>
                        <Message
                            icon='warning'
                            header='Warning'
                            content='Not all dishes could be parsed'
                        />
                    </div>
                }
                <Grid>
                    {dishes.length !== 0 &&
                    curs.map(day => createDishCard(day, curs, dishes))
                    }
                </Grid>
            </Container>
        </div>
    )
};


export default DishesContainer;
