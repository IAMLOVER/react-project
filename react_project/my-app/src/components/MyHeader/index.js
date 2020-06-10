import React, { Component } from 'react'
import logo from './logo.png'
import './index.css'
import { Menu } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
class MyHeader extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:[]
        }
    }
    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/header.json').then((res)=>{
            console.log(res.data.data)
            this.setState({
                list:res.data.data
            })
        })
    }

    getMenuItems(){
        return this.state.list.map((item)=>{
            return (
                <Menu.Item key={item.id} icon={<GoogleOutlined />}>
                 <Link to={`/${item.id}`}>
                     {item.title}
                 </Link>
                </Menu.Item>
            )
        })
    }
    render() {
        return (
            <div>
                <img src={logo} alt="logo" className="logo" />
                <Menu mode="horizontal" className="app-header-menu">
                   {this.getMenuItems()}
                </Menu>
            </div>
        )
    }
}

export default MyHeader