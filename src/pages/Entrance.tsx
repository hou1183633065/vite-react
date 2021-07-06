import '/@/assets/styles/App.scss'
import React, { useState, Suspense } from 'react'
import { Route, Switch,Link } from "react-router-dom";

import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { BugFilled } from "@ant-design/icons";
import Home from "./Home";
import About from "./About";
import HelloMessage from '/@/components/HelloMessage';
const { Header, Content, Sider } = Layout
var cached = {};
const createFetcher = (promiseTask: { (): Promise<unknown>; (): any; }) => {
    let ref = cached;
    return () => {
        const task = promiseTask();
        task.then((res: any) => {
            ref = res
        });
        if (ref === cached) {
            throw task
        }
        return ref
    }
}
  function fetchSometingApi() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('加载完毕，这是你要的一段数据')
      }, 2000);
    })
  }
  const getData = createFetcher(fetchSometingApi)
  function Fangzhen() {
    return <h1>{getData()}!</h1>
  }
function SwitchRoutes() {

  const routes: any[] = [
    {
      path: '/home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/about',
      meta: {
        title: '关于'
      },
      component: About
    },
    {
      path: '/suspense',
      meta: {
        title: 'Suspense'
      },
      component: Fangzhen
    },
  ]

  return (
    <Suspense fallback={<div>loading...</div>}>
      {
        routes.map((item, index) => {
          return <Route key={index} path={ item.path } component={ item.component}></Route>
        })
      }
    </Suspense>
  )
}
function topMenu() {
  let routes: any[] = [
    {
      path: '/home',
      meta: {
        title: '首页'
      },
      component: ()=> import('/@/pages/Home')
    },
    {
      path: '/about',
      meta: {
        title: '关于'
      },
      component: ()=> import('/@/pages/About')
    },
  ]
  return routes.map((item, index) => {
    return <Menu.Item key={index} icon={ <BugFilled />}>nav { item.name}</Menu.Item>
  })
}
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
            <Breadcrumb.Item>
            <Link to="/home">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <Link to="/about">About</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
            <Link to="/suspense">Suspense</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Details</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            <HelloMessage></HelloMessage>
            <SwitchRoutes></SwitchRoutes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
