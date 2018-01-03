import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';
import logo from './logo-sanyr.png';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.renderMenu = this.renderMenu.bind(this);
    }

    renderMenu(key) {
        const menu = this.props.header.menus[key];
        return (<li><a href={menu.link}>{menu.title}</a></li>);
    }

    render() {
        const {className, header, ...props} = this.props;
        console.log(header);
        return (
            <div className={classnames('Header', className)} {...props}>
                <div className="outslider_loading">
                    <div className="outslider_loader"></div>
                </div>

                <header className="header-area home-7-header-area navbar-fixed-top">
                    <div className="container custom-header">
                        <div className="row">
                            <div id="menuzord" className="menuzord">
                                <a href="/" className="menuzord-brand">
                                    <img src={logo} alt="SANYR"/>
                                </a>
                                <ul className="menuzord-menu menuzord-menu-onepage menuzord-menu-bg one-page">
                                    {Object.keys(header.menus).map(this.renderMenu)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}