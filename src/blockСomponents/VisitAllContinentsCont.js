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
                unique={unique}
                getCostCity={this.props.getCostCity}
                getCityParameter={this.props.getCityParameter}
                getPreviousNumberСity={this.props.getPreviousNumberСity}
                paramCity={this.props.paramCity}
                gameResults={this.props.gameResults}
                setSaveResults={this.props.setSaveResults}
                setContinentsList={this.props.setContinentsList}
                setQueueContinents={this.props.setQueueContinents}
                queueContinents={this.props.queueContinents}
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
        setQueueContinents: state.visitAllContinents_reducer.setQueueContinents,
        queueContinents: state.visitAllContinents_reducer.queueContinents,

    })
};

export default connect(mapStateToProps, {setSaveResults, setQueueContinents})(VisitAllContinentsCont)