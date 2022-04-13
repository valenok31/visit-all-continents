import React from "react";
import {NavLink} from "react-router-dom";
import style from './home.module.css';

const Home = () => {
    return <div className={style.center_me}>
        <div>
            <NavLink to='/game' className={style.nLink}>
                <div>Start</div>
            </NavLink>
        </div>
        <div>
            <NavLink to='/gamerules' className={style.nLink}>
                <div>Game rules</div>
            </NavLink>
        </div>
        <div>
            <NavLink to='/records' className={style.nLink}>
                <div>Records</div>
            </NavLink>
        </div>
    </div>

}

export default Home;