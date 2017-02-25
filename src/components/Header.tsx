import * as React from 'react';

const headerItems = ['Записи', 'Теги', 'Темы', 'О нас', 'Вход'];

export class Header extends React.Component<null, null> {

    render() {

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
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <ul className="navbar-nav">
                    {itemsSX}
                </ul>
            </nav>
        );
    }
}
