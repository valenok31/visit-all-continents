import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../home/home.module.css";

const GameRules = (props) => {
    return <>
        <div>
            <NavLink to='/' className={style.nLink}>
                <div>Home</div>
            </NavLink>
        </div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </>
}

export default GameRules;
