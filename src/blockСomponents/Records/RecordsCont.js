import React from "react";
import {connect} from "react-redux";
import Records from "./Records";
import {NavLink} from "react-router-dom";
import style from "./records.module.css";
import axios from "axios";
import RecordsFromAPI from "./RecordsFromAPI";
import {setSaveResults} from "../../redux/visitAllContinents_reducer";

class RecordsCont extends React.Component {

    componentDidMount() {
     axios.get('https://62617d9673499e9af90d4345.mockapi.io/api/v1/gameResults')
            .then(response => {
              console.log(response.data);

            })
    }



    render(et) {

        return <div>
            <div>
                <NavLink to='/' className={style.nLink}>
                    <div>Home</div>
                </NavLink>
            </div>
            <div className={style.heading}>Hall of Fame from API</div>
            <div className={style.list_results}>
                <div className={style.list_results__records}><RecordsFromAPI gameResultFromAPI={'et'}/></div>
            </div>
        </div>
    }
}

let mapStateToProps = (state) => ({
    //gameResults: state.visitAllContinents_reducer.gameResults,
})

export default connect(mapStateToProps, {})(RecordsCont)