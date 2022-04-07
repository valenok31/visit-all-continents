import React from "react";
import {connect} from "react-redux";
import Records from "./Records";

class RecordsCont extends React.Component {
    componentDidMount() {

    }

    render() {

        return <>
            <Records
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

export default connect(mapStateToProps, {})(RecordsCont)