import React ,{ Component } from 'react'
import logo from './logo.png'
import './index.css'
class MyHeader extends Component{
    render(){
        return(
        <div>
            <img src={logo} className="logo"/>
        </div>
        )
    }
}

export default MyHeader