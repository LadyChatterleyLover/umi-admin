import React from 'react'
import { Layout, Dropdown, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

const { Header } = Layout

interface Props {
  collapsed: boolean,
  toggle: () => void
}

const NavHeader = (props: Props) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        中文
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        英文
      </Menu.Item>
    </Menu>
  )
  return (
    <Header className='flex a-center a-between' style={{ padding: '0 20px', background: '#fff' }}>
      <div>
        {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          onClick: props.toggle,
        })}
      </div>
      <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <div style={{ color: 'red' }}>设置语言</div>
      </Dropdown>
      </div>
    </Header>

  )
}

export default NavHeader
