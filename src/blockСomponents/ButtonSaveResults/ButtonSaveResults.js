import React from 'react'
import style from "../VisitAllContinents.module.css";


const ButtonSaveResults = (props) => {
    return (
        <div className={style.game_results_button}>
            <button onClick={() => {
                if (props.unique(props.queueContinents).length == 6) {
                    props.setSaveResultsCont();
                }else{props.resetResults()}

            }}>{props.unique(props.queueContinents).length == 6 ? 'Save results and reset' : 'Reset'}
            </button>
        </div>
    )
}

export default ButtonSaveResults;