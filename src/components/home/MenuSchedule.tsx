import React from "react";
import {Button, Container, Grid} from "semantic-ui-react";
import {Dish} from "../../models/Dish";
import {DishCard} from "./DishCard";
import {getCurrentWeek} from "../../util/dateUtils";
import htmlToImage from 'html-to-image';
import {generateJPEG} from "../../util/tools";

//@ts-ignore
type Props = { dishes: Dish[] };
const MenuSchedule = ({dishes}: Props) => {
    const curs = getCurrentWeek();
    return (
        <div id="wsched">
            <Container>
                <Grid>
                    {
                        curs.map(day => {
                            const index = curs.indexOf(day);
                            const dish = dishes[index];
                            return <DishCard key={dish.uuid} dish={dish} weekDay={day}/>
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
};

export default MenuSchedule;
