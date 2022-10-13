import React, { Component } from 'react';
import dog from './dog.jpeg'

export default class Image extends Component {
    render() {
    return (
        <div className='image'>
            <img alt='Cute Puppy Dog' src={dog} />
        </div>
    )
    }
}