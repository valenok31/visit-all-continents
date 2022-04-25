import React from 'react';
import style from "../home/home.module.css";

const Records = (props) => {
    let sortable = [];
    for (let vehicle in props.gameResults) {
        sortable.push([props.gameResults[vehicle].result, props.gameResults[vehicle].way]);
    }
    sortable.sort(function (a, b) {
        return a[0] - b[0];
    });

    if (props.quantity) {sortable.length = props.quantity;}
    let pastResults = sortable.map(
        (m) => {
            return <li>${m[0]} - <span className={style.game_results__way}>{m[1]}</span></li>
        }
    );
    return <>
        <ol>
            {pastResults}
        </ol>
    </>
}

export default Records;
