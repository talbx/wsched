import {Button, Card, Checkbox, Container, Header, Input} from "semantic-ui-react";
import {generateDishes, isValidPassphrase} from "../util/tools";
import WeekTable2 from "./WeekTable2";
import React, {FormEvent, useState} from "react";
import moment from "moment";

const MenuCard = () => {
    const [bbq, setBbq] = useState(false)
    const [order, setOrder] = useState(false)
    const [veggie, setVeggie] = useState(false)
    const [dishes, setDishes] = useState([]);
    const [validPassphrase, setValidPassphrase] = useState(false);

    function generate(event: FormEvent<HTMLFormElement> | null) {
        //@ts-ignore
        setDishes(generateDishes(order, veggie, bbq));
        if (event)
            event.preventDefault();
    }

    return (
        <Card fluid color="teal" style={{padding: '1em 0em'}}>
            <Card.Content>
                <Card.Header>Speiseplan</Card.Header>
                <form onSubmit={(event) => generate(event)}>
                    <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setBbq(!bbq)}
                              label="Grillwetter? "/>
                    <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setOrder(!order)} checked={order}
                              label="Lust essen zu bestellen? "/>
                    <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setVeggie(!veggie)}
                              checked={veggie}
                              label="Vegetarische Woche? "/>

                    <Input onChange={(event, data) => setValidPassphrase(isValidPassphrase(data.value))}
                           style={{padding: '0em 1em'}}
                           size="mini" label='Passphrase' type='password'/>
                    <Button type="submit" disabled={!validPassphrase} onClick={() => generate(null)} basic
                            color="teal">Generieren</Button>
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