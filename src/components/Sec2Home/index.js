import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';
import slid1 from './sanyr-slider1.jpg';
import slid2 from './sanyr-slider2.jpg';
import slid3 from './sanyr-slider3.jpg';

export default class Home extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const {className, ...props} = this.props;
        return (
            <section id="HOME" className={classnames('accordion-area bg-type-2 page one-page-custom-padding')} {...props}>
                <div id="rev_slider_2_1_wrapper" className="rev_slider_wrapper fullscreen-container">
                    <div id="slider1" className="rev_slider fullscreenbanner" data-version="5.2.1">
                        <ul style={{backgroundColor: '#f9f9f9'}}>
                            <li data-index="rs-26" data-transition="fade" data-slotamount="default"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off" data-easein="default" data-easeout="default"
                                data-masterspeed="300"
                                data-rotate="0" data-saveperformance="off" data-title="Home3" data-param1=""
                                data-param2=""
                                data-param3="" data-param4="" data-param5="" data-param6="" data-param7=""
                                data-param8=""
                                data-param9="" data-param10="" data-description="">
                                <img src={slid1} alt="" title="bg-slider5" width="1600" height="800"
                                     data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat"
                                     className="rev-slidebg" data-no-retina/>
                                <div className="tp-caption tp-resizeme"
                                     id="slide-26-layer-2" data-x="center" data-hoffset="" data-y="200"
                                     data-width="['auto']"
                                     data-height="['auto']" data-transform_idle="o:1;"
                                     data-transform_in="x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power3.easeInOut;"
                                     data-transform_out="y:50px;opacity:0;s:300;e:easeOutCirc;s:300;e:easeOutCirc;"
                                     data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="900"
                                     data-splitin="none"
                                     data-splitout="none" data-responsive_offset="on"
                                >
                                    <div className="slid-headline">We build Software products for Humans.</div>
                                    <div className="slid-headline-sub-title">SanyR helps your company create a
                                        competitive advantage with high-quality software delivered on demand.
                                    </div>
                                </div>
                            </li>

                            <li data-index="rs-27" data-transition="fade" data-slotamount="default"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off" data-easein="default" data-easeout="default"
                                data-masterspeed="300"
                                data-rotate="0" data-saveperformance="off" data-title="Home4" data-param1=""
                                data-param2=""
                                data-param3="" data-param4="" data-param5="" data-param6="" data-param7=""
                                data-param8=""
                                data-param9="" data-param10="" data-description="">
                                <img src={slid2} alt="" title="bg-slider5" width="1600" height="800"
                                     data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat"
                                     className="rev-slidebg" data-no-retina/>
                                <div className="tp-caption tp-resizeme" id="slide-27-layer-2"
                                     data-x="center" data-hoffset="" data-y="200" data-width="['auto']"
                                     data-height="['auto']" data-transform_idle="o:1;"
                                     data-transform_in="x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power3.easeInOut;"
                                     data-transform_out="y:50px;opacity:0;s:300;e:easeOutCirc;s:300;e:easeOutCirc;"
                                     data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="900"
                                     data-splitin="none" data-splitout="none" data-responsive_offset="on"
                                >
                                    <div className="slid-headline">We guide you across your journey to Industry 4.0.
                                    </div>
                                    <div className="slid-headline-sub-title">SanyR experts pave the way for your
                                        industry to transform into a digital factory!
                                    </div>
                                </div>
                            </li>

                            <li data-index="rs-28" data-transition="fade" data-slotamount="default"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off" data-easein="default" data-easeout="default"
                                data-masterspeed="300"
                                data-rotate="0" data-saveperformance="off" data-title="Home4" data-param1=""
                                data-param2=""
                                data-param3="" data-param4="" data-param5="" data-param6="" data-param7=""
                                data-param8=""
                                data-param9="" data-param10="" data-description="">
                                <img src={slid3} alt="" title="bg-slider5" width="1600" height="800"
                                     data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat"
                                     className="rev-slidebg" data-no-retina/>
                                <div className="tp-caption tp-resizeme" id="slide-28-layer-2" data-x="center"
                                     data-hoffset="" data-y="200" data-width="['auto']" data-height="['auto']"
                                     data-transform_idle="o:1;"
                                     data-transform_in="x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power3.easeInOut;"
                                     data-transform_out="y:50px;opacity:0;s:300;e:easeOutCirc;s:300;e:easeOutCirc;"
                                     data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="900"
                                     data-splitin="none" data-splitout="none" data-responsive_offset="on"
                                >
                                    <div className="slid-headline">Artificial Intelligence Powered all Industries.</div>
                                    <div className="slid-headline-sub-title">We help you discover Capabilities,
                                        Recognize Patterns, Build and Validate your Learning model Implement and Deploy
                                        your AI applications.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}