import {ActionCreator} from "react-redux";

import {Article} from "../model/Article";
import {
    ADD_ARTICLE
} from "../constants/ArticleActionsTypes";

import Action from "./Action";
import {createAction} from "redux-actions";

interface AddArticleAction extends Action {
    payload: Article;
}

export const addArticle: ActionCreator<AddArticleAction> = (article: Article) => ({
    type: ADD_ARTICLE,
    payload: article
})

class ArticleActions {
    constructor () {
    };

    addArticle : (article: Article) => any = createAction(ADD_ARTICLE, (article: Article) => article);

};

export {ArticleActions};