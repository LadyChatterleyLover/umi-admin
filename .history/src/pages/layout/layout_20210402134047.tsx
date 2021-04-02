import React, {useState} from 'react'
import { Layout, Menu } from 'antd'

import NavHeader from '@/components/navHeader/navHeader'
import NavSide from '@/components/navSide/navSide'

const { Header, Sider, Content } = Layout

export interface Props {
  children: React.ReactNode
}

const Layouts = (props: Props) => {
  let [collapsed, setCollapsed] = useState<boolean>(false)
  let toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <NavSide></NavSide>
    </Sider>
    <Layout className="site-layout">
      <NavHeader collapsed={collapsed} toggle={toggle}></NavHeader>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        {props.children}
      </Content>
    </Layout>
  </Layout>
  )
}

export default Layouts
