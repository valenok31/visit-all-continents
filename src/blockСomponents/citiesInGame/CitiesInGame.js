import React from "react";
import style from "../VisitAllContinents.module.css";

const CitiesInGame = (props) => {
    return <div className={style.city}
                       style={{
                           top: props.getCityParameter(numberCity, 'lat') + 'px',
                           left: props.getCityParameter(numberCity, 'lon') + 'px'
                       }}>
        <div id={a.name}
             title={props.getCityParameter(numberCity, 'title')}
             className={(setIndexOf(a.name) != -1 ? style.city__selected : style.city__no_selected)}
             onClick={() => choosingCityAdd(a.name, numberCity)}>
            {setIndexOf(a.name) == -1 ? '' : `${setIndexOf(a.name) + 1}`}
        </div>
    </div>
}

export default CitiesInGame;