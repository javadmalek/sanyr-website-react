import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Service extends Component {

    constructor(props)
    {
        super(props);

        this.renderService = this.renderService.bind(this);
    }

    renderService(key)
    {
        const service = this.props.services[key];
        return (
            <div className="service-3-content-single text-center">
                <span className="icon"><i className={ service.icon } aria-hidden="true"></i></span>
                <h2><a href="#">{ service.title }</a></h2>
                <p>{ service.description }</p>
                <div className="service-content-text read-more-btn">
                    <a href="#"><i className="fa fa-long-arrow-right"></i> <span>Learn More</span></a>
                </div>
            </div>

        );
    }

    render() {
        const {className, services, ...props} = this.props;

        return (
            <section id="SERVICE" className={classnames('service-area page')} {...props}>
                    <div className="main-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="main-title-content text-center">
                                        {/*<h3>Our passion at SanyR is to solve problems through technology.</h3>*/}
                                        <h2>You can count on us in:</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-content-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="service-3-slider" className="owl-carousel all-carousel owl-theme">
                                        { Object.keys(services).map(this.renderService) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}