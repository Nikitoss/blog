import * as React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {MyState} from "../model/MyState";
import {Article} from "../model/Article";

import FieldForCreatePost from './FieldForCreatePost';
import * as articleActions from '../actions/ArticleActions';


interface IProps {
    articles: [Article];
    articleActions?: [any];
}

interface IState {

}

class Articles extends React.Component<IProps, IState> {

    render() {
        const {articles} = this.props;
        const articlesSX = articles.map((article, index) => {
            return (
                <li className="article" key={article.title + index}>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                </li>
            );
        });
        return (
            <div className="container articles">
                <FieldForCreatePost/>
                <ul>
                    {articlesSX}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state: MyState) {
    debugger;
    return {
        articles: state.articles
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        articleActions: bindActionCreators(articleActions.addArticle, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);