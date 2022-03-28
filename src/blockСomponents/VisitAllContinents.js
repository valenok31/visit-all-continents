import React, {useState} from "react";
import style from "./VisitAllContinents.module.css"
import worldMap from './../assets/images/worldMap.jpg'
/*import checkingСity from './checkingCity'*/

const VisitAllContinents = (props) => {

    const [choosingCity, setChoosingCity] = useState(false);
    const [totalСost, setTotalCost] = useState(0);
    const [totalCostArr, setTotalCostArr] = useState([]);
    const [queueСities, setQueueСities] = useState([]);

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
            queueСities.push(thisCity);
            setQueueСities(queueСities);
            setChoosingCity(!choosingCity);
            let prevСity = queueСities[setIndexOf(thisCity) - 1];
            return checkingСity(prevСity, thisCity);
        }
        if (thisCity == queueСities[queueСities.length - 1]) {
            queueСities.splice(setIndexOf(thisCity), 1);
            setQueueСities(queueСities);
            (totalCostArr.length > 0) && (totalCostArr.length = totalCostArr.length - 1);
            setTotalCostArr(totalCostArr);
            const sumWithInitial = totalCostArr.reduce((preVal, curVal) => preVal + curVal, 0);
            setTotalCost(sumWithInitial);
            setChoosingCity(!choosingCity);
        }
    }

    const CityAddParam = props._cityAddParam;

    let CitiesInGame = CityAddParam.map((a, numberCity) => {
        return <div className={style.city}
                    style={{
                        top: props.getCityParameter(numberCity, 'lat') + 'px',
                        left: props.getCityParameter(numberCity, 'lon') + 'px'
                    }}>
            <div id={a.name}
                 title={props.getCityParameter(numberCity, 'title')}
                 className={(setIndexOf(a.name) != -1 ? style.city__selected : style.city__no_selected)}
                 onClick={() => choosingCityAdd(a.name, numberCity)}>
                {setIndexOf(a.name) == -1 ? '' : `${setIndexOf(a.name) + 1}`}
            </div>
        </div>
    });

    return <>
        <div className={style.item}>
            <div>{totalСost}</div>
            <img src={worldMap} alt='World Map' className={style.world_map}/>
            {CitiesInGame}
        </div>
        <button onClick={() => {
            setQueueСities([]);
            setTotalCost(0);
            setTotalCostArr([]);
            setChoosingCity(false);
        }
        }>Reset
        </button>
    </>
}

export default VisitAllContinents;