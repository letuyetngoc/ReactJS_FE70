import React, { Component } from 'react'

export default class HandlerEventRCC extends Component {

    Log = (log) =>
        alert(log)
    render() {
        return (
            <div className='container'>
                {/* <button onClick={this.ShowMessage}>Show message</button> */}
                <button onClick={() => this.Log('ngoc')}>Click me!</button>
            </div >
        )
    }
}
