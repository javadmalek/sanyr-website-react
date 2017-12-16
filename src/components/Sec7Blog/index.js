import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';
import sanyr_artificial_intelligence from './imgs/sanyr-artificial-intelligence.jpg';
import sanyr_industry_40 from './imgs/sanyr-industry-4.0.jpg';
import sanyr_software_solutions from './imgs/sanyr-software-solutions.jpg';

export default class Blog extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const {className, ...props} = this.props;
        return (
                <section id="BLOG" className={classnames('blog-area bg-type-2 page')} {...props}>
                    <div className="main-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="main-title-content text-center">
                                        <h2>SanyR Blog</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="blog-content-single">
                                        <div className="blog-img">
                                            <img src={sanyr_artificial_intelligence} alt="" className="img-responsive" />
                                                <i className="fa fa-image"></i>
                                        </div>
                                        <div className="blog-text">
                                            <ul>
                                                <li>Dec 19, 2017</li>
                                                <li>
                                                    <a href="#">Machine Learning</a>
                                                </li>
                                            </ul>
                                            <h2><a href="#">Main challenges of Machine Learning</a></h2>
                                            <p style={{ textAlign: 'justify'}} >"Bad algorithm" and "Bad data" would fail the model. When there exist the insufficient quantity of sampling data for training or using poor quantity of data. These means that you're applying bad data.Also, when overfitting/underfitting happens, you need to care about the extracted features to achieve a balance between them.</p>

                                            <a href="#"><i className="fa fa-long-arrow-right"></i> <span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="blog-content-single">
                                        <div className="blog-img">
                                            <img src={sanyr_industry_40} alt="" className="img-responsive" />
                                                <i className="fa fa-briefcase"></i>
                                        </div>
                                        <div className="blog-text">
                                            <ul>
                                                <li>Nov 20, 2017</li>
                                                <li>
                                                    <a href="#">Industry 4.0</a>
                                                </li>
                                            </ul>
                                            <h2><a href="#">Cloud vs Fog computing in Industry 4.0</a></h2>
                                            <p>In recent years Internet of things technology brought lots of benefit to our industries. Data gathering and remote control are one of the key value of the industrial internet of things. Although, The concept of the industry 4.0 radically changed the Industrial Automation field.</p>
                                            <a href="#"><i className="fa fa-long-arrow-right"></i> <span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="blog-content-single">
                                        <div className="blog-img">
                                            <img src={sanyr_software_solutions} alt="" className="img-responsive" />
                                                <i className="fa fa-vimeo-square"></i>
                                        </div>
                                        <div className="blog-text">
                                            <ul>
                                                <li>Feb 22, 2016</li>
                                                <li>
                                                    <a href="#">Software Solutions</a>
                                                </li>
                                            </ul>
                                            <h2><a href="#">Quality Assurance of software products</a></h2>
                                            <p>The weather has taken a turn for the worse and January pay day still seems far away. But
                                                you don’t have to venture outdoors or spend any money today. Sit back, relax and catch
                                                up...</p>
                                            <a href="#"><i className="fa fa-long-arrow-right"></i> <span>Read More</span></a>
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