import React, {createRef} from 'react';
import logo from './logo.svg';
import './App.scss';
import {Button} from "semantic-ui-react";
import Particles from "react-particles-js";

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Particles className={"particles"}/>

                <div className={"particlesContainer"} style={{display: "block"}}>
                <h1 style={{color: "cyan", textAlign: "center", verticalAlign: "bottom", fontSize: "20rem"}}>Hello world!</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
