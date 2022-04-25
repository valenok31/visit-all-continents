import React from 'react';
import style from "../home/home.module.css";

const RecordsFromAPI = (props) => {

    let sortable = [];
    for (let vehicle in props.gameResultFromAPI) {

        sortable.push([props.gameResultFromAPI[vehicle].result, props.gameResultFromAPI[vehicle].way, props.gameResultFromAPI[vehicle].name]);
    }
    sortable.sort(function (a, b) {
        return a[0] - b[0];
    });
    let pastResults = sortable.map(
        (m) => {
            return <li title={m[1]}>${m[0]} - <span className={style.game_results__way}>{m[2]}</span></li>
        }
    );
    return <>
        <ol>
            {pastResults}
        </ol>
    </>
}

export default RecordsFromAPI;
