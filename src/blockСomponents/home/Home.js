import React from "react";
import {NavLink} from "react-router-dom";
import style from './home.module.css';

const Home = () => {
    return <>
    <div>
        <NavLink to='/game' className={style.nLink}><div>Start</div></NavLink>
    </div>
        <div>
            About
        </div>
        <div>
            Game rules
        </div>
    </>
    
}

export default Home;