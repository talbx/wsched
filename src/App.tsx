import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import {Container, Grid} from "semantic-ui-react";
import MenuCard from "./components/MenuCard";
import TodoCard from "./components/TodoCard";

const App = () => {

    return (
        <Grid container style={{padding: '3em 0em'}}>
            <Container>
                <MenuCard/>
            </Container>
        </Grid>
    );
}

export default App;
