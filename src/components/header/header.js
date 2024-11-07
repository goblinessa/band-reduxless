import React from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <header className="header">
            <div className="content">
                <Link className="link" to={"/"}><h1 className="logo">Music Bands Of Uzhgorod</h1></Link>
                <nav>
                    <ul className="nav-links">
                        <li><Link to={"/functional/"}>Functional</Link></li>
                        <li><Link to={"/class/"}>Class</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;