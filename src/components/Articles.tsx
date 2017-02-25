import * as React from 'react';

interface IProps {
    articles : [Article]
}

export class Articles extends React.Component<IProps, null> {

    render() {
        const {articles} = this.props;
        const articlesSX = articles.map((article, index) => {
            return (
                <li className="article">
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                </li>
            );
        });
        return (
            <div className="articles">
                <ul>
                    {articlesSX}
                </ul>
            </div>
        );
    }
}