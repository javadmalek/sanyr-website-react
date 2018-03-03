import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Built extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(key) {
        const item = this.props.built.items[key];
        return (
            <div className="tile is-ancestor">
                <div className={item.styleLeft}>
                    <article className="tile is-child box">
                        <p className="title"><u>{item.titleLeft}</u></p>
                        <div className="content">
                            <p>{item.descrLeft}</p>
                        </div>
                    </article>
                </div>

                <div className={item.styleRight}>
                    <article className="tile is-child box">
                        <p className="title"><u>{item.titleRight}</u></p>
                        <div className="content">
                            <p>{item.descrRight}</p>
                        </div>
                    </article>
                </div>
            </div>);
    }

    render() {
        const {className, built, ...props} = this.props;
        return (
            <section id="BUILT" className={classnames('section', className)} {...props}>
                <div className="built-for">
                    <h3 className="title is-3">{built.title}</h3>
                    {Object.keys(built.items).map(this.renderItem)}
                </div>
            </section>
        );
    }
}



