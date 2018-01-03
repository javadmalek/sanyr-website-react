import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';
import Member from './team-member';
// import ebrahim_kargar from './ebrahim-kargar.png';
// import javad_malek_shahkoohi from './javad-malek-shahkoohi.png';
// import mohammad_ghazi_vakili from './mohammad-ghazi-vakili.png';

export default class Team extends Component {
    constructor(props) {
        super(props);

        this.renderMembers = this.renderMembers.bind(this);
    }

    renderMembers(key) {
        return <Member profile={this.props.teamMember[key]}/>
    }

    render() {
        const {className, teamMember, ...props} = this.props;
        return (
            <section id="TEAM" className={classnames('blog-area bg-type-2 page')} {...props}>
                <div className="main-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="main-title-content text-center">
                                    <h2>You're in good hands!</h2>
                                    {/*<h3>Our team offers an effective combination of broad customer service expertise and deep product knowledge to help you deliver a differentiated customer experience. From a strategic implementation to always-on service, we make sure you get the best value out of SanyR.</h3>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-content-area">
                    <div className="container">
                        <div className="row">
                            {Object.keys(teamMember).map(this.renderMembers)}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}