import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './index.css'
import MyHeader from './components/MyHeader/'

const { Header, Footer, Content } = Layout;


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <MyHeader />
          </Header>
          <Content className="content">Content</Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

