import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

import './style.css';

export default class HeaderItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, item, ...props} = this.props;
        const bg = require("" + item.image);

        return (
            <li data-index={ item.index } data-transition="fade" data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off" data-easein="default" data-easeout="default"
                data-masterspeed="300"
                data-rotate="0" data-saveperformance="off" data-title="Home3" data-param1=""
                data-param2=""
                data-param3="" data-param4="" data-param5="" data-param6="" data-param7=""
                data-param8=""
                data-param9="" data-param10="" data-description="">
                <img src={ bg } alt="" title="bg-slider5" width="1600" height="800"
                     data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat"
                     className="rev-slidebg" data-no-retina/>
                <div className="tp-caption tp-resizeme"
                     id={ item.classid } data-x="center" data-hoffset="" data-y="200"
                     data-width="['auto']"
                     data-height="['auto']" data-transform_idle="o:1;"
                     data-transform_in="x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power3.easeInOut;"
                     data-transform_out="y:50px;opacity:0;s:300;e:easeOutCirc;s:300;e:easeOutCirc;"
                     data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="900"
                     data-splitin="none"
                     data-splitout="none" data-responsive_offset="on"
                >
                    <div className="slid-headline">{ item.title }</div>
                    <div className="slid-headline-sub-title">{ item.subtitle }</div>
                </div>
            </li>

        );
    }
}