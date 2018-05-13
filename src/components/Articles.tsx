// import * as React from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
//
// import {MyState} from '../model/MyState';
// import {Article} from '../model/Article';
//
// import {articleActions} from '../actions/ArticleActions';
// import FieldForCreatePost from './FieldForCreatePost';
//
// interface IProps {
//     articles?: Article[];
//     username?: string;
//     articleActions?: any;
// }
//
// class Articles extends React.Component<IProps, {}> {
//
//     componentWillMount() {
//         console.log('componentWillMount!');
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount!');
//
//     }
//
//     componentWillReceiveProps(nextProps: IProps) {
//         console.log('componentWillReceiveProps!');
//     }
//
//     // shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: void, nextContext: any) {
//     //     console.log('shouldComponentUpdate!');
//     //     return true;
//     // }
//
//     handleAddArticle = () => {
//         const article: Article = {content: 'hahaha', title: 'hahaha'};
//         this.props.articleActions.addArticle(article);
//     }
//
//     render() {
//         console.log('Articles_render!');
//         const {articles} = this.props;
//         const articlesSX = articles && articles.map((article, index) => {
//             return (
//                 <li className="article" key={article.title + index}>
//                     <h3>{article.title}</h3>
//                     <p>{article.content}</p>
//                 </li>
//             );
//         });
//         return (
//             <div className="container articles">
//                 <FieldForCreatePost/>
//                 <ul>
//                     {articlesSX}
//                 </ul>
//             </div>
//         );
//     }
// }
//
// function mapStateToProps(state: MyState) {
//     console.log('mapStateToProps_Articles', state);
//     return {
//         articles: state.articles,
//         username: state.user.name
//     };
// }
//
// const mapDispatchToProps = (dispatch: any) => {
//     console.log('Article_mapDispatchToProps');
//     return {
//         articleActions: bindActionCreators(articleActions, dispatch)
//     };
// };
//
// const articleConnector = connect(mapStateToProps, mapDispatchToProps)(Articles);
//
// export {articleConnector as Articles};
