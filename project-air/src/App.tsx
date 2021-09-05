import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import GameContainer from './components/game/GameContainer';
import Home from './components/Home';
import Login from './components/login/Login';


function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/game">
                        <GameContainer/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;
