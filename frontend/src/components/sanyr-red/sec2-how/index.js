import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Features extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(key) {
        const item = this.props.howWork.items[key];
        return (
            <div className="tile is-parent">
                <article className="tile is-child">
                    <div className="content">
                        <span className="icon center"><i className={item.icon}/></span>
                        <div className="content">{item.descr}</div>
                    </div>
                </article>
            </div>
        );
    }

    render() {
        const {className, howWork, ...props} = this.props;
        return (
            <section id="HOW" className={classnames('section', className)} {...props}>
                <div className="how-works">
                    <h3 className="title is-3 how-title">{howWork.title}</h3>
                    <div className="tile is-ancestor">
                        {Object.keys(howWork.items).map(this.renderItem)}
                    </div>
                </div>
            </section>
        );
    }
}