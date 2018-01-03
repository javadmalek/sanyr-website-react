import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import HeaderItem from './header-item'

import './style.css';
import slid1 from './images/sanyr-slider1.jpg';
import slid2 from './images/sanyr-slider2.jpg';
import slid3 from './images/sanyr-slider3.jpg';

export default class Home extends Component {

    constructor(props)
    {
        super(props);

        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(key)
    {
        return (<HeaderItem  item={this.props.home.items[key]} />);
    }

    render() {
        const {className, home, ...props} = this.props;
        return (
            <section id="HOME" className={classnames('accordion-area bg-type-2 page one-page-custom-padding')} {...props}>
                <div id="rev_slider_2_1_wrapper" className="rev_slider_wrapper fullscreen-container">
                    <div id="slider1" className="rev_slider fullscreenbanner" data-version="5.2.1">
                        <ul style={{backgroundColor: '#f9f9f9'}}>
                            { Object.keys(home.items).map(this.renderItem) }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}