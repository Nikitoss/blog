import {MyState} from "../model/MyState";
import Action from "../actions/Action";
import {ADD_ARTICLE} from "../constants/ArticleActionsTypes";

export default function articles(state: MyState, action: Action) {

    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [state.articles, action.payload]
            };

        default:
            return state;
    }

}