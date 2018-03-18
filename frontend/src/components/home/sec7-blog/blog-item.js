import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class BlogItem extends Component{
    render()
    {
        const { className, details, ...props} = this.props;
        const image = require(details.image+ "");

        return (
            <div className="col-md-4 col-sm-4">
                <div className="blog-content-single">
                    <div className="blog-img">
                        <img src={image} alt="" className="img-responsive" />
                    </div>
                    <div className="blog-text">
                        <ul>
                            <li>{ details.date }</li>
                            <li>
                                <a href="#">{ details.category }</a>
                            </li>
                        </ul>
                        <h2><a href="#">{ details.title }</a></h2>
                        <p style={{ textAlign: 'justify'}} >{ details.description }</p>

                        <a href="#"><i className="fas fa-long-arrow-alt-right"/> <span>Read More</span></a>
                    </div>
                </div>
            </div>
        );
    }
}