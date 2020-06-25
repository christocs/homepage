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

                <div className={"particlesContainer"} style={{display: "block", color: "cyan", textAlign: "center", verticalAlign: "bottom"}}>
                <h1 style={{fontSize: "20rem"}}>Hello world!</h1>
                    <div>
                    <p style={{fontSize: "5rem", color: "deepskyblue"}}>Looks like we're still under construction </p>
                    <a href="https://github.com/christocs" style={{fontSize: "5rem", color: "deepskyblue", textDecoration: "underline"}}>Click here to see my GitHub</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
