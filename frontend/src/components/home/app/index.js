import React, {propsTypes, Component} from 'react';
import classnames from 'classnames';

// import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css';
import './style.css';
import Header from '../sec1-heade'
import Home from '../sec2-home'
import Service from '../sec3-service'
import How from '../sec4-how'
import Team from '../sec5-team'
import Testimonial from '../sec6-testimonial'
import Blog from '../sec7-blog'
import Consult from '../sec8-consult'
import Footer from '../sec9-footer'

import indexData from '../../../resources/index-data'

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
