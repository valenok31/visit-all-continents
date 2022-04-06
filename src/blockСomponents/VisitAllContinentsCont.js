import React from "react";
import {connect} from "react-redux";
import VisitAllContinents from "./VisitAllContinents";
import {setSaveResults} from "../redux/visitAllContinents_reducer";

class VisitAllContinentsCont extends React.Component {
    componentDidMount() {

    }

    render() {

        return <>
            <VisitAllContinents
                getCostCity={this.props.getCostCity}
                getCityParameter={this.props.getCityParameter}
                getPreviousNumberСity={this.props.getPreviousNumberСity}
                _cityAddParam={this.props._cityAddParam}
                paramCity={this.props.paramCity}
                gameResults={this.props.gameResults}
                setSaveResults={this.props.setSaveResults}
            />
        </>
    }
}

let mapStateToProps = (state) => ({
    _cityAddParam: state.visitAllContinents_reducer._cityAddParam,
    paramCity: state.visitAllContinents_reducer.paramCity,
    gameResults: state.visitAllContinents_reducer.gameResults,
    getCostCity: state.visitAllContinents_reducer.getCostCity,
    getCityParameter: state.visitAllContinents_reducer.getCityParameter,
    getPreviousNumberСity: state.visitAllContinents_reducer.getPreviousNumberСity,

})

export default connect(mapStateToProps, {setSaveResults})(VisitAllContinentsCont)