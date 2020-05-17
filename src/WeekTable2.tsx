import React from "react";
import {Container, Label, Table} from "semantic-ui-react";
import {Order} from "./Order";
import {Dish} from "./Dishes";

const WeekTable2 = ({dishes}: any) => {

    const dow = ['Montag', "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

    return (
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
                    <Table.Row>
                        {
                            //@ts-ignore
                            dishes.map(thingy => {
                                if (thingy instanceof Order) {
                                    return processOrder(thingy);
                                }
                                return processDish(thingy);
                            })
                        }
                    </Table.Row>
                </Table.Body>
            </Table>
        </Container>
    )
}

export default WeekTable2;

function processDish(dish: Dish) {
    if (dish.veggie) {
        return <Table.Cell key={dish.uuid}>
            {dish.name} <br/>
            <Label basic className="mini" color="green">Veggie</Label>
        </Table.Cell>
    } else if(dish.name === "Grillen"){
        return <Table.Cell key={dish.uuid}>
            {dish.name} <br/>
            <Label basic className="mini" color="red">BBQ</Label>
        </Table.Cell>
    }
    return <Table.Cell key={dish.uuid}>{dish.name}</Table.Cell>
}

function processOrder(order: Order) {
    if (order.veggie) {
        return <Table.Cell key={order.uuid}>
            {order.name} <br/>
            <Label basic className="mini" color="green">Veggie</Label>
            <Label basic className="mini" color="black">Bestellung</Label>
        </Table.Cell>
    }
    return <Table.Cell key={order.uuid}>{order.name} <br/>
        <Label basic className="mini" color="black">Bestellung</Label>
    </Table.Cell>
}