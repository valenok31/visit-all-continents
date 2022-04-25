import {combineReducers, createStore} from "redux";
import visitAllContinents_reducer from "./visitAllContinents_reducer";
import startingData_reducer from "./startingData_reducer";
import gameManagement_reducer from "./gameManagement_reducer";

let reducers = combineReducers({
    visitAllContinents_reducer: visitAllContinents_reducer,
    startingData_reducer: startingData_reducer,
    gameManagement_reducer: gameManagement_reducer,
});

let store = createStore(reducers);

export default store;
