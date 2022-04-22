import React, {useState} from "react";
import style from "./VisitAllContinents.module.css"
import worldMap from './../assets/images/worldMap.png'
import CitiesInGame from "./CitiesInGame/CitiesInGame";
import ButtonSaveResults from "./ButtonSaveResults/ButtonSaveResults";
import Records from "./Records/Records";
import CheckVisitedContinents from "./CheckVisitedContinents/CheckVisitedContinents";
import HomeNavLink from "./HomeNavLink/HomeNavLink";
import TotalCost from "./TotalCost/TotalCost";

const VisitAllContinents = (props) => {

    const [choosingCity, setChoosingCity] = useState(false);
    const [totalCostArr, setTotalCostArr] = useState([]);
    const [queueCities, setQueueCities] = useState([]);

    let queueContinents = props.queueContinents;

    const setIndexOf = (number) => {
        return queueCities.indexOf(number);
    }

    const checkingCity = (previousCity, thisCity) => {
        if (!previousCity) return;
        totalCostArr.push(props.getCostCity(thisCity, props.getPreviousNumberCity(previousCity)));
        setTotalCostArr(totalCostArr);
    }
    const choosingCityAdd = (thisCity, numberCity) => {
        if (setIndexOf(thisCity) == -1) {
            queueContinents.push(props.getCityParameter(numberCity, 'continent'));
            props.setQueueContinents(queueContinents);
            queueCities.push(thisCity);
            setQueueCities(queueCities);
            setChoosingCity(!choosingCity);
            let prevCity = queueCities[setIndexOf(thisCity) - 1];
            return checkingCity(prevCity, thisCity);
        }
        if (thisCity == queueCities[queueCities.length - 1]) {
            queueContinents.splice(setIndexOf(thisCity), 1);
            props.setQueueContinents(queueContinents);
            queueCities.splice(setIndexOf(thisCity), 1);
            setQueueCities(queueCities);
            (totalCostArr.length > 0) && (totalCostArr.length = totalCostArr.length - 1);
            setTotalCostArr(totalCostArr);
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

    let totalCost = totalCostArr.reduce((preVal, curVal) => preVal + curVal, 0);

    let setSaveResultsCont = () => {
        if (props.unique(queueContinents).length == 6) {
            props.setSaveResults(totalCost, queueCities.join('-'));
        }
    }

    const resetResults = () => {
        setQueueCities([]);
        setTotalCostArr([]);
        setChoosingCity(false);
        props.setQueueContinents();
    }
/*    let propsInNext={
        unique: props.unique,
        queueContinents: queueContinents,
        gameResults: props.gameResults,
        totalCost: totalCost,
        resetResults: resetResults(),
        setSaveResultsCont: setSaveResultsCont(),
        quantity: '2',
    }*/

    return <div className={style.cities_in_game}>
        <HomeNavLink/>
        <CheckVisitedContinents
            unique={props.unique}//*
            queueContinents={queueContinents}/>
        <img src={worldMap} alt='World Map' className={style.world_map}/>
        {citiesInGame}
        <TotalCost
            totalCost={totalCost}
            queueContinents={queueContinents}
            unique={props.unique}/>
        <ButtonSaveResults
            unique={props.unique}//*
            queueContinents={queueContinents}
            resetResults={resetResults}
            setSaveResultsCont={setSaveResultsCont}/>
        <Records
            gameResults={props.gameResults}
            quantity='2'/>


    </div>
}

export default VisitAllContinents;