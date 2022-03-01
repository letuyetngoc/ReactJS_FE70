import React, { Component } from 'react'
import './style.css';
import style from './Style.module.css';

export default class StyleComponent extends Component {
    render() {
        const styleObject = {
            color: 'blue',
            backgroundColor: 'red'
        }
        return (
            <div>
                <div className={style.pColorGreen}>StyleComponent</div>
                <p className={style['p-color-blue']}>style Component</p>
                <p style={styleObject}>123</p>
            </div>
        )
    }
}
