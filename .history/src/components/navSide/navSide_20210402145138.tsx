import React from 'react'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import {  Menu } from 'antd'
import { useIntl } from 'umi'

const NavSide = () => {
  const intl = useIntl()
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        {
          intl.formatMessage({
            id: 'form'
          })
        }
    </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        table
    </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        progress
    </Menu.Item>
    </Menu>
  )
}

export default NavSide
