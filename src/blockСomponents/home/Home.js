import React from "react";
import {NavLink} from "react-router-dom";
import style from './home.module.css';

const Home = () => {
    return <>
        <div>
            <NavLink to='/game' className={style.nLink}>
                <div>Start</div>
            </NavLink>
        </div>
        <div>
            <NavLink to='/about' className={style.nLink}>
                <div>About</div>
            </NavLink>
        </div>
        <div>
            <NavLink to='/gamerules' className={style.nLink}>
                <div>Game rules</div>
            </NavLink>
        </div>
    </>

}

export default Home;