import React, {useState} from "react";
import style from "./VisitAllContinents.module.css"
/*import worldMap from './../assets/images/worldMap.jpg'*/
import worldMap from './../assets/images/worldMap.png'
import CitiesInGame from "./citiesInGame/CitiesInGame";
import PastResults from "./PastResults/PastResults";
import ButtonSaveResults from "./ButtonSaveResults/ButtonSaveResults";
import {NavLink} from "react-router-dom";
import Records from "./Records/Records";
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
    let toggle_north_america=false;
    let toggle_south_america=false;
    let toggle_europe=false;
    let toggle_asia=false;
    let toggle_africa=false;
    let toggle_australia=false;
    let visitedContinents = unique(queueContinents).map((x, n) => {
        if (x=='Северная Америка'){toggle_north_america=true}
        if (x=='Южная Америка'){toggle_south_america=true}
        if (x=='Европа'){toggle_europe=true}
        if (x=='Азия'){toggle_asia=true}
        if (x=='Африка'){toggle_africa=true}
        if (x=='Австралия'){toggle_australia=true}
        return
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


    let n_america = <polygon className={style.gri} points="200,0 800,0 700,44 700,400 520,400 500,460 0,480"/>;
    let s_america = <polygon className={style.gri} points="496,464 521,407 757,401 813,858 373,870 398,480"/>;
    let europa = <polygon className={style.gri}
                          points="699,53 776,0 1223,0 1200,73 1188,239 1135,228 1098,240 1073,256 1084,289 1008,278 998,262 893,281 716,151"/>;
    let asia = <polygon className={style.gri}
                        points="1223,0 1200,73 1188,239 1135,228 1098,240 1073,256 1084,289 1112,300 1126,332 1178,421 1295,423 1346,597 1668,550 1642,371 1820,0"/>
    let africa = <polygon className={style.gri}
                          points="893,281 998,262 1008,278 1084,289 1112,300 1126,332 1178,421 1295,423 1346,597 1061,802 728,362"/>;
    let australia = <polygon className={style.gri}
                             points="1642,371 1668,550 1497,600 1497,824 2000,867 2000,371"/>
    console.log(props.gameResults);
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
                <svg viewBox="0 0 2000 1000" xmlns="http://www.w3.org/2000/svg" className={style.north_america}>
                    {toggle_north_america ? n_america : ''}
                    {toggle_south_america ? s_america : ''}
                    {toggle_europe ? europa : ''}
                    {toggle_asia ? asia : ''}
                    {toggle_africa ? africa : ''}
                    {toggle_australia ? australia : ''}
                </svg>
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