import React from 'react';
import BaseComponent from './BaseComponent';

export default class App extends BaseComponent {
    constructor(props) {
        super(props);
    }
    
    render () {
        return (
            <div className="mainContainer">
                {this.props.children}
            </div>
        );
    }
}
