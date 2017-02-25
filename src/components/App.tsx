import * as React from 'react';
import {Header} from './Header';
import {Articles} from './Articles';
const articleJSON = require('../data/articles.json');
const logo = require('../data/logo.svg');

export class App extends React.Component<null, null> {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Блог ты ж мой!</h2>
                </div>
                <Header/>
                <Articles articles={articleJSON}/>
            </div>
        );
    }
}
