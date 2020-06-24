import {Button, Card, Checkbox, Container, Divider, Grid, Header, Input} from "semantic-ui-react";
import {generateJPEG, iVP} from "../../util/tools";
import MenuSchedule from "./MenuSchedule";
import React, {FormEvent, useState} from "react";
import moment from "moment";
import {Dish} from "../../models/Dish";
import {DishesSupplier} from "../../util/DishesSupplier";

const MenuCard = () => {
    const [bbq, setBbq] = useState<boolean>(false)
    const [order, setOrder] = useState<boolean>(false)
    const [veggie, setVeggie] = useState<boolean>(false)
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [exceptionDishes, enableExceptionDishes] = useState<boolean>(false);
    const [validPassphrase, setValidPassphrase] = useState<boolean>(true);

    function generate(event: FormEvent<HTMLFormElement> | null) {
        const generated = new DishesSupplier()
            .withBBQ(bbq)
            .withExceptionDishes(exceptionDishes)
            .veggieOnly(veggie)
            .withOrder(order)
            .supply()

        setDishes(generated);
        if (event)
            event.preventDefault();
    }

    return (
        <Card fluid color="teal" style={{padding: '1em 0em'}}>
            <Card.Content>
                <Card.Header>Wochenplan Generator</Card.Header>
                <form onSubmit={(event) => generate(event)}>
                    <Grid container columns={2}>
                        <Grid style={{marginTop: "2%"}} container columns={3} stackable>
                            <Grid.Column>
                                <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setOrder(!order)}
                                          label="Lust essen zu bestellen? "/>
                            </Grid.Column>
                            <Grid.Column>
                                <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setVeggie(!veggie)}
                                          label="Vegetarische Woche? "/>
                            </Grid.Column>
                            <Grid.Column/>
                            <Grid.Column>
                                <Checkbox style={{padding: '0em 1em'}} toggle
                                          disabled={true}
                                          readOnly={true}
                                          onChange={() => enableExceptionDishes(!exceptionDishes)}
                                          label="Exception Dishes? "/>
                            </Grid.Column>
                            <Grid.Column>
                                <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setBbq(!bbq)}
                                          label="Grillwetter? "/>
                            </Grid.Column>
                            <Grid.Column/>
                            <Grid.Column>
                                <Input onChange={(event, data) => setValidPassphrase(iVP(data.value))}
                                       style={{padding: '0em 1em'}}
                                       size="mini" label='Passphrase' type='password'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Button type="submit" disabled={!validPassphrase} onClick={() => generate(null)} basic
                                        color="teal">Generieren
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Grid>
                </form>
            </Card.Content>
            {
                dishes.length !== 0
                &&
                <Container>
                    <Divider/>
                    <Header style={{marginBottom: "5%"}} as='h2'>Speiseplan für KW
                        {
                            moment().week()
                        }
                    </Header>
                    <MenuSchedule dishes={dishes}/>
                    <Button style={{marginTop: "2%"}} fluid color="teal" onClick={() => generateJPEG()}>Export to JPEG</Button>
                </Container>
            }
        </Card>
    )
};

export default MenuCard;
