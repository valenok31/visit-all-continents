import {combineReducers, createStore} from "redux";
import startingData_reducer from "./startingData_reducer";
import gameManagement_reducer from "./gameManagement_reducer";

let reducers = combineReducers({
    startingData_reducer: startingData_reducer,
    gameManagement_reducer: gameManagement_reducer,
});

let store = createStore(reducers);

export default store;
