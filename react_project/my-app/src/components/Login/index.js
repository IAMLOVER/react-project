import React, { Component } from 'react'

import { Button, Modal, Input, message } from 'antd'

import { Link,withRouter } from 'react-router-dom'

import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false,
            modal: false,
            userNumber: '',
            password: ''
        }
        this.showModal = this.showModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleCancle = this.handleCancle.bind(this)
        this.changeUserNumber = this.changeUserNumber.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.logout = this.logout.bind(this)
    }
    showModal() {
        this.setState({
            modal: true
        })
    }
    handleLogin() {
        let url = `http://www.dell-lee.com/react/api/login.json?user=${this.state.userNumber}&password=${this.state.password}`
        axios.get(url, {
            withCredentials: true
        }).then(res => {
            if (res.data.data.login) {
                message.success('登录成功')
                this.setState({
                    login: true,
                    modal: false
                })
            } else {
                message.error('登录失败,请检查账户密码是否正确')
            }
        })
    }
    handleCancle() {
        this.setState({
            modal: false
        })
    }
    changeUserNumber(e) {
        this.setState({
            userNumber: e.target.value
        })
    }
    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
            withCredentials: true
        }).then(res => {
            let { login } = res.data.data
            this.setState({ login })
        })
    }
    logout(){
        axios.get('http://www.dell-lee.com/react/api/logout.json', {
            withCredentials: true
        }).then(res => {
           let {logout} = res.data.data
           if(logout){
               this.setState({
                   login:false
               })
               message.error('退出成功')
               this.props.history.push('/')
           }
        })
    }
    render() {
        return (
            <div>
                <div style={{ marginBottom: 10 }}>
                    {this.state.login ?
                        <Button type="primary" 
                                onClick={this.logout}
                        >退出</Button> :
                        <Button type="primary"
                                onClick={this.showModal}
                        >登录</Button>

                    }
                    <Link to="/vip" style={{marginLeft:10}}>
                        <Button type="primary"
                        >Vip</Button>
                    </Link>
                </div>
                <Modal
                    title="登录"
                    visible={this.state.modal}
                    onOk={this.handleLogin}
                    onCancel={this.handleCancle}
                >
                    <Input placeholder="请输入用户名"
                        style={{ marginBottom: 10 }}
                        value={this.state.userNumber}
                        onChange={this.changeUserNumber} />
                    <Input.Password
                        placeholder="请输入密码"
                        value={this.state.password}
                        onChange={this.changePassword} />
                </Modal>
            </div>
        )
    }
}

export default withRouter(Login)