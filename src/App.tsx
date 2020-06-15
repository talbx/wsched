import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import {Container, Grid} from "semantic-ui-react";
import MenuCard from "./components/MenuCard";
import TodoCard from "./components/TodoCard";
import {nxt, nxt1} from "./util/tools";

const App = () => {

    console.log(nxt1('9d3b4b2da394293d3za9d1c1d1d2b3dd'));

    return (
        <div>
            <a href="https://github.com/talbx/wsched">
                <div className="ribbon"><span>ALPHA</span></div>
            </a>
            <Grid container style={{padding: '3em 0em'}}>
                <Container>
                    <MenuCard/>
                </Container>
            </Grid>
        </div>

    );
}

export default App;
