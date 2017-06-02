import {MyState} from '../model/MyState';
import {UserInfo} from '../model/UserInfo';
import {Article} from '../model/Article';
//const articleJSON = require('../data/articles.json');

const user: UserInfo = {
    name: 'Гость',
    role: 'guest'
};

let articles: Article[] = [
    {
        title: 'title1',
        content: 'content1'
    },
    {
        title: 'title2',
        content: 'content2'
    },
    {
        title: 'title3',
        content: 'content3'
    }
];

export const defaultState: MyState = {
    user: user,
    articles: articles
};
