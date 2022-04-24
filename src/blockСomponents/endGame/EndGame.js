import React from "react";
import style from "./EndGame.module.css"
import {NavLink} from "react-router-dom";

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


        </div>
    </>
}

export default EndGame;