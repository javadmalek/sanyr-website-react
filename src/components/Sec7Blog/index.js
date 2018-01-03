import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';
import BlogItem from './blog-item';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.renderBlog = this.renderBlog.bind(this);
    }

    renderBlog(key)
    {
        const blogItem = this.props.blogs[key];
        return (<BlogItem details={blogItem}/>);
    }

    render() {
        const {className, blogs, ...props} = this.props;
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
                                { Object.keys(blogs).map(this.renderBlog) }
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}