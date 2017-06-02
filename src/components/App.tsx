import * as React from 'react';
import {connect} from 'react-redux';

import Articles from './Articles';

import {MyState} from '../model/MyState';
import {UserInfo} from '../model/UserInfo';
import {Article} from '../model/Article';

interface IProps {
    user?: UserInfo;
}

interface IState {
    stateArticles: [Article];
}

class App extends React.Component<IProps, IState> {

    state: IState = {
        stateArticles: [
            {
                title: 'title_1',
                content : 'content_1'
            },
            {
                title: 'title_2',
                content : 'content_2'
            }
        ]
    };

    render() {
        const {user} = this.props;
        const {stateArticles} = this.state;
        console.log('APP ____ articles', stateArticles);
        return (
            <div className="App">
                <span>{user && user.name}</span>
                <Articles articles={this.state.stateArticles}/>
            </div>
        );
    }
}

function mapStateToProps(state: MyState) {
    console.log('mapStateToProps_App', state);
    return {
        user: state && state.user,
    };
}

export default connect(mapStateToProps)(App);
