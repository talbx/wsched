import React from "react";
import {Table} from "semantic-ui-react";
import {dow, uuidv4} from "../util/tools";
import {weekly} from "./TodoSchedule";

const TodoTable = () => {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    {
                        dow.map(day => <Table.HeaderCell key={day}>{day}</Table.HeaderCell>)
                    }
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    weekly.map(week => {
                        return (
                            <Table.Row key={uuidv4()}>
                                <Table.Cell>
                                    {week.monday}
                                </Table.Cell>
                                <Table.Cell>
                                    {week.tuesday}
                                </Table.Cell>
                                <Table.Cell>
                                    {week.wednesday}
                                </Table.Cell>
                                <Table.Cell>
                                    {week.thursday}
                                </Table.Cell>
                                <Table.Cell>
                                    {week.friday}
                                </Table.Cell>
                                <Table.Cell>
                                    {week.saturday}
                                </Table.Cell>
                                <Table.Cell>
                                    {week.sunday}
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
                <Table.Row>

                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default TodoTable;
