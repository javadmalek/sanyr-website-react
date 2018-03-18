import React, {propsTypes, Component} from 'react';
import classnames from 'classnames';

import Header   from '../sec1-header';
import Features from '../sec2-how';
import Built    from '../sec3-built';
import Footer   from '../sec4-footer';

import './style.css';
import sanyredData from '../../../resources/sanyred-data'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = sanyredData;
    }

    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('App', className)} {...props}>
                <Header header={this.state.header} />
                <Features howWork={this.state.howWork}/>
                <Built built={this.state.built}/>
                <Footer footer={this.state.footer}/>
            </div>
        );
    }
}

export default App;
