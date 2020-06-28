import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {WeekplanComponent} from "./components/home/WeekplanComponent";
import {RoadmapComponent} from "./components/roadmap/RoadmapComponent";
import {Menu} from "semantic-ui-react";

const App = () => {

    const [active, setActive] = useState<string>('home');

    return (
        <BrowserRouter>
            <Menu pointing secondary color="teal">
                <Menu.Item
                    name='Home'
                    active={active === 'home'}>
                    <Link style={{color: 'black'}} to="/wsched" onClick={() => setActive('home')}>Wochenplan</Link>
                </Menu.Item>
                <Menu.Item
                    name='Roadmap'
                    active={active === 'roadmap'}>
                    <Link style={{color: 'black'}} to="/roadmap" onClick={() => setActive('roadmap')}>Roadmap</Link>
                </Menu.Item>
            </Menu>
            <a href="https://github.com/talbx/wsched">
                <div className="ribbon"><span>BETA</span></div>
            </a>
            <div>
                <Switch>
                    <Route path="/roadmap">
                        <RoadmapComponent/>
                    </Route>
                    <Route path="/wsched">
                        <WeekplanComponent/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
