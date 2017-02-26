import {createStore} from 'redux'
import rootReducer from '../reducers'
import {MyState} from "../model/MyState";
import {defaultState} from "./defaultState";

export default function configureStore(initialState: MyState = defaultState) {
    const store = createStore(
        rootReducer,
        initialState);

    return store;
}