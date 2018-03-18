import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';
import logo from './images/logo-sanyr.png';

import TopMenu from './top-menu';
import Cover from './cover';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, header, ...props} = this.props;
        return (
            <section id="HEADER" className={classnames('section', className)} {...props}>
                <TopMenu menus={header.menus} />
                <Cover cover={header.cover}/>
            </section>
        );
    }
}