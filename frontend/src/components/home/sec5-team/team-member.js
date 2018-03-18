import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Member extends Component {
    constructor(props) {
        super(props);

        this.renderSkill = this.renderSkill.bind(this);
        this.renderSocial = this.renderSocial.bind(this);
    }

    renderSkill(key) {
        const skill = this.props.profile.skills[key];
        return (
            <div className="progress_cont">
                <div className="skill">{skill.title}</div>
                <div className="progress">
                    <div className="progress-bar progress-bar-success"
                         role="progressbar"
                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                         style={{width: '0%'}}>
                        <span className="sr-only">Complete (success)</span></div>
                </div>
            </div>
        );
    }

    renderSocial(key) {
        const social = this.props.profile.socials[key];
        return (
            <li><a href={social.link}><i className={`fab fa-${social.media}`}/></a></li>
        );
    }

    render() {
        const {className, profile, ...props} = this.props;
        const image = require("" + profile.image);

        return (
            <div className="col-md-4 col-sm-4">
                <div className="blog-content-single">
                    <div className="blog-img">
                        <img src={image} alt="" className="img-responsive"/>
                    </div>
                    <div className="blog-text">
                        <ul>
                            { Object.keys(profile.socials).map(this.renderSocial) }
                        </ul>
                        <h2><a href="#">{profile.name}</a></h2>
                        <p align="justify">{profile.description}</p>
                        <div className="progressbar">
                            {Object.keys(profile.skills).map(this.renderSkill)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}