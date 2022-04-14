import React from "react";
import {NavLink} from "react-router-dom";

const Error = (props) => {
    return <div>
        Error 404!
        <NavLink to={'/'}>
        <div>Mein</div>
        </NavLink>
    </div>
}

export default Error;