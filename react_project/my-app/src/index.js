import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './index.css'
import MyHeader from './components/MyHeader/'
import Login from './components/Login/'

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import List from './containers/List/'
import Detail from './containers/Detail/'
import Vip from './containers/Vip/'


const { Header, Footer, Content } = Layout;


class App extends Component {
  render() {
    return (
      <div>           
        <BrowserRouter>
            <Layout>
              <Header className="header">
                <MyHeader />
              </Header>
              <Content className="content">
                <Login />
                <Switch>
                  <Route path="/detail/:id" component={Detail}></Route>
                  <Route path="/vip" component={Vip}></Route>
                  <Route path="/:id?" component={List}></Route>
                </Switch>
              </Content>
              <Footer className="footer">Footer</Footer>
            </Layout>
      </BrowserRouter>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

