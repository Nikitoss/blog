import {MyState} from '../model/MyState';
import {defaultState} from '../store/defaultState';
import Action from '../actions/Action';
import {ADD_ARTICLE} from '../constants/ArticleActionsTypes';

export function articles(state: MyState = defaultState, action: Action) {
    switch (action.type) {
        case ADD_ARTICLE:
            const result = {
                ...state,
                articles: state.articles && state.articles.concat(action.payload)
            };
            console.log('ADD_ARTICLE', state);
            return result;

        default:
            return state;
    }
}