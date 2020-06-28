import {Button, Card, Container, Header} from "semantic-ui-react";
import moment from "moment";
import DishesContainer from "./DishesContainer";
import {generateJPEG} from "../../util/tools";
import React from "react";
import {Dish} from "../../models/Dish";

type DishesContainerCardParam = {dishes: Dish[], scheduleKey: string, restored: boolean}
export const DishesContainerCard = (param: DishesContainerCardParam) => {
    return (
        <Card fluid color="teal" style={{padding: '1em 0em'}}>
            <Container>
                {
                    (param.restored &&
                    <Header as='h2'>Wiederhergestellter Speiseplan</Header>)
                }
                {
                    (!param.restored &&
                        <Header as='h2'>Speiseplan für KW
                            {
                                moment().week()
                            }
                        </Header>
                    )
                }
                <Header style={{marginBottom: "5%"}} as='h5'>Key: {param.scheduleKey}</Header>
                <DishesContainer dishes={param.dishes}/>
                <Button style={{marginTop: "2%"}} fluid color="teal" onClick={() => generateJPEG()}>Export to
                    JPEG</Button>
            </Container>
        </Card>
    )
}
