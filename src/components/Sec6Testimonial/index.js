import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Testimonial extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const {className, ...props} = this.props;
        return (
                <section id="TESTIMONIAL"  className={classnames('quote-area page  quote-3-area bg-type-2')} {...props}
                    style={{backgroundColor: '#FFFFFF'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="quote-3-slider" className="owl-carousel all-carousel owl-theme">
                                    <div className="quote-single quote-3-single">
                                        <div className="quote-main-content quote-3-main-content">
                                            <span className="small-quote"><i className="fa fa-quote-left"></i></span>
                                            <span className="large-quote"><i className="fa fa-quote-left"></i></span>
                                            <p>My work has been greatly helped by the excellent work from Experts team, their advice and
                                                support has been first class. I can’t thank them enough for the awesome progress they
                                                achieved.</p>
                                        </div>
                                        <div className="quote-author quote-3-author">
                                            <div className="quote-author-details">
                                                <h3>Mosio</h3>
                                                <p>Business Director</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quote-single quote-3-single">
                                        <div className="quote-main-content quote-3-main-content">
                                            <span className="small-quote"><i className="fa fa-quote-left"></i></span>
                                            <span className="large-quote"><i className="fa fa-quote-left"></i></span>
                                            <p>My work has been greatly helped by the excellent work from Experts team, their advice and
                                                support has been first class. I can’t thank them enough for the awesome progress they
                                                achieved.</p>
                                        </div>
                                        <div className="quote-author quote-3-author">
                                            <div className="quote-author-details">
                                                <h3>IEBC</h3>
                                                <p>Iran Europe Business Center Director</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quote-single quote-3-single">
                                        <div className="quote-main-content quote-3-main-content">
                                            <span className="small-quote"><i className="fa fa-quote-left"></i></span>
                                            <span className="large-quote"><i className="fa fa-quote-left"></i></span>
                                            <p>My work has been greatly helped by the excellent work from Experts team, their advice and
                                                support has been first class. I can’t thank them enough for the awesome progress they
                                                achieved.</p>
                                        </div>
                                        <div className="quote-author quote-3-author">
                                            <div className="quote-author-details">
                                                <h3>Atin</h3>
                                                <p>Art Director</p>
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