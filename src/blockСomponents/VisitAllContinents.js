import React, {useState} from "react";
import style from "./VisitAllContinents.module.css"
import worldMap from './../assets/images/worldMap.png'
import CitiesInGame from "./CitiesInGame/CitiesInGame";
import ButtonSaveResults from "./ButtonSaveResults/ButtonSaveResults";
import Records from "./Records/Records";
import CheckVisitedContinents from "./CheckVisitedContinents/CheckVisitedContinents";
import HomeNavLink from "./HomeNavLink/HomeNavLink";

const VisitAllContinents = (props) => {

    const [choosingCity, setChoosingCity] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
    const [totalCostArr, setTotalCostArr] = useState([]);
    const [queueCities, setQueueCities] = useState([]);
    const [queueContinents, setQueueContinents] = useState([]);

    const setIndexOf = (number) => {
        return queueCities.indexOf(number);
    }

    const checkingCity = (previousCity, thisCity) => {
        if (!previousCity) return;
        totalCostArr.push(props.getCostCity(thisCity, props.getPreviousNumberСity(previousCity)));
        setTotalCostArr(totalCostArr);
        const sumWithInitial = totalCostArr.reduce((preVal, curVal) => preVal + curVal, 0);
        setTotalCost(sumWithInitial);
    }
    const choosingCityAdd = (thisCity, numberCity) => {
        if (setIndexOf(thisCity) == -1) {
            queueContinents.push(props.getCityParameter(numberCity, 'continent'));
            setQueueContinents(queueContinents);
            queueCities.push(thisCity);
            setQueueCities(queueCities);
            setChoosingCity(!choosingCity);
            let prevCity = queueCities[setIndexOf(thisCity) - 1];
            return checkingCity(prevCity, thisCity);
        }
        if (thisCity == queueCities[queueCities.length - 1]) {
            queueContinents.splice(setIndexOf(thisCity), 1);
            setQueueContinents(queueContinents);
            queueCities.splice(setIndexOf(thisCity), 1);
            setQueueCities(queueCities);
            (totalCostArr.length > 0) && (totalCostArr.length = totalCostArr.length - 1);
            setTotalCostArr(totalCostArr);
            const sumWithInitial = totalCostArr.reduce((preVal, curVal) => preVal + curVal, 0);
            setTotalCost(sumWithInitial);
            setChoosingCity(!choosingCity);
        }
    }

    let citiesInGame = props.paramCity.map((a, numberCity) => {
        return <CitiesInGame a={a}
                             numberCity={numberCity}
                             {...props}
                             setIndexOf={setIndexOf}
                             choosingCityAdd={choosingCityAdd}/>
    });

    let setSaveResultsCont = () => {
        if (props.unique(queueContinents).length == 6) {
            props.setSaveResults(totalCost, queueCities.join('-'));
        }
    }

    const resetResults = () => {
        setQueueCities([]);
        setTotalCost(0);
        setTotalCostArr([]);
        setChoosingCity(false);
        setQueueContinents([]);
    }

    return <div className={style.cities_in_game}>
        <HomeNavLink/>
        <CheckVisitedContinents unique={props.unique} queueContinents={queueContinents}/>
        <img src={worldMap} alt='World Map' className={style.world_map}/>
        {citiesInGame}
        <div className={style.game_results}>
            <div>
                {props.unique(queueContinents).length != 6 ?
                    <div className={style.total_cost}>${totalCost}</div> :
                    <div className={style.total_cost}>Great! <b>{totalCost}</b></div>}
                <ButtonSaveResults
                    unique={props.unique}
                    queueContinents={queueContinents}
                    resetResults={resetResults}
                    setSaveResultsCont={setSaveResultsCont}
                />
                <Records gameResults={props.gameResults} quantity='5'/>
            </div>
        </div>
    </div>

}

export default VisitAllContinents;