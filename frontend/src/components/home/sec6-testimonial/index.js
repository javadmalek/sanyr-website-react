import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Testimonial extends Component {
    constructor(props) {
        super(props);

        this.renderTestimonial = this.renderTestimonial.bind(this);
    }

    renderTestimonial(key)
    {
        const testimonial = this.props.testimonials[key];

        return(
            <div className="quote-single quote-3-single">
                <div className="quote-main-content quote-3-main-content">
                    <span className="small-quote"><i className="fa fa-quote-left"></i></span>
                    <span className="large-quote"><i className="fa fa-quote-left"></i></span>
                    <p>{ testimonial.message }</p>
                </div>
                <div className="quote-author quote-3-author">
                    <div className="quote-author-details">
                        <h3>{ testimonial.name }</h3>
                        <p>{ testimonial.position + ", " + testimonial.company }</p>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        const {className, testimonials, ...props} = this.props;
        return (
            <section id="TESTIMONIAL" className={classnames('quote-area page  quote-3-area bg-type-2')} {...props}
                     style={{backgroundColor: '#FFFFFF'}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="quote-3-slider" className="owl-carousel all-carousel owl-theme">
                                { Object.keys(testimonials).map(this.renderTestimonial) }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}