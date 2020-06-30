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
                    <div>
                        <h1>Christo Stephenson</h1>
                        <h2>Software Engineer</h2>
                    </div>

                    <br/>
                    <br/>
                    <br/>

                    <div>
                        <h3>About Me</h3>
                        <p>
                            I am a software developer with a passion in creating software in
                            a variety of fields, ranging from being a full-stack web developer to an embedded
                            systems engineer. Currently I live and work in my hometown of Perth, Australia.
                        </p>
                    </div>

                    <div>
                        <h3>Skills</h3>
                        <div>
                            <li>C</li>
                            <li>C++</li>
                            <li>C#</li>
                            <li>Git</li>
                            <li>Linux/Unix</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>MySQL/MariaDB</li>
                            <li>PHP</li>
                            <li>Python</li>
                            <li>ReactJS</li>
                        </div>
                    </div>

                    <div>
                        <h3>Where to find me</h3>
                        <div>
                            <a href={"https://www.linkedin.com/in/christo-stephenson/"}
                               target={"_blank"} rel={"noopener noreferrer"}>LinkedIn</a>
                            <a href={"https://github.com/christocs/"}
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
