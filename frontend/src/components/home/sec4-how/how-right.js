import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

export default class HowRight extends Component {
    constructor(props) {
        super(props);
    }

    renderStep(step) {
        return (
            <div className={ step.className }>
                <i className={ step.icon } aria-hidden="true"></i>
                <h2>{ step.title }</h2>
                <p>{ step.description }</p>
            </div>
        );
    }

    render() {
        const {className, rightCardSteps, ...props} = this.props;

        return (<div className="col-sm-6 col-md-6">
            <div className="expert-right match_item">
                <div className="expert-right-content clearfix">
                    <div className="expert-right-first-content clearfix">
                        { this.renderStep(rightCardSteps[0]) }
                        { this.renderStep(rightCardSteps[1]) }
                    </div>
                    { this.renderStep(rightCardSteps[2]) }
                    { this.renderStep(rightCardSteps[3]) }
                </div>
            </div>
        </div>);
    }
}