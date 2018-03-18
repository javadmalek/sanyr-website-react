import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';
import FooterMenu from './footer-menu';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, footer, ...props} = this.props;
        return (
            <section id="FOOTER" className={classnames('section', className)} {...props}>
                <FooterMenu menus={footer.menus}/>
            </section>
        );
    }
}