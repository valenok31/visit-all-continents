import React from "react";
import {connect} from "react-redux";
import Records from "./Records";

class RecordsCont extends React.Component {
    render() {
        return <>
            <Records gameResults={this.props.gameResults}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    gameResults: state.visitAllContinents_reducer.gameResults,
})

export default connect(mapStateToProps, {})(RecordsCont)