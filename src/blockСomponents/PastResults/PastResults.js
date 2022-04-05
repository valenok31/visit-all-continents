import React from "react";
import style from "../VisitAllContinents.module.css";

const PastResults = (props) => {
    let pastResults = props.gameResults.map(
        (m) => {
            return <div>{m.result} - <span className={style.game_results__way}>{m.way}</span></div>
        }
    );
    return <>
    <div>
        {pastResults}
    </div>
    </>
}

export default PastResults;