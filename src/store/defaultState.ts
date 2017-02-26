import {MyState} from "../model/MyState";
const articleJSON = require('../data/articles.json');

export const defaultState: MyState = {
    user: {
        name: 'Гость',
        role: 'guest'
    },
    articles: articleJSON
};