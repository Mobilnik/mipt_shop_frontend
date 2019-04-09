import React, { Component } from 'react';
import axios from 'axios';

class SendHttpSample extends Component {
    constructor () {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    render () {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
            </div>
        )
    }

    handleClick () {
        axios.get('http://localhost:8080/mipt-shop/good')
            .then(response => {
                console.log(response);
                console.log(response.data);
            })
    }
}
export default SendHttpSample;