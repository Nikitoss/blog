import {Article} from '../model/Article';
import {
    ADD_ARTICLE
} from '../constants/ArticleActionsTypes';
import {ActionCreatorsMapObject} from 'redux';
import Action from './Action';

export function addArticle(article: Article): Action {
    return {
        type: ADD_ARTICLE,
        payload: article
    };
};

export const articleActions: ActionCreatorsMapObject = {
    ADD_ARTICLE : (article: Article) => article
};