import React, {useRef} from "react";
import {Container, Table} from "semantic-ui-react";
import {dow, uuidv4} from "../util/tools";
import {buildDishEntry} from "../util/DishEntryBuilder";
import {Dish} from "../models/Dish";

//@ts-ignore
const WeekTable2 = ({dishes}) => {
    const ref = useRef();
    return (
        //@ts-ignore
        <div ref={ref}>
            <Container>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            {
                                dow.map(day => <Table.HeaderCell key={day}>{day}</Table.HeaderCell>)
                            }
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key={uuidv4()}>
                            {
                                dishes.map((thingy: Dish) => buildDishEntry(thingy))
                            }
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Container>
        </div>
    )
};

export default WeekTable2;
