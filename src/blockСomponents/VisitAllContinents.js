import React, {useState} from "react";
import style from "./VisitAllContinents.module.css"
/*import worldMap from './../assets/images/worldMap.jpg'*/
import worldMap from './../assets/images/worldMap.png'
import CitiesInGame from "./citiesInGame/CitiesInGame";
import PastResults from "./PastResults/PastResults";
import ButtonSaveResults from "./ButtonSaveResults/ButtonSaveResults";
import {NavLink} from "react-router-dom";
import Records from "./Records/Records";
import CheckVisitedContinents from "./CheckVisitedContinents/CheckVisitedContinents";
/*import checkingСity from './checkingCity'*/

const VisitAllContinents = (props) => {

    const [choosingCity, setChoosingCity] = useState(false);
    const [totalСost, setTotalCost] = useState(0);
    const [totalCostArr, setTotalCostArr] = useState([]);
    const [queueСities, setQueueСities] = useState([]);
    const [queueContinents, setQueueContinents] = useState([]);

    const setIndexOf = (number) => {
        return queueСities.indexOf(number);
    }

    const checkingСity = (previousСity, thisCity) => {
        if (!previousСity) return;
        totalCostArr.push(props.getCostCity(thisCity, props.getPreviousNumberСity(previousСity)));
        setTotalCostArr(totalCostArr);
        const sumWithInitial = totalCostArr.reduce((preVal, curVal) => preVal + curVal, 0);
        setTotalCost(sumWithInitial);
    }

    const choosingCityAdd = (thisCity, numberCity) => {
        if (setIndexOf(thisCity) == -1) {
            queueContinents.push(props.getCityParameter(numberCity, 'continent'));
            setQueueContinents(queueContinents);
            queueСities.push(thisCity);
            setQueueСities(queueСities);
            setChoosingCity(!choosingCity);
            let prevСity = queueСities[setIndexOf(thisCity) - 1];
            return checkingСity(prevСity, thisCity);
        }
        if (thisCity == queueСities[queueСities.length - 1]) {
            queueContinents.splice(setIndexOf(thisCity), 1);
            setQueueContinents(queueContinents);
            queueСities.splice(setIndexOf(thisCity), 1);
            setQueueСities(queueСities);
            (totalCostArr.length > 0) && (totalCostArr.length = totalCostArr.length - 1);
            setTotalCostArr(totalCostArr);
            const sumWithInitial = totalCostArr.reduce((preVal, curVal) => preVal + curVal, 0);
            setTotalCost(sumWithInitial);
            setChoosingCity(!choosingCity);
        }
    }

    const CityAddParam = props.paramCity;

    let citiesInGame = CityAddParam.map((a, numberCity) => {
        return <CitiesInGame a={a}
                             numberCity={numberCity}
                             {...props}
                             setIndexOf={setIndexOf}
                             choosingCityAdd={choosingCityAdd}/>
    });

    const unique = (queueContinents) => {
        return Array.from(new Set(queueContinents));
    }

    let setSaveResultsCont = () => {
        if (unique(queueContinents).length == 6) {
            props.setSaveResults(totalСost, queueСities.join('-'));
        }
    }

    const resetResults = () => {
        setQueueСities([]);
        setTotalCost(0);
        setTotalCostArr([]);
        setChoosingCity(false);
        setQueueContinents([]);
    }

    return <>
        <div>
            <NavLink to='/' className={style.nLink}>
                <div>Home</div>
            </NavLink>
        </div>
        <div className={style.item}>
            <div className={style.cities_in_game}>
                <NavLink to='/' className={style.nLink}>
                    <div>Home</div>
                </NavLink>

            <CheckVisitedContinents unique={unique} queueContinents={queueContinents}/>
                <img src={worldMap} alt='World Map' className={style.world_map}/>
                {citiesInGame}
                <div className={style.game_results}>

                    <div>
                        {unique(queueContinents).length != 6 ?
                            <div className={style.total_cost}>${totalСost}</div> :
                            <div className={style.total_cost}>Great! <b>{totalСost}</b></div>}
                        <ButtonSaveResults
                            unique={unique}
                            queueContinents={queueContinents}
                            resetResults={resetResults}
                            setSaveResultsCont={setSaveResultsCont}
                        />
                        <Records gameResults={props.gameResults} quantity='2'/>

                    </div>
                </div>
            </div>

        </div>
    </>
}

export default VisitAllContinents;