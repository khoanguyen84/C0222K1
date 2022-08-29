import React from "react";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            {/* <h1 className="header">Header</h1> */}
            <Link to="/content">Content</Link>
            <Link to="/use-effect">UseEffect</Link>
        </div>
    )
}

export default Header;