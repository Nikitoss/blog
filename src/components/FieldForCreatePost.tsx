// import * as React from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {articleActions} from '../actions/ArticleActions';
// import {Article} from '../model/Article';
//
// interface IProps {
//     articleActions?: any;
// }
//
// interface IState {
//     articleName: string;
//     articleText: string;
// }
//
// class FieldForCreatePost extends React.Component<IProps, IState> {
//
//     changeName = (event: any) => {
//         this.setState({articleName: event.currentTarget.value});
//     }
//
//     changeText = (event: any) => {
//         this.setState({articleText: event.currentTarget.value});
//     }
//
//     handleAddArticle = () => {
//         const {articleName, articleText} = this.state;
//         const article: Article = {content: articleText, title: articleName};
//         this.props.articleActions.addArticle(article);
//     }
//
//     render() {
//         return (
//             <div>
//                 <input type="text" className="form-control" onChange={this.changeName} placeholder="Название статьи"/>
//                 <input type="text" className="form-control" onChange={this.changeText} placeholder="Текст статьи"/>
//                 <button className="btn btn-lg btn-block" onClick={this.handleAddArticle}>Опубликовать</button>
//             </div>
//         );
//     }
// }
//
// const mapDispatchToProps = (dispatch: any) => {
//     console.log('Article_mapDispatchToProps');
//     return {
//         articleActions: bindActionCreators(articleActions, dispatch)
//     };
// };
//
// export default connect(null, mapDispatchToProps)(FieldForCreatePost);