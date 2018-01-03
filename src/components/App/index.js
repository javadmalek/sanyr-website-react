import React, {propsTypes, Component} from 'react';
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

import indexData from '../../resources/index-data'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = indexData;
    }

    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('App', className)} {...props}>
                <Header header={this.state.header}/>
                <Home home={this.state.home}/>
                <Service services={this.state.services}/>
                <How how={this.state.how}/>
                <Team teamMember={this.state.team_members}/>
                <Testimonial testimonials={this.state.testimonials}/>
                <Blog blogs={this.state.blogs}/>
                <Consult/>
                <Footer/>
            </div>
        );
    }
}

export default App;
