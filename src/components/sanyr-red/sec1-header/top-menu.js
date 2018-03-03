import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';
import logo from './images/logo-sanyr.png';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.renderMenu = this.renderMenu.bind(this);
    }

    renderMenu(key) {
        const menu = this.props.menus[key];
        return (<a className="navbar-item" href={menu.link}>{menu.title}</a>);
    }

    render() {
        const {className, menus, ...props} = this.props;
        return (
                <nav className={classnames('navbar is-transparent', className)} {...props}>
                    <a className="navbar-item" href="/">
                        <img src={logo} alt="SANYR" width="112" height="28"/>
                    </a>

                    <div className="navbar-menu">
                        <div className="navbar-end">
                            {Object.keys(menus).map(this.renderMenu)}
                        </div>
                    </div>
                </nav>
        );
    }
}