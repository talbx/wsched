import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import {Button, Card, Checkbox, Container, Grid, Input} from "semantic-ui-react";
import WeekTable2 from "./WeekTable2";
import {generateDishes} from "./tools";

var md5 = require('md5');


const isValidPassphrase = (passphrase: string, fn: (input: string) => string, pred: (p: string, comp: string) => boolean): boolean => {
    let transformed = fn(passphrase);
    const hash = "asd";
    return pred(transformed, hash);
}


function App() {

    const [bbq, setBbq] = useState(false)
    const [order, setOrder] = useState(false)
    const [veggie, setVeggie] = useState(false)
    const [dishes, setDishes] = useState([]);
    const [passphrase, setPassphrase] = useState('');

    function generate() {

        //@ts-ignore
        setDishes(generateDishes(order, veggie, bbq));
    }

    return (
        <Grid container style={{padding: '3em 0em'}}>
            <Container>
                <Card fluid color="teal" style={{padding: '1em 0em'}}>
                    <Card.Content>
                        <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setBbq(!bbq)}
                                  label="Grillwetter? "/>
                        <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setOrder(!order)} checked={order}
                                  label="Lust essen zu bestellen? "/>
                        <Checkbox style={{padding: '0em 1em'}} toggle onChange={() => setVeggie(!veggie)}
                                  checked={veggie}
                                  label="Vegetarische Woche? "/>
                        <Input onChange={(event, data) => setPassphrase(data.value)} style={{padding: '0em 1em'}}
                               size="mini" label='Passphrase' type='password'/>
                        <Button onClick={() => generate()} basic color="teal">Generieren</Button>
                    </Card.Content>
                    {
                        dishes.length !== 0
                        &&
                        <WeekTable2 dishes={dishes}/>
                    }
                </Card>
            </Container>
        </Grid>
    );
}

export default App;
