import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Service extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const {className, ...props} = this.props;
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
                                        <div className="service-3-content-single text-center">
                                            <span className="icon"><i className="fa fa-laptop" aria-hidden="true"></i></span>
                                            <h2><a href="#">Software Solutions</a></h2>
                                            <p>Either you are investing in new software solutions or creating better integration between
                                                existing ones. Our dedicated experts in software development will work next to you to
                                                ensure the use of best-fit software solutions to meet your customers’ business
                                                needs.</p>
                                            <div className="service-content-text read-more-btn">
                                                <a href="#"><i className="fa fa-long-arrow-right"></i> <span>Learn More</span></a>
                                            </div>
                                        </div>
                                        <div className="service-3-content-single text-center">
                                            <span className="icon"><i className="fa fa-cubes" aria-hidden="true"></i></span>
                                            <h2><a href="#">Artificial Intelligence</a></h2>
                                            <p>AI’s impact on industries is similar to electricity’s impact on humankind. At SanyR, we
                                                are zealously committed to combining our domain knowledge with specialized technical
                                                skills to provide high-impact artificial intelligence applications, wowing customers
                                                with their added value.</p>
                                            <div className="service-content-text read-more-btn">
                                                <a href="#"><i className="fa fa-long-arrow-right"></i> <span>Learn More</span></a>
                                            </div>
                                        </div>
                                        <div className="service-3-content-single text-center">
                                            <span className="icon"><i className="fa fa-industry" aria-hidden="true"></i></span>
                                            <h2><a href="#">Industry 4.0</a></h2>
                                            <p>Digitization of the factory is badly disruptive, changing all aspects of your industry.
                                                Its impact ranges from smart manufacturing and lean production to industrial automation.
                                                To go to bat for Industry 4.0 implementation, our experts will work closely with
                                                you.</p>
                                            <div className="service-content-text read-more-btn">
                                                <a href="#"><i className="fa fa-long-arrow-right"></i> <span>Learn More</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}