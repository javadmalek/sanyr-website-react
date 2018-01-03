import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class Consult extends Component {
    render() {
        const {className, ...props} = this.props;
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
                                                product/service Quickly and efficiently.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="contact-form-right">
                                    <form method="post" action="email.php" id="form1">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input type="text" id="txtbxName" name="txtbxName"
                                                       className="form-control"
                                                       placeholder="Give Us a Name" required/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="email" id="txtbxEmail" name="txtbxEmail"
                                                       className="form-control"
                                                       placeholder="Email: you@yourcompany.com" required/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" id="txtbxCompany" name="txtbxCompany"
                                                       className="form-control"
                                                       placeholder="Company Name"/>
                                            </div>
                                            <div className="col-sm-6">
                                                <select className="form-control" id="cmbxService" name="cmbxService">
                                                    <option>Software Solutions</option>
                                                    <option>Artificial Intelligence</option>
                                                    <option>Industry 4.0</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12">
                                  <textarea className="form-control" rows="3"
                                            required
                                            id="txtbxMsg" name="txtbxMsg"
                                            placeholder="Let us know how we can help you"></textarea>
                                            </div>
                                            <div className="col-sm-12 text-center">
                                                <button type="submit" form="form1" value="Get Free Advise">Get Free
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