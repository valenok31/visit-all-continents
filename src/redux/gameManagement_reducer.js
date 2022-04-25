import axios from "axios";

const SET_SAVE_RESULTS = 'SET_SAVE_RESULTS';
const GET_SAVE_RESULTS = 'GET_SAVE_RESULTS';
const SET_QUEUE_CONTINENTS = 'SET_QUEUE_CONTINENTS';
const SET_SWITCH_LOADING = 'SET_SWITCH_LOADING';
const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
const SET_SWITCH_ENDGAME = 'SET_SWITCH_ENDGAME';

let initialState = {
    gameResults: [], //-
    switchEndGame: false, //-
    queueContinents: [], //-
    switchLoading: true, //-
    playerName: '', //-
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SAVE_RESULTS:
            postResult(action.results, action.way, action.playerName);
            return state;

        case GET_SAVE_RESULTS:
            return {
                ...state,
                gameResults: action.gameResults,
            }

        case SET_QUEUE_CONTINENTS:
            if (action.queueContinent) {
                return {
                    ...state,
                    queueContinents: action.queueContinent,
                }
            } else {
                return {
                    ...state,
                    queueContinents: [],
                }
            }

        case SET_SWITCH_LOADING:
            return {
                ...state,
                switchLoading: action.switchLoading,
            }
            case SET_SWITCH_ENDGAME:
            return {
                ...state,
                switchEndGame: action.switchEndGame,
            }
        case SET_PLAYER_NAME:
            debugger
            return {
                ...state,
                playerName: action.playerName,
            }

        default:
            return state;
    }
}

export const setSaveResults = (results, way, playerName) => ({
    type: SET_SAVE_RESULTS, results, way, playerName
});
export const getSaveResults = (gameResults) => ({
    type: GET_SAVE_RESULTS, gameResults
});

export const setQueueContinents = (queueContinent) => ({
    type: SET_QUEUE_CONTINENTS, queueContinent
});

export const setSwitchLoading = (switchLoading) => ({
    type: SET_SWITCH_LOADING, switchLoading
});
export const setSwitchEndGame = (switchEndGame) => ({
    type: SET_SWITCH_ENDGAME, switchEndGame
});

export const setPlayerName = (playerName) => ({
    type: SET_PLAYER_NAME, playerName
});


let postResult = (result, way, playerName) => {
    axios.post('https://62617d9673499e9af90d4345.mockapi.io/api/v1/gameResults', {
        result: result,
        way: way,
        name: playerName,
    })
        .then(function (response) {
            //console.log(response.data);
        })
        .catch(function (error) {
            //console.log(error);
        });

}


export default usersReducer;