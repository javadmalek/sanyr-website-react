import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class How extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const {className, ...props} = this.props;
        return (
                <section id="HOW" className={classnames('expertise-area page expertise-area-2 expertise-area-3')} {...props}>
                    <div className="expert-left-layer-3">
                    </div>
                    <div className="container expertise-area-details">
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <div className="expert-left-layer expert-left-layer-no-img match_item">
                                    <h2 style={{ position: 'relative' }}>How we work at SanyR</h2>
                                    <p align="justify" style={{ paddingTop: '10px'}}>
                                        Our methodology is inspired by Agile product Development, The Lean Startup, Customer collaboration, Continuous attention to technical excellence and good design.</p>
                                    <p align="justify"  style={{ paddingTop: '10px'}}>
                                        Using our unique process (The PPIV Method), we will gather product requirements and test the concepts, prototype, develop and check if product fulfills its intended purpose.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="expert-right match_item">
                                    <div className="expert-right-content clearfix">
                                        <div className="expert-right-first-content clearfix">
                                            <div className="expert-right-single-content e-r-s-padding-btm e-r-s-right-padding">
                                                <i className="fa fa-lightbulb-o fa-3x" aria-hidden="true"></i>
                                                <h2>Product Requirement Specifications</h2>
                                                <p>By PRS document we would have a description of the product and extracting all its the
                                                    functional and non-functional requirements.</p>
                                            </div>
                                            <div className="expert-right-single-content e-r-s-padding-btm e-r-s-border e-r-s-left-padding">
                                                <i className="fa fa-product-hunt" aria-hidden="true"></i>
                                                <h2>Product Design</h2>
                                                <p>Here we follow three objectives understanding the current model, designing desire
                                                    architecture and deploying an MVP.</p>
                                            </div>
                                        </div>
                                        <div className="expert-right-single-content e-r-s-padding e-r-s-right-padding">
                                            <i className="fa fa-cogs" aria-hidden="true"></i>
                                            <h2>Implementation</h2>
                                            <p>Starting to develop the product based on the desire design and specified technologies.
                                                Using Agile methodologies for production development.</p>
                                        </div>
                                        <div className="expert-right-single-content e-r-s-padding e-r-s-left-padding e-r-s-border">
                                            <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                            <h2>Verification and Delivery</h2>
                                            <p>Before moving to the Deliver phase, the Process Verification and the Design Verification
                                                Test performed on pre-production or production units. </p>
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