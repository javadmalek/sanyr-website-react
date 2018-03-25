import React, { PropTypes, Component } from 'react';
import Registration from './registration';
import classnames from 'classnames';

import './style.css';
import featureImg from './images/sanyred-cover.png';

export default class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = { modalState: false };

        this.renderMenu = this.renderMenu.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState((prev, props) => {
            const newState = !prev.modalState;
            return { modalState: newState };
        });
    }

    renderMenu(key) {
        const menu = this.props.header.menus[key];
        return (<a className="navbar-item" href={menu.link}>{menu.title}</a>);
    }

    render() {
        const { className, cover, ...props } = this.props;
        return (
            <div className={classnames('tile is-ancestor', className)} {...props}>
                <div className="tile is-vertical ">
                    <div className="tile">
                        <div className="tile is-7 is-vertical">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title">{cover.mainTitle}</p>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child">
                                    <div className="content action-box">
                                        <p>{cover.mainDescr}</p>
                                        <div className="buttons">
                                            <span className="button is-success">{cover.btnReq}</span>
                                            <span className="button is-info"
                                                onClick={this.toggleModal}>{cover.btnSignup}
                                            </span>
                                            <Registration
                                                closeModal={this.toggleModal}
                                                modalState={this.state.modalState}
                                                regInfo={cover.regInfo}
                                            />
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child  ">
                                <figure className="image">
                                    <img className="img" src={featureImg} alt={cover.alt} />
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
