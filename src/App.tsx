import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "semantic-ui-react";
import Particles from "react-particles-js";

function App() {
    return (
        <React.Fragment>
        <div className="particles">
            <h1 style={{color: "cyan", textAlign: "center", verticalAlign: "center"}}>Hello world!</h1>
        </div>

        <Particles canvasClassName={"particles"}/>
        </React.Fragment>
    );
}

export default App;
