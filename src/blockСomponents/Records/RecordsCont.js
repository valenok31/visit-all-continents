import React from "react";
import {connect} from "react-redux";
import style from "./records.module.css";
import axios from "axios";
import RecordsFromAPI from "./RecordsFromAPI";
import {getSaveResults, setSwitchLoading} from "../../redux/gameManagement_reducer";
import Loading from "../loading/Loading";
import HomeNavLink from "../HomeNavLink/HomeNavLink";

class RecordsCont extends React.Component {

    componentDidMount() {

        this.props.setSwitchLoading(true);
        axios.get('https://62617d9673499e9af90d4345.mockapi.io/api/v1/gameResults')
            .then(response => {
                this.props.getSaveResults(response.data);
                this.props.setSwitchLoading(false);
            })
    }


    render() {
        console.log(this.props.switchLoading);
        return <div>
            {this.props.switchLoading ? <Loading/> : ''}
            <div>
                <HomeNavLink/>
            </div>
            <div className={style.heading}>Hall of Fame from API</div>
            <div className={style.list_results}>
                <div className={style.list_results__records}><RecordsFromAPI
                    gameResultFromAPI={this.props.gameResults}/></div>
            </div>
        </div>
    }
}

let mapStateToProps = (state) => ({
    gameResults: state.gameManagement_reducer.gameResults,
    switchLoading: state.gameManagement_reducer.switchLoading,
})

export default connect(mapStateToProps, {getSaveResults, setSwitchLoading})(RecordsCont)