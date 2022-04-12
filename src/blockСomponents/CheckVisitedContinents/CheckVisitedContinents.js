import React from 'react';
import style from "../VisitAllContinents.module.css";

const CheckVisitedContinents = (props) => {

    let toggle_north_america=false;
    let toggle_south_america=false;
    let toggle_europe=false;
    let toggle_asia=false;
    let toggle_africa=false;
    let toggle_australia=false;

    let visitedContinents = props.unique(props.queueContinents).map((x, n) => {
        if (x=='Северная Америка'){toggle_north_america=true}
        if (x=='Южная Америка'){toggle_south_america=true}
        if (x=='Европа'){toggle_europe=true}
        if (x=='Азия'){toggle_asia=true}
        if (x=='Африка'){toggle_africa=true}
        if (x=='Австралия'){toggle_australia=true}
        return
    });

    let n_america = <polygon className={style.gri} points="200,0 800,0 700,44 700,400 520,400 500,460 0,480"/>;
    let s_america = <polygon className={style.gri} points="496,464 521,407 757,401 813,858 373,870 398,480"/>;
    let europa = <polygon className={style.gri}
                          points="699,53 776,0 1223,0 1200,73 1188,239 1135,228 1098,240 1073,256 1084,289 1008,278 998,262 893,281 716,151"/>;
    let asia = <polygon className={style.gri}
                        points="1223,0 1200,73 1188,239 1135,228 1098,240 1073,256 1084,289 1112,300 1126,332 1178,421 1295,423 1346,597 1668,550 1642,371 1820,0"/>
    let africa = <polygon className={style.gri}
                          points="893,281 998,262 1008,278 1084,289 1112,300 1126,332 1178,421 1295,423 1346,597 1061,802 728,362"/>;
    let australia = <polygon className={style.gri}
                             points="1642,371 1668,550 1497,600 1497,824 2000,867 2000,371"/>

    return <svg viewBox="0 0 2000 1000" xmlns="http://www.w3.org/2000/svg" className={style.north_america}>
        {toggle_north_america ? n_america : ''}
        {toggle_south_america ? s_america : ''}
        {toggle_europe ? europa : ''}
        {toggle_asia ? asia : ''}
        {toggle_africa ? africa : ''}
        {toggle_australia ? australia : ''}
    </svg>
}

export default CheckVisitedContinents;