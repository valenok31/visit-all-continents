import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../home/home.module.css";
import PastResults from "../PastResults/PastResults";

const Records = (props) => {

    return <>

        <div><PastResults {...props} quantity={props.quantity}/></div>
    </>
}

export default Records;
