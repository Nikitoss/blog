import {createStore} from 'redux';
//import {articles} from '../reducers/'
import {MyState} from '../model/MyState';
import {defaultState} from './defaultState';
import {articles} from '../reducers/articles';

export default function configureStore(initialState: MyState = defaultState) {
    const store = createStore(
        articles,
        initialState);

    return store;
}