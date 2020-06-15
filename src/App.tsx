import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HomeComponent} from "./components/home/HomeComponent";
import {RoadmapComponent} from "./components/roadmap/RoadmapComponent";

const App = () => {
    return (
        <BrowserRouter>
            <div className="ui top menu">
                <a className="item" href={"/"}>Home</a>
                <a className="item" href={"/roadmap"}>Roadmap</a>
            </div>
            <div>
                <a href="https://github.com/talbx/wsched">
                    <div className="ribbon"><span>BETA</span></div>
                </a>
            </div>
            <div>
                <Switch>
                    <Route path="/roadmap">
                        <RoadmapComponent/>
                    </Route>
                    <Route path="/">
                        <HomeComponent/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
