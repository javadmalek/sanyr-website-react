import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Footer extends Component {

    render() {
        const {className, ...props} = this.props;
        return (
            <footer className={classnames('footer-area')} {...props}>

                <div className="footer-main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="footer-main-single footer-first-content clearfix">
                                    <h2> Software Development</h2>
                                    <p>Microservice<br/>React<br/>Android</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="footer-main-single footer-first-content clearfix">
                                    <h2>Industry 4.0</h2>
                                    <p>Kaa IOT Platform<br/>Siemens, Beckhoff PLC<br/>Universal Robot</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="footer-main-single footer-first-content clearfix">
                                    <h2>Product and Design</h2>
                                    <p>Product Management<br/>Product Marketing<br/>UI/UX Design</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="footer-main-single footer-first-content clearfix">
                                    <h2>Artificial Intelligence</h2>
                                    <p>Machine Learning<br/>Deep Learning<br/>Data Mining</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-content-details">
                    <div className="container">
                        <div className="row">
                            <div className="footer-bottom-content">
                                <div className="col-sm-4 col-md-4 no-padding-left">
                                    <div className="footer-bottom-single">
                                        <p> © 2016 - 2018 </p>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4 no-padding">
                                    <div className="footer-bottom-single">
                                        <div className="footer-menu"></div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4  no-padding-right">
                                    <div className="footer-bottom-single">
                                        <ul className="footer-social text-right">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}