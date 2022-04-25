import React from "react";
import {NavLink} from "react-router-dom";
import style from './HomeNavLink.module.css';

const HomeNavLink = () => {
    return <NavLink to='/' className={style.nLink}>
        <div>На главную</div>
    </NavLink>

}

export default HomeNavLink;