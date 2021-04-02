import React from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

const { Header } = Layout

interface Props {
  collapsed: boolean,
  toggle: () => void
}

const NavHeader = (props: Props) => {
  return (
    <Header style={{ padding: '0 20px', background: '#fff' }}>
        {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: props.toggle,
        })}
      </Header>
  )
}

export default NavHeader
