import React from "react";
import {connect} from "react-redux";
import VisitAllContinents from "./VisitAllContinents";
import {
    getSaveResults,
    setPlayerName,
    setQueueContinents,
    setSaveResults,
    setSwitchEndGame
} from "../redux/gameManagement_reducer";

class VisitAllContinentsCont extends React.Component {

    componentDidMount() {
        this.props.setQueueContinents();
    }

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
                playerName={this.props.playerName} // имя игрока
                setPlayerName={this.props.setPlayerName} // Сохраняем имя
                setSwitchEndGame={this.props.setSwitchEndGame} // переключатель окна EndGame
                switchEndGame={this.props.switchEndGame} // состояние переключателя окна EndGame
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        paramCity: state.startingData_reducer.paramCity,
        getCostCity: state.startingData_reducer.getCostCity,
        getPreviousNumberCity: state.startingData_reducer.getPreviousNumberCity,
        getCityParameter: state.startingData_reducer.getCityParameter,

        gameResults: state.gameManagement_reducer.gameResults,
        queueContinents: state.gameManagement_reducer.queueContinents,
        playerName: state.gameManagement_reducer.playerName,
        switchEndGame: state.gameManagement_reducer.switchEndGame,
    })
};

export default connect(mapStateToProps, {setSaveResults, setQueueContinents, setPlayerName,setSwitchEndGame})(VisitAllContinentsCont)