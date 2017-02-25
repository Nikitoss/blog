import * as React from 'react';
import '../style/Header.css'
const headerItems = ['home', 'New features', 'Press', 'New hires', 'About'];

export class Header extends React.Component<null, null> {

    render() {

        const itemsSX = headerItems.map((item, index) => {
            return (
                <li className="nav-item">
                    <a key={index} className="nav-link" href="#"> {item} </a>
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
