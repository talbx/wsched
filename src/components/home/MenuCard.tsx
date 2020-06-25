import {Button, Card, Checkbox, Container, Divider, Grid, Header, Input} from "semantic-ui-react";
import {generateJPEG, iVP} from "../../util/tools";
import MenuSchedule from "./MenuSchedule";
import React, {FormEvent, useState} from "react";
import moment from "moment";
import {Dish} from "../../models/Dish";
import {DishesSupplier, hashToWeekSchedule, WeekSchedule} from "../../util/DishesSupplier";

const MenuCard = () => {
    const [bbq, setBbq] = useState<boolean>(false)
    const [order, setOrder] = useState<boolean>(false)
    const [veggie, setVeggie] = useState<boolean>(false)
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [exceptionDishes, enableExceptionDishes] = useState<boolean>(false);
    const [validPassphrase, setValidPassphrase] = useState<boolean>(true);
    const [uuid, setUuid] = useState<string>('');
    const [validUuid, setValidUuid] = useState<boolean>(false);

    function generate(event: FormEvent<HTMLFormElement> | null) {
        const generated: WeekSchedule = new DishesSupplier()
            .withBBQ(bbq)
            .withExceptionDishes(exceptionDishes)
            .veggieOnly(veggie)
            .withOrder(order)
            .supply()

        setDishes(generated.dishes);
        setUuid(generated.uuid);
        if (event)
            event.preventDefault();
    }

    function decodeId(event: React.FormEvent<HTMLFormElement> | null) {
        hashToWeekSchedule(uuid)
    }

    return (
        <div>
            <Card fluid color="teal" style={{padding: '1em 0em'}}>
                <Card.Content>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Card.Header as='h2'>Wochenplan Generator</Card.Header>
                            <form onSubmit={(event) => generate(event)}>
                                <Grid container columns={2}>
                                    <Grid style={{marginTop: "2%"}} container columns={2} stackable>
                                        <Grid.Column>
                                            <Checkbox style={{padding: '0em 1em'}} toggle
                                                      onChange={() => setOrder(!order)}
                                                      label="Lust essen zu bestellen? "/>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Checkbox style={{padding: '0em 1em'}} toggle
                                                      onChange={() => setVeggie(!veggie)}
                                                      label="Vegetarische Woche? "/>
                                        </Grid.Column>
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
                                        <Grid.Column>
                                            <Input onChange={(event, data) => setValidPassphrase(iVP(data.value))}
                                                   style={{padding: '0em 1em'}}
                                                   size="mini" label='Passphrase' type='password'/>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Button type="submit" disabled={!validPassphrase}
                                                    onClick={() => generate(null)}
                                                    basic
                                                    color="teal">Generieren
                                            </Button>
                                        </Grid.Column>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid.Column>
                        <Grid.Column>
                            <Card.Header as='h2'>Wochenplan wiederherstellen</Card.Header>
                            <form onSubmit={(event) => decodeId(event)}>
                                <Grid columns="equal">
                                    <Grid.Column>
                                        <Input onChange={(event, data) => setValidUuid(data.value.length === 32)}
                                               icon='key' placeholder='Enter wsched Hash'/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button type="submit" disabled={!validUuid} onClick={() => decodeId(null)}
                                                basic
                                                color="teal">Wiederherstellen
                                        </Button>
                                    </Grid.Column>
                                </Grid>
                            </form>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>ODER</Divider>
                </Card.Content>
            </Card>
            {
                dishes.length !== 0
                &&
                <Card fluid color="teal" style={{padding: '1em 0em'}}>
                    <Container>
                        <Header as='h2'>Speiseplan für KW
                            {
                                moment().week()
                            }
                        </Header>
                        <Header style={{marginBottom: "5%"}} as='h5'>ID: {uuid}</Header>
                        <MenuSchedule dishes={dishes}/>
                        <Button style={{marginTop: "2%"}} fluid color="teal" onClick={() => generateJPEG()}>Export to
                            JPEG</Button>
                    </Container>
                </Card>
            }
        </div>
    )
};

export default MenuCard;
