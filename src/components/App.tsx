import * as React from 'react';
import {Header} from './Header';
import {Articles} from './Articles';
const articleJSON = require('../data/articles.json');
const logo = require('../data/logo.svg');

export class App extends React.Component<null, null> {

    render() {
        // debugger;
        // const articlesList : [Article] = JSON.parse(articleJSON);
        return (
            <div className="App">
                <Header/>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <Articles articles={articleJSON}/>
            </div>
        );
    }
}
