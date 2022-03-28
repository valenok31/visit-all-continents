import {combineReducers, createStore} from "redux";
import visitAllContinents_reducer from "./visitAllContinents_reducer";

let reducers = combineReducers({
    visitAllContinents_reducer: visitAllContinents_reducer,
});

let store = createStore(reducers);

export default store;
