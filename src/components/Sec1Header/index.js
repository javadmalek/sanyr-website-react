import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';
import logo from './logo-sanyr.png';

export default class Header extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('Header', className)} {...props}>
                {/*<div className="outslider_loading">*/}
                {/*<div className="outslider_loader"></div>*/}
                {/*</div>*/}

                <header className="header-area home-7-header-area navbar-fixed-top">
                    <div className="container custom-header">
                        <div className="row">
                            <div id="menuzord" className="menuzord">
                                <a href="/" className="menuzord-brand">
                                    <img src={logo} alt="SANYR Logo" />
                                </a>
                                <ul className="menuzord-menu menuzord-menu-onepage menuzord-menu-bg one-page">
                                    <li><a href="#HOME">Home</a></li>
                                    <li><a href="#SERVICE">Services</a></li>
                                    <li><a href="#HOW">How We Work</a></li>
                                    <li><a href="#TEAM">Team</a></li>
                                    <li><a href="#BLOG">BLOG</a></li>
                                    <li><a href="#CONSULT">Mak an Appointment</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}