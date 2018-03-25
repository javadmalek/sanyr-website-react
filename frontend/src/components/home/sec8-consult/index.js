import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import './style.css';
import  HelperFunctions from '../../../helper-functions';

export default class Consult extends Component {
    constructor(props) {
        super();

        this.state = {
            txtbxName:    null,
            txtbxEmail:   null,
            cmbxSolution: 'software',
            txtbxCompany: null,
            txtbxMsg:     null,
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit(e) {
        e.preventDefault();
        const {
            txtbxName,
            txtbxEmail,
            cmbxSolution,
            txtbxCompany,
            txtbxMsg,
        } = this.state;

        // ToDo: check the validation
        axios.post(HelperFunctions.API_URL_SANYR + '/send-consult', {
            name:     txtbxName,
            email:    txtbxEmail,
            solution: cmbxSolution,
            company:  txtbxCompany,
            message:  txtbxMsg,
        })
            .then((response) => {
                if(response.data.success) {
                    // ToDo: jqury is not allowded to be here , change to ReactDom soon.
                    alert('Thanks, Your message is sent.');
                    document.getElementById('contact-form').reset();
                } else { alert(response.data.msg); }

            })
            .catch((error) => {
                alert(error.msg);
            });
    }


    render() {
        const { className, ...props } = this.props;
        return (
            <section id="CONSULT"
                className={classnames('form-area page parallax-window')} {...props}
                data-parallax="scroll" data-image-src="form-bg.jpg">
                <div className="contact-form">
                    <div className="container form-bg">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="form-left-content">
                                    <div className="main-title main-title-left">
                                        <div className="main-title-content">
                                            <h3>Having a trouble?</h3>
                                            <h2>Free Consultation!</h2>
                                            <p>Let us give you a piece of advice on how to turn your idea into a
                                                technology
                                                product/service Quickly and efficiently.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="contact-form-right">
                                    <form id="contact-form" onSubmit={this.onSubmit}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input type="text" id="txtbxName" name="txtbxName"
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    placeholder="Give Us a Name" required />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="email" id="txtbxEmail" name="txtbxEmail"
                                                    className="form-control"
                                                    onChange={this.onChange}
                                                    placeholder="Email: you@yourcompany.com" required />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" id="txtbxCompany" name="txtbxCompany"
                                                    onChange={this.onChange}
                                                    className="form-control"
                                                    placeholder="Company Name" />
                                            </div>
                                            <div className="col-sm-6">
                                                <select className="form-control" id="cmbxSolution" name="cmbxSolution"
                                                    onChange={this.onChange}>
                                                    <option value="software">Software Solutions</option>
                                                    <option value="ai">Artificial Intelligence</option>
                                                    <option value="iot">Industry 4.0</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12">
                                                <textarea className="form-control" rows="3"
                                                    required
                                                    id="txtbxMsg" name="txtbxMsg"
                                                    onChange={this.onChange}
                                                    placeholder="Let us know how we can help you" />
                                            </div>
                                            <div className="col-sm-12 text-center">
                                                <button type="submit" form="contact-form" value="Get Free Advise">Get
                                                    Free
                                                    Advise
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

