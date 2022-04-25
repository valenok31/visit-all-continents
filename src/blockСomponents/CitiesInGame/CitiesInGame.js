import React from "react";
import style from "../VisitAllContinents.module.css";

const CitiesInGame = (props) => {
    return <div className={style.city}
                style={{
                    top: props.getCityParameter(props.numberCity, 'lat') / 10 + '%',
                    left: props.getCityParameter(props.numberCity, 'lon') / 10 + '%'
                }}>
        <div id={props.a.name}
             title={props.getCityParameter(props.numberCity, 'title')}
             className={(props.setIndexOf(props.a.name) != -1 ? style.city__selected : style.city__no_selected)}
             onClick={() => props.choosingCityAdd(props.a.name, props.numberCity)}>
        </div>
        <div className={style.city__name}>
            {props.setIndexOf(props.a.name) == -1 ? props.getCityParameter(props.numberCity, 'title') : `${props.setIndexOf(props.a.name) + 1}`}
        </div>
    </div>
}

export default CitiesInGame;