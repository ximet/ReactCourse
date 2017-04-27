import React from 'react';
import BaseComponent from './BaseComponent';
import { browserHistory } from 'react-router'

class Main extends BaseComponent  {

    constructor (props, context) {
        super(props, context);

        this.router = context.router || null;
        
    }
    handlerRedirect () {
        this.context.router.push('/profile');
    }
    
    render () {
        return (
            <div>
                We have main page
                <div onClick={this.handlerRedirect.bind(this)}>Go to Profile</div>
            </div>
        )
    }
    
}

Main.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Main;
