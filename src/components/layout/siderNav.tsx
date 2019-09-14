import React, { ReactElement, FunctionComponent } from 'react'
import CustomMenu from './customMenu'

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}
const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '文章',
    icon: 'laptop',
    key: 'article',
    subs: [
      { key: '/article/list', title: '列表', icon: '' },
      { key: '/article/addArticle', title: '写文章', icon: '' }
      // { key: '/home/general/icon', title: '图标', icon: '' }
    ]
  }
]

const SiderNav: FunctionComponent = (): ReactElement => {
  // const [collapsed, setCollapsed] = useState(false)

  // const toggleCollapsed = () => {
  //   setCollapsed(!!collapsed)
  // }
  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      <div style={styles.logo}></div>
      <CustomMenu menus={menus}></CustomMenu>
    </div>
  )
}

export default SiderNav
