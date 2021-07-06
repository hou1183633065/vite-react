import './assets/styles/App.scss'
import React, { useState } from 'react'
// import { Router, Rout } from 'react-router'
import { Router, Route } from "react-router-dom";

import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { BugFilled } from "@ant-design/icons";

import HelloMessage from './components/HelloMessage';
const { Header, Content, Sider } = Layout
export default () => {
  const [collapsed, updateCollapse] = useState(false)

  return (
    <Layout className="main-container">

      <Header>
        {/* <div className="logo">this is logo</div> */}
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['0']}>
          {
            Array.apply(null, { length: 15 } as any).map((_, index) => {
              return <Menu.Item key={index} icon={ <BugFilled />}>nav { index}</Menu.Item>
            })
          }
        </Menu>
      </Header>

      <Layout>
        <Sider width={250} collapsible collapsed={collapsed} trigger={null}>
          <Menu mode='inline' defaultSelectedKeys={['0']}>
            {
              Array.apply(null, { length: 15 } as any).map((_, index) => {
                return <Menu.Item key={index} icon={ <BugFilled />}>nav { index}</Menu.Item>
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Button type="primary" onClick={ ()=>updateCollapse(collapsed=>collapsed=!collapsed)}>{ collapsed?'展开':'收起'}</Button>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Index</Breadcrumb.Item>
            <Breadcrumb.Item>Details</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            <HelloMessage></HelloMessage>
            {/* <Router>
              <Route path="/home" component={ ()=>import('./pages/Home')}></Route>
              <Route path="/about" component={ ()=>import('./pages/About')}></Route>
            </Router> */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
