import React, { ReactElement, FunctionComponent } from 'react'
import { Layout } from 'antd'
import SiderNav from './siderNav'
const { Sider, Header, Content, Footer } = Layout

interface Iprops {
  children: ReactElement;
}

export const AppLayout: FunctionComponent<Iprops> = (
  props: Iprops
): ReactElement => {
  return (
    <Layout>
      <Sider collapsible trigger={null} collapsed={false}>
        <SiderNav></SiderNav>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 16px' }}></Header>
        <Content>{props.children}</Content>
        <Footer style={{ textAlign: 'center', padding: 0 }}>
          React-Admin ©2018 Created by a910102423@gmail.com{' '}
        </Footer>
      </Layout>
    </Layout>
  )
}
