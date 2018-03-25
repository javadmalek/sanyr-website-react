import axios from 'axios/index';
import React, { PropTypes, Component } from 'react';
import HelperFunctions from '../../../helper-functions';
import './style.css';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            txtbxName:    '',
            txtbxRole:    '',
            txtbxCompany: '',
            txtbxEmail:   '',
            txtbxPhone:   '',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    }

    onChangeText(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleRegistrationSubmit(event) {
        event.preventDefault();
        const { txtbxName, txtbxRole, txtbxCompany, txtbxEmail, txtbxPhone } = this.state;

        // ToDO: check the validation
        axios.post(HelperFunctions.API_URL_SANYRED + '/users/signup-request', {
            name:    txtbxName,
            role:    txtbxRole,
            company: txtbxCompany,
            email:   txtbxEmail,
            phone:   txtbxPhone,
        })
            .then((response) => {
                if (response.data.success) {
                    //  ToDo: NO JQURY COde
                    alert('Thanks, Your signup request is submitted successfully and you would receive an email very soon.');
                    this.setState({
                        txtbxName:    '',
                        txtbxRole:    '',
                        txtbxCompany: '',
                        txtbxEmail:   '',
                        txtbxPhone:   '',
                    });
                    this.props.closeModal();
                } else {
                    alert(response.data.msg);
                }
            })
            .catch((error) => {
                alert(error.msg);
            });
    }

    render() {
        const { closeModal, modalState, regInfo, ...props } = this.props;
        if (!modalState) return null;

        return (
            <div className="modal is-active">
                <div className="modal-background" onClick={closeModal} />
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{regInfo.title}</p>
                        <button className="delete" onClick={closeModal} />
                    </header>
                    <section className="modal-card-body">
                        <div className="content">
                            <div className="column is-12 is-offset-0">
                                <form onSubmit={this.handleRegistrationSubmit}>
                                    <div className="field">
                                        <div className="control">
                                            <input name="txtbxName" value={this.state.txtbxName}
                                                onChange={this.onChangeText} className="input is-medium" type="text"
                                                placeholder="Your Name" autoFocus="" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input name="txtbxRole" value={this.state.txtbxRole}
                                                onChange={this.onChangeText} className="input is-medium" type="text"
                                                placeholder="Your Role" autoFocus="" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input name="txtbxCompany" value={this.state.txtbxCompany}
                                                onChange={this.onChangeText} className="input is-medium" type="text"
                                                placeholder="Your Company" autoFocus="" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input name="txtbxEmail" value={this.state.txtbxEmail}
                                                onChange={this.onChangeText} className="input is-medium" type="email"
                                                placeholder="Your Email" autoFocus="" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <input name="txtbxPhone" value={this.state.txtbxPhone}
                                                onChange={this.onChangeText} className="input is-medium" type="tel"
                                                placeholder="+49 177 166 7430" />
                                        </div>
                                    </div>
                                    <button className="button is-block is-info is-medium is-fullwidth">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

Registration.propTypes = {
    // closeModal: PropTypes.func.isRequired,
    // modalState: PropTypes.bool,
    // regInfo:    PropTypes.arrayOf(PropTypes.Object),
};

Registration.defaultProps = {
    modalState: false,
    regInfo:    [],
};
