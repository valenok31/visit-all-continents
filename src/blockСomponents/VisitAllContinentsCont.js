import React from "react";
import {connect} from "react-redux";
import VisitAllContinents from "./VisitAllContinents";
import {setQueueContinents, setSaveResults} from "../redux/visitAllContinents_reducer";

class VisitAllContinentsCont extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state;
    }

    render() {
        const unique = (queueContinent) => {
            return Array.from(new Set(queueContinent));
        }
        return <>
            <VisitAllContinents
                unique={unique}  //Уникальные континенты
                getCostCity={this.props.getCostCity} //Возвращает стоимость перелета из прошлого города в текущий
                getCityParameter={this.props.getCityParameter} //параметры города (координаты, континент, название)
                getPreviousNumberCity={this.props.getPreviousNumberCity} //Возвращает номер города по его названию
                paramCity={this.props.paramCity} //Копия базы городов
                gameResults={this.props.gameResults} //массив результатов
                setSaveResults={this.props.setSaveResults} // Сохраняем результат в gameResults
                queueContinents={this.props.queueContinents} //массив посещенных городов
                setQueueContinents={this.props.setQueueContinents} // добавляем континент в массив континентов (queueContinents)
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        paramCity: state.visitAllContinents_reducer.paramCity,
        gameResults: state.visitAllContinents_reducer.gameResults,
        getCostCity: state.visitAllContinents_reducer.getCostCity,
        getCityParameter: state.visitAllContinents_reducer.getCityParameter,
        getPreviousNumberCity: state.visitAllContinents_reducer.getPreviousNumberCity,
        queueContinents: state.visitAllContinents_reducer.queueContinents,

    })
};

export default connect(mapStateToProps, {setSaveResults, setQueueContinents})(VisitAllContinentsCont)