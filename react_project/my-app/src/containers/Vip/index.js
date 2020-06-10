import React ,{Component} from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './index.css'
class Vip extends Component{
    constructor(props){
        super(props)
        this.state = {
            vipLogin:true,
            isFinished:false
        }
    }
    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
            withCredentials: true
        }).then(res => {
            let { login } = res.data.data
            console.log(login)
            this.setState({ vipLogin:login,isFinished:true })
        })
    }
    render(){
        if(this.state.vipLogin){
            if(this.state.isFinished){
                return (
                    <div>Vip</div>
                )
            }else{
                return(
                    <div>正在加载中</div>
                )
            }
          
        }else{
            return(
                <div>
                    <Redirect to='/' />
                </div>
            )
        }
    }

}


export default Vip