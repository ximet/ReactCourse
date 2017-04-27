import React from 'react';
import BaseComponent from './BaseComponent';
import Input from './Input/Input';

class Profile extends BaseComponent {

    render () {
        return (
            <div>
                <span>Profile</span>
                <Input/>
            </div>
        )
    }
}

export default Profile;
