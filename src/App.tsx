import React from 'react';
import './App.scss';
import Particles from "react-particles-js";

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Particles className={"particles"} params={{
                    "particles": {
                        "number": {
                            "value": 100
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    },
                }}/>

                <div className={"backdrop"}>
                    <div style={{padding: "1rem"}}>
                        <h1 className={"title"} style={{fontSize: "10rem"}}>Christo Stephenson</h1>
                        <h2 className={"title"} style={{fontSize: "6rem"}}>Software Engineer</h2>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div style={{padding: "1rem"}}>
                        <h2 className={"heading"} style={{fontSize: "4rem"}}>About Me</h2>
                        <div>
                            <p className={"paragraph"}>I am a software developer with a passion in creating software in
                                a variety of fields, ranging from being a full-stack web developer to an embedded
                                systems engineer. Currently I live and work in my hometown of Perth, Australia.</p>
                        </div>
                    </div>

                    <div style={{padding: "1rem"}}>
                        <h2 className={"heading"} style={{fontSize: "4rem"}}>Skills</h2>
                        <div>
                            <li className={"list-item"}>C</li>
                            <li className={"list-item"}>C++</li>
                            <li className={"list-item"}>C#</li>
                            <li className={"list-item"}>Git</li>
                            <li className={"list-item"}>Linux/Unix</li>
                            <li className={"list-item"}>Java</li>
                            <li className={"list-item"}>JavaScript</li>
                            <li className={"list-item"}>MySQL/MariaDB</li>
                            <li className={"list-item"}>PHP</li>
                            <li className={"list-item"}>Python</li>
                            <li className={"list-item"}>ReactJS</li>
                        </div>
                    </div>

                    <div style={{padding: "1rem"}}>
                        <h2 className={"heading"} style={{fontSize: "4rem"}}>Where to find me</h2>
                        <div>
                            <a className={"list-item"} href={"https://www.linkedin.com/in/christo-stephenson/"}
                               target={"_blank"} rel={"noopener noreferrer"}>LinkedIn</a>
                            <a className={"list-item"} href={"https://github.com/christocs/"}
                               target={"_blank"} rel={"noopener noreferrer"}>GitHub</a>
                        </div>
                    </div>

                    <br/>
                    <br/>
                </div>

            </React.Fragment>
        );
    }
}

export default App;
