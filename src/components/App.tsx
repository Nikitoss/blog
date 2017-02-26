import * as React from 'react';
import {connect} from 'react-redux'

import {Header} from './Header';
import Articles from './Articles';

import {MyState} from "../model/MyState";
import {UserInfo} from "../model/UserInfo";

interface IProps {
    user: UserInfo;
}

class App extends React.Component<IProps, void> {

    render() {
        debugger;
        const {user} = this.props;
        return (
            <div className="App">
                <span>{user.name}</span>
                <Header/>
                <Articles/>
            </div>
        );
    }
}

function mapStateToProps(state: MyState) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(App);
