import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Error.module.css";

const Error = (props) => {
    return <div className={style.main}>
        <div className={style.block}>
            Error 404!
            <div>
                <NavLink to={'/'} className={style.nLink}>
                    <div>Mein</div>
                </NavLink>
            </div>
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
    </div>
}

export default Error;