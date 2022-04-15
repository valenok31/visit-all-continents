import React from "react";
import {connect} from "react-redux";
import VisitAllContinents from "./VisitAllContinents";
import {setSaveResults} from "../redux/visitAllContinents_reducer";

class VisitAllContinentsCont extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state;
    }

    render() {
        const unique = (queueContinents) => {
            return Array.from(new Set(queueContinents));
        }
        return <>
            <VisitAllContinents
                unique={unique}
                getCostCity={this.props.getCostCity}
                getCityParameter={this.props.getCityParameter}
                getPreviousNumberСity={this.props.getPreviousNumberСity}
                paramCity={this.props.paramCity}
                gameResults={this.props.gameResults}
                setSaveResults={this.props.setSaveResults}
                setContinentsList={this.props.setContinentsList}
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
    getPreviousNumberСity: state.visitAllContinents_reducer.getPreviousNumberСity,
})};

export default connect(mapStateToProps, {setSaveResults})(VisitAllContinentsCont)