import React from 'react'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'

const NavSide = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        表单
    </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        表格
    </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        进度条
    </Menu.Item>
    </Menu>
  )
}

export default NavSide
