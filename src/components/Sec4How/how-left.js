import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

export default class HowLeft extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, leftCard, ...props} = this.props;

        return (
            <div className="col-sm-6 col-md-6">
                <div className="expert-left-layer expert-left-layer-no-img match_item">
                    <h2 style={{position: 'relative'}}>{ leftCard.title }</h2>
                    <p align="justify" style={{paddingTop: '10px'}}>{ leftCard.p1 }</p>
                    <p align="justify" style={{paddingTop: '10px'}}>{ leftCard.p2 }</p>
                </div>
            </div>
        );

    }
}