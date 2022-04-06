import React, {useState} from "react";
import style from "./VisitAllContinents.module.css"
import worldMap from './../assets/images/worldMap.jpg'
import CitiesInGame from "./citiesInGame/CitiesInGame";
import PastResults from "./PastResults/PastResults";
import ButtonSaveResults from "./ButtonSaveResults/ButtonSaveResults";
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
    let visitedContinents = unique(queueContinents).map((x, n) => {
        return <div> {n + 1} - {x} </div>
    });

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

    console.log(props.gameResults);
    return <>
        <div className={style.item}>
            <div className={style.cities_in_game}>
                <img src={worldMap} alt='World Map' className={style.world_map}/>
                {citiesInGame}
            </div>
            <div className={style.game_results}>
                {unique(queueContinents).length != 6 ?
                    <div className={style.total_cost}>${totalСost}</div> :
                    <div className={style.total_cost}>Great! <b>{totalСost}</b></div>}
                <div className={style.continentsList}>
                    {visitedContinents}
                </div>
                <div>
                    <PastResults {...props}/>
                    {choosingCity ? 'true' : 'false'}
                    <ButtonSaveResults
                        unique={unique}
                        queueContinents={queueContinents}
                        resetResults={resetResults}
                        setSaveResultsCont={setSaveResultsCont}
                    />
                </div>
            </div>
        </div>
    </>
}

export default VisitAllContinents;