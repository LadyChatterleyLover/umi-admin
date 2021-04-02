import React from 'react'
import { Layout, Dropdown, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FontColorsOutlined
} from '@ant-design/icons'
import {setLocale } from 'umi'

const { Header } = Layout

interface Props {
  collapsed: boolean,
  toggle: () => void
}

const NavHeader = (props: Props) => {
  let clickMenu = (item: any) => {
    console.log(item.key)
    setLocale(item.key, false)
  }
  const menu = (
    <Menu onClick={clickMenu}>
      <Menu.Item key="zh-CN">
        中文
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='en-US'>
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
        <div className='c-p'>
          <FontColorsOutlined />
        </div>
      </Dropdown>
      </div>
    </Header>

  )
}

export default NavHeader
