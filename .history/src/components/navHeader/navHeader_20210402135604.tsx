import React from 'react'
import { Layout } from 'antd'
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
  return (
    <div className='flex a-center a-between'>
      <Header className='w100' style={{ padding: '0 20px', background: '#fff' }}>
        {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          onClick: props.toggle,
        })}
      </Header>
    </div>
  )
}

export default NavHeader
