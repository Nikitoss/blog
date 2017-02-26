import * as React from 'react';

const headerItems = ['Записи', 'Теги', 'Темы', 'О нас', 'Вход'];

export class Header extends React.Component<null, null> {

    render() {

        const logo = require('../data/logo.svg');

        const itemsSX = headerItems.map((item, index) => {
            return (
                <li className="nav-item" key={item + index}>
                    <a className="nav-link" href="#">
                        {item}
                    </a>
                </li>
            );
        });

        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Блог ты ж мой!</h2>
                </div>
                <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                    <ul className="navbar-nav">
                        {itemsSX}
                    </ul>
                </nav>
            </div>
        );
    }
}
