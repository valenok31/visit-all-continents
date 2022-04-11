import React from "react";
import {connect} from "react-redux";
import Records from "./Records";
import {NavLink} from "react-router-dom";
import style from "./records.module.css";

class RecordsCont extends React.Component {
    render() {
        return <div>
            <div>
                <NavLink to='/' className={style.nLink}>
                    <div>Home</div>
                </NavLink>
            </div>
            <div className={style.heading}>Hall of Fame</div>
            <div className={style.list_results}>
                <div className={style.list_results__records}><Records gameResults={this.props.gameResults} quantity='1000'/></div>
            </div>
        </div>
    }
}

let mapStateToProps = (state) => ({
    gameResults: state.visitAllContinents_reducer.gameResults,
})

export default connect(mapStateToProps, {})(RecordsCont)