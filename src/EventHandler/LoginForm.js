import React, { Component } from 'react'

export default class LoginForm extends Component {
    state = {
        login: false
    }
    userName = "Le Tuyet Ngoc"

    renderLoginForm = function () {
        if (this.state.login) {
            return <div>Hello {this.userName}</div>
        }
        return <button onClick={this.handleLogin}>Đăng nhập</button>

    }
    handleLogin = () => {
        this.setState({
            login: true
        }, () => console.log(this.state.login))
    }
    render() {
        return (
            <div className='container'>
                {this.renderLoginForm()}
            </div>
        )
    }

}
