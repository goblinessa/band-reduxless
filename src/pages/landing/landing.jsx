import React from "react";

import { Link } from "react-router-dom";

import SwitchText from "../../components/switchText/switchText";

import "./landing.css"

const Landing = () =>{
    return(
        <div className="landing">
            <div className="main">
                <h2>Database of todays bands in Uzhgorod city</h2>
                <p>There will be added the known and popular bands of this city you need to know and may heard.</p>
                <div className="button-container">
                    <Link className="button" to={"/functional/"}><button>Functional solution</button></Link>
                    <Link className="button" to={"/class/"}><button>Class solution</button></Link>
                    
                </div>
            </div>
            <hr/>
            <div>
                <SwitchText/>
            </div>
            
        </div>
    );
}
export default Landing;