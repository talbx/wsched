import React from "react";
import {Table} from "react-bootstrap";
import {generateNRandomDishes} from "./tools";

const WeekTable = () => {

    const dishes = generateNRandomDishes(7);
    const generated = false;
    return (
        <div className="container-md">
            {
                generated &&
                <Table hover>
                    <thead>
                    <tr>
                        <th>Montag</th>
                        <th>Dienstag</th>
                        <th>Mittwoch</th>
                        <th>Donnerstag</th>
                        <th>Freitag</th>
                        <th>Samstag</th>
                        <th>Sonntag</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {
                            dishes.map(dish => <td>{dish.name}</td>)
                        }
                    </tr>
                    </tbody>
                </Table>
            }

            <h1>Todos</h1>

            <Table hover responsive="md">
                <thead>
                <tr>
                    <th>Montag</th>
                    <th>Dienstag</th>
                    <th>Mittwoch</th>
                    <th>Donnerstag</th>
                    <th>Freitag</th>
                    <th>Samstag</th>
                    <th>Sonntag</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Zettelwirtschaft</td>
                    <td>Einkaufen</td>
                    <td>Küche</td>
                    <td/>
                    <td>Staubsaugen</td>
                    <td>Pfand + Papier</td>
                    <td>Aufräumen</td>
                </tr>
                <tr>
                    <td>Staubsaugen</td>
                    <td/>
                    <td>Bad</td>
                    <td/>
                    <td>Einkaufen</td>
                    <td>Küche</td>
                    <td>Wäsche</td>
                </tr>
                <tr>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td>Bad</td>
                    <td/>
                </tr>
                </tbody>
            </Table>
        </div>
    )
};

export default WeekTable;
