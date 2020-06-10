import React, { Component } from 'react'
import { Card } from 'antd'
import axios from 'axios'
import './index.css'
class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            content:''
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get('http://www.dell-lee.com/react/api/detail.json?id=' + id).then(res=>{
            this.setState(res.data.data)
        })
    }
    render() {
        return (
            <div>
                <Card title={this.state.title} bordered={false}>
                    <div dangerouslySetInnerHTML={{__html:this.state.content}} className="content">
                    </div>
                </Card>
            </div>
        )
    }
}

export default Detail