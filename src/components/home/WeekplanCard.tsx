import {Button, Card, Checkbox, Divider, Grid, Input} from "semantic-ui-react";
import {iVP} from "../../util/tools";
import React, {FormEvent, useState} from "react";
import {Dish} from "../../models/Dish";
import {DishesSupplier, generateKey, WeekSchedule} from "../../util/DishesSupplier";
import {RestoreForm} from "./RestoreForm";
import {DishesContainerCard} from "./DishesContainerCard";

const WeekplanCard = () => {
    const [bbq, setBbq] = useState<boolean>(false)
    const [order, setOrder] = useState<boolean>(false)
    const [veggie, setVeggie] = useState<boolean>(false)
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [exceptionDishes, enableExceptionDishes] = useState<boolean>(false);
    const [validPassphrase, setValidPassphrase] = useState<boolean>(true);
    const [key, setKey] = useState<string>('');
    const [isRestored, setRestore] = useState<boolean>(false);


    const regenerateKeys = (d1:Dish, d2: Dish) => {
        let updatedDishes = dishes.map(d => d === d1 ? d2 : d);
        setKey(generateKey(updatedDishes));
    }

    function generate(event: FormEvent<HTMLFormElement> | null) {
        const generated: WeekSchedule = new DishesSupplier()
            .withBBQ(bbq)
            .withExceptionDishes(exceptionDishes)
            .veggieOnly(veggie)
            .withOrder(order)
            .supply()

        setDishes([]);
        setDishes(generated.dishes);
        setKey(generated.uuid);
        if (event)
            event.preventDefault();
    }

    return (
        <div>
            <Card fluid color="teal" style={{padding: '1em 0em'}}>
                <Card.Content>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Card.Header as='h2'>Wochenplan generieren</Card.Header>
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
                                            <Checkbox style={{padding: '0em 1em'}} toggle
                                                      onChange={() => setBbq(!bbq)}
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
                        <RestoreForm scheduleKey={key} keyFn={setKey} dishesCallback={setDishes} restoreFlag={setRestore}/>
                    </Grid>
                    <Divider vertical>ODER</Divider>
                </Card.Content>
            </Card>
            {
                dishes.length !== 0
                &&
                <DishesContainerCard callback={(old, newDish) => regenerateKeys(old,newDish)} dishes={dishes} scheduleKey={key} restored={isRestored}/>
            }
        </div>
    )
};

export default WeekplanCard;
