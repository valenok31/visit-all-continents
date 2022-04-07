import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../home/home.module.css";
import PastResults from "../PastResults/PastResults";

const Records = (props) => {


    return <>
        <div>
            <NavLink to='/' className={style.nLink}>
                <div>Home</div>
            </NavLink>
        </div>
        <div><PastResults {...props}/></div>
    </>
}

export default Records;
