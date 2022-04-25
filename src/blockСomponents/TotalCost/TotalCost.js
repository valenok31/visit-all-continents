import React from "react";
import style from "../VisitAllContinents.module.css";

const TotalCost = (props) => {
    let praise = ['Отлично!', 'Велликолепно!', "Вот это дааа!",
        "Хороший результат.", "Здорово!", "Так держать.", "Молодец.",
        "Ого!", "Круто!", "Есть к чему стремиться."]
    return (
        <div className={style.game_results}>
            {props.unique(props.queueContinents).length != 6 ?
                <div className={style.total_cost}>${props.totalCost}</div> :
                <div className={style.total_cost}>{praise[Math.round(Math.random()*10)]} <b>${props.totalCost}</b></div>}
        </div>
    )
}

export default TotalCost;