import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        return (
            <div className='Die'>
                <i
                    className={`Die-dice fas fa-dice-${this.props.face} ${
                        this.props.rolling ? 'shaking' : null
                    }`}
                ></i>
            </div>
        );
    }
}

export default Die;
