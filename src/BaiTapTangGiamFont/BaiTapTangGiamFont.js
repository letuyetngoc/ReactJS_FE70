import React, { Component } from 'react'

export default class BaiTapTangGiamFont extends Component {

    state = {
        font: 20
    }

    changeFont = (fsize) => {
        this.setState({
            font: this.state.font + fsize
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 style={{ fontSize: `${this.state.font}px` }}>Bài tập tăng giảm fontsize</h3>
                <button onClick={() => this.changeFont(1)} className='btn btn-outline-primary'>+</button>
                <button onClick={() => this.changeFont(-1)} className='btn btn-outline-primary ml-2'>-</button>
            </div >
        )
    }
}
