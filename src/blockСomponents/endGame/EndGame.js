import React from "react";
import style from "./EndGame.module.css"
import {NavLink} from "react-router-dom";
import Records from "../Records/Records";

const EndGame = (props) => {
        return <>
        <div className={style.data_entry}>
            <h1>Ваш результат ${props.totalCost}</h1>
                    <button onClick={()=>{
                        props.setSwitchEndGame(false);
                        props.resetResults();}
                    }>Играть ещё</button>
            <NavLink to='/records' className={style.nLink}>
                    <button onClick={()=>{
                        props.setSwitchEndGame(false);
                        props.resetResults();}}>Рекорды</button>
            </NavLink>
<h3>Лучшая десятка:</h3>
            <Records
                gameResults={props.gameResults}
                quantity='10'/>
        </div>
    </>
}

export default EndGame;