import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgScr: './img/black-car.jpg'
    }

    changeColor = (colorCar) => {
        this.setState({
            imgScr: `./img/${colorCar}-car.jpg`
        })
        console.log('123')
    }

    render() {
        return (
            <div className='container'>
                <h3>Bài tập chọn màu xe</h3>
                <div className='row'>
                    <div className='col-6'>
                        <img className='w-100' src={this.state.imgScr} alt='..' />
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-3'>
                                <button onClick={() => this.changeColor('black')} style={{ color: 'black' }}>Black car</button>
                            </div>
                            <div className='col-3'>
                                <button onClick={() => this.changeColor('red')} style={{ color: 'red' }}>Red car</button>
                            </div>
                            <div className='col-3'>
                                <button onClick={() => this.changeColor('silver')} style={{ color: 'silver' }}>Silver car</button>
                            </div>
                            <div className='col-3'>
                                <button onClick={() => this.changeColor('steel')} style={{ color: 'gray' }}>Steel car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

