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
    <div className='flex a-center a-between'>
      <Header className='w100' style={{ padding: '0 20px', background: '#fff' }}>
        {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          onClick: props.toggle,
        })}
      </Header>
      <div>
        <Dropdown overlay={menu} trigger={['click']}>
          <div style={{color: 'red'}}>设置语言</div>
        </Dropdown>,
      </div>
    </div>
  )
}

export default NavHeader
