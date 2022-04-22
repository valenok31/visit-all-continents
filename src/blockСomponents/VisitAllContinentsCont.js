import React from "react";
import {connect} from "react-redux";
import VisitAllContinents from "./VisitAllContinents";
import {getSaveResults, setQueueContinents, setSaveResults} from "../redux/visitAllContinents_reducer";
import axios from "axios";

class VisitAllContinentsCont extends React.Component {


    render() {
        const unique = (queueContinent) => {
            return Array.from(new Set(queueContinent));
        }
        return <>
            <VisitAllContinents
                unique={unique}  //Уникальные посещенные континенты
                getCostCity={this.props.getCostCity} //Возвращает стоимость перелета из прошлого города в текущий
                getCityParameter={this.props.getCityParameter} //параметры города (координаты, континент, название)
                getPreviousNumberCity={this.props.getPreviousNumberCity} //Возвращает номер города по его названию
                paramCity={this.props.paramCity} //Копия базы городов
                gameResults={this.props.gameResults} //массив результатов
                setSaveResults={this.props.setSaveResults} // Сохраняем результат в gameResults
                queueContinents={this.props.queueContinents} //массив посещенных континентов
                setQueueContinents={this.props.setQueueContinents} // добавляем континент в массив континентов (queueContinents)

                getSaveResults={getSaveResults}
            />

        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        gameResults: state.visitAllContinents_reducer.gameResults,
              paramCity: state.visitAllContinents_reducer.paramCity,
                getCostCity: state.visitAllContinents_reducer.getCostCity,
                getCityParameter: state.visitAllContinents_reducer.getCityParameter,
                getPreviousNumberCity: state.visitAllContinents_reducer.getPreviousNumberCity,
                queueContinents: state.visitAllContinents_reducer.queueContinents,

    })
};

export default connect(mapStateToProps, {setSaveResults, setQueueContinents,getSaveResults})(VisitAllContinentsCont)