import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import HowLeft from './how-left'
import HowRight from './how-right'

import './style.css';

export default class How extends Component {
    render() {
        const {className, how, ...props} = this.props;
        return (
            <section id="HOW"
                     className={classnames('expertise-area page expertise-area-2 expertise-area-3')} {...props}>
                <div className="expert-left-layer-3">
                </div>
                <div className="container expertise-area-details">
                    <div className="row">
                        <HowLeft leftCard={how.leftCard}/>
                        <HowRight rightCardSteps={how.rightCardSteps}/>
                    </div>
                </div>
            </section>
        );
    }
}