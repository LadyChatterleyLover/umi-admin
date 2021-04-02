import React from 'react'
import { Layout, Dropdown, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import { setLocale } from 'umi

const { Header } = Layout

interface Props {
  collapsed: boolean,
  toggle: () => void
}

const NavHeader = (props: Props) => {
  let clickMenu = (item: any) => {
    setLocale(item.key, false)
  }
  const menu = (
    <Menu onClick={clickMenu}>
      <Menu.Item key="zh">
        中文
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='en'>
        英文
      </Menu.Item>
    </Menu>
  )
  return (
    <Header className='flex a-center j-between' style={{ padding: '0 20px', background: '#fff' }}>
      <div>
        {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          onClick: props.toggle,
        })}
      </div>
      <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <div className='c-p' style={{ color: 'red' }}>设置语言</div>
      </Dropdown>
      </div>
    </Header>

  )
}

export default NavHeader
