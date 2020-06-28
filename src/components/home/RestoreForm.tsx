import {Button, Card, Container, Grid, Input} from "semantic-ui-react";
import React, {useState} from "react";
import {keyToSchedule} from "../../util/DishesSupplier";
import {Dish} from "../../models/Dish";


type RestoreFormParam = { scheduleKey: string, keyFn: (a: string) => void, dishesCallback: (f: Dish[]) => void, restoreFlag: (f: boolean) => void };
export const RestoreForm = (param: RestoreFormParam) => {
    const [validKey, setValidKey] = useState<boolean>(false);

    function decodeId(event: React.FormEvent<HTMLFormElement> | null) {
        const restoredSchedule = keyToSchedule(param.scheduleKey);
        if(null !== restoredSchedule && restoredSchedule.dishes){
            param.dishesCallback(restoredSchedule.dishes);
            param.restoreFlag(true);
        }
        if (event)
            event.preventDefault();
    }

    function handleRecovery(value: string) {
        param.keyFn(value);
        setValidKey(value.length === 28);
    }

    return (
        <Grid.Column>
            <Card.Header as='h2'>Wochenplan wiederherstellen</Card.Header>
            <form onSubmit={(event) => decodeId(event)}>
                <Container>
                    <Grid container columns={2}>
                        <Grid style={{marginTop: "2%"}} container columns={2} stackable>
                            <Grid.Row/>
                            <Grid.Row/>
                            <Grid.Row/>
                            <Grid.Row/>
                            <Grid.Column>
                                <Input onChange={(event, data) => handleRecovery(data.value)}
                                       icon='key' placeholder='Enter wsched key'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Button type="submit" disabled={!validKey} onClick={() => decodeId(null)}
                                        basic
                                        color="teal">Wiederherstellen
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Grid>
                </Container>
            </form>
        </Grid.Column>
    )
}
