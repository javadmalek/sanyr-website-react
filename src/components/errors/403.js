import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Error403 extends Component {

    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('NotFound', className)} {...props}>
                <h1>
                    403
                    <small>Forbidden :(</small>
                </h1>
            </div>
        );
    }
}
