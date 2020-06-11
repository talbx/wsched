import {Button, Card, Checkbox, Container, GridRow, Header, Input} from "semantic-ui-react";
import {generateDishes, isValidPassphrase} from "../util/tools";
import WeekTable2 from "./WeekTable2";
import React, {FormEvent, useState} from "react";
import moment from "moment";
import {Dish} from "../models/Dish";

const MenuCard = () => {
    const [bbq, setBbq] = useState<boolean>(false)
    const [order, setOrder] = useState<boolean>(false)
    const [veggie, setVeggie] = useState<boolean>(false)
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [exceptionDishes, enableExceptionDishes] = useState<boolean>(false);
    const [validPassphrase, setValidPassphrase] = useState<boolean>(false);

    function generate(event: FormEvent<HTMLFormElement> | null) {
        setDishes(generateDishes(order, veggie, bbq));
        if (event)
            event.preventDefault();
    }

    return (
        <Card fluid color="teal" style={{padding: '1em 0em'}}>
            <Card.Content>
                <Card.Header>Speiseplan</Card.Header>
                <form onSubmit={(event) => generate(event)}>
                    <GridRow style={{padding: '0em 1em', marginTop: '2%'}} >
                        <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setOrder(!order)}
                                  label="Lust essen zu bestellen? "/>
                        <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setVeggie(!veggie)}
                                  label="Vegetarische Woche? "/>
                        <Input onChange={(event, data) => setValidPassphrase(isValidPassphrase(data.value))}
                               style={{padding: '0em 1em'}}
                               size="mini" label='Passphrase' type='password'/>
                        <Button type="submit" disabled={!validPassphrase} onClick={() => generate(null)} basic
                                color="teal">Generieren</Button>
                    </GridRow>
                    <GridRow style={{padding: '0em 1em'}} >
                        <Checkbox style={{padding: '0em 1em'}} toggle
                                  onChange={() => enableExceptionDishes(!exceptionDishes)}
                                  label="Exception Dishes? "/>
                        <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setBbq(!bbq)}
                                  label="Grillwetter? "/>
                    </GridRow>
                </form>
            </Card.Content>
            {
                dishes.length !== 0
                &&
                <Container>
                    <Header as='h2'>Speiseplan für KW
                        {
                            moment().week()
                        }
                    </Header>
                    <WeekTable2 dishes={dishes}/>
                </Container>
            }
        </Card>
    )
};

export default MenuCard;
