import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';
import ebrahim_kargar from './ebrahim-kargar.png';
import javad_malek_shahkoohi from './javad-malek-shahkoohi.png';
import mohammad_ghazi_vakili from './mohammad-ghazi-vakili.png';

export default class Team extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const {className, ...props} = this.props;
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
                            <div className="col-md-4 col-sm-4">
                                <div className="blog-content-single">
                                    <div className="blog-img">
                                        <img src={javad_malek_shahkoohi} alt="" className="img-responsive"/>
                                    </div>
                                    <div className="blog-text">
                                        <ul>
                                            <li><a href="https://www.linkedin.com/in/javadmalek"><i
                                                className="fa fa-linkedin"></i></a>
                                            </li>
                                            <li><a href="https://twitter.com/shahkoohi"><i
                                                className="fa fa-twitter"></i></a></li>
                                            <li><a href="https://github.com/javadmalek"><i className="fa fa-github"></i></a>
                                            </li>
                                        </ul>
                                        <h2><a href="#">Javad Malek Shahkoohi</a></h2>
                                        <p align="justify"> In my role as software architecture and full stack-developer
                                            along past
                                            decade, I have developed many practical tools including Web&Desktop and
                                            Android
                                            applications. Also, interested in machine learning. </p>
                                        <div className="progressbar">
                                            <div className="progress_cont">
                                                <div className="skill">Artificial Intelligence</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                            <div className="progress_cont">
                                                <div className="skill">System architecture</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                            <div className="progress_cont">
                                                <div className="skill">FullStack Developer</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                            <div className="progress_cont">
                                                <div className="skill">Mobile Application Developer</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="blog-content-single">
                                    <div className="blog-img">
                                        <img src={ebrahim_kargar} alt="" className="img-responsive"/>
                                    </div>
                                    <div className="blog-text">
                                        <ul>
                                            <li><a href="https://www.linkedin.com/in/ebrahimkargar/"><i
                                                className="fa fa-linkedin"></i></a>
                                            </li>
                                            <li><a href="https://twitter.com/Homaion"><i className="fa fa-twitter"></i></a>
                                            </li>
                                            <li><a href="https://github.com/ebikargar"><i className="fa fa-github"></i></a>
                                            </li>
                                        </ul>
                                        <h2><a href="#">Ebrahim Kargar</a></h2>
                                        <p align="justify">Hi, I'm Ebrahim, Product Manager & Software Engineer with
                                            intense passion
                                            on building tech products meeting people's needs, desires, and wishes, in
                                            the first place I'm
                                            an Infinite learner and lover of life.</p>
                                        <div className="progressbar">
                                            <div className="progress_cont">
                                                <div className="skill">Product Manager</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                            <div className="progress_cont">
                                                <div className="skill">Software Engineer</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                            <div className="progress_cont">
                                                <div className="skill">Software Quality Assurance</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                            <div className="progress_cont">
                                                <div className="skill">Product Marketing</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="blog-content-single">
                                    <div className="blog-img">
                                        <img src={mohammad_ghazi_vakili} alt="" className="img-responsive"/>
                                    </div>
                                    <div className="blog-text">
                                        <ul>
                                            <li><a href="https://www.linkedin.com/in/mghazivakili/"><i
                                                className="fa fa-linkedin"></i></a></li>
                                            <li><a href="https://github.com/ghazivakili/"><i
                                                className="fa fa-github"></i></a></li>
                                        </ul>
                                        <h2><a href="#">Mohammad Ghazivakili</a></h2>
                                        <p align="justify"> I am Mechatronic Engineer and spent more than decade work
                                            with Oil&Gas
                                            Companies, I work in digitalization of the factory in recent years to give
                                            chance to the
                                            SMEs to reduce their production cost.</p>
                                        <div className="progressbar">
                                            <div className="progress_cont">
                                                <div className="skill">Digital Factory(Industry 4.0)</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                            <div className="progress_cont">
                                                <div className="skill">Industrial Automation</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                            <div className="progress_cont">
                                                <div className="skill">Industrial IOT</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                            <div className="progress_cont">
                                                <div className="skill">PLC programming</div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-success"
                                                         role="progressbar"
                                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                         style={{width: '0%'}}>
                                                        <span className="sr-only">Complete (success)</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}