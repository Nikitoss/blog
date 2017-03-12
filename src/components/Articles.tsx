import * as React from 'react';
import {connect, Dispatch} from 'react-redux'
//import {bindActionCreators} from 'redux'

import {MyState} from "../model/MyState";
import {Article} from "../model/Article";

import FieldForCreatePost from './FieldForCreatePost';
import {ArticleActions} from "../actions/ArticleActions";


interface IProps {
    articles: [Article];
    articleActions: ArticleActions;
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

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        //articleActions: bindActionCreators(new ArticleActions().addArticle, dispatch)
    };
};

// const mapDispatchToProps = (dispatch: any) => ({
//     incr: () => {
//         dispatch({ type: 'INCR', by: 1 });
//     },
//     decr: () => {
//         dispatch({ type: 'INCR', by: -1 });
//     }
// });

export default connect(mapStateToProps, mapDispatchToProps)(Articles);