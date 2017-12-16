import React, { propsTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';
import Header from '../Sec1Header'
import Home from '../Sec2Home'
import Service from '../Sec3Service'
import How from '../Sec4How'
import Team from '../Sec5Team'
import Testimonial from '../Sec6Testimonial'
import Blog from '../Sec7Blog'
import Consult from '../Sec8Consult'
import Footer from '../Sec9Footer'

class App extends Component {
    // static propsTypes = {}
    // static defaultProps = {}
    // static = {}

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('App', className)} {...props}>
                <Header />
                <Home />
                <Service />
                <How />
                <Team />
                <Testimonial />
                <Blog />
                <Consult />
                <Footer />

            </div>
        );
    }
}

export default App;
