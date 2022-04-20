import React from "react";
import style from "../VisitAllContinents.module.css";

const TotalCost = (props) => {
    return (
        <div className={style.game_results}>
            {props.unique(props.queueContinents).length != 6 ?
                <div className={style.total_cost}>${props.totalCost}</div> :
                <div className={style.total_cost}>Great! <b>{props.totalCost}</b></div>}
        </div>
    )
}

export default TotalCost;