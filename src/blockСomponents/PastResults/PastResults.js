import React from "react";
import style from "../VisitAllContinents.module.css";

const PastResults = (props) => {
    let sortable = [];
    for (let vehicle in props.gameResults) {
        sortable.push([props.gameResults[vehicle].result, props.gameResults[vehicle].way]);
    }
    sortable.sort(function (a, b) {
        return a[0] - b[0];
    });

    console.log(sortable);

    sortable.length = props.quantity;
    let pastResults = sortable.map(
        (m) => {
            return <div>{m[0]} - <span className={style.game_results__way}>{m[1]}</span></div>
        }
    );
    return <>
        <div>
            {pastResults}
        </div>
    </>
}

export default PastResults;