import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

interface MenuParams {
  key: string;
  icon: string;
  title: string;
  subs?: any[];
}
interface Iprops {
  menus: MenuParams[];
}

const CustomMenua = (props: Iprops) => {
  const renderMenuItem = ({ key, icon, title }: MenuParams) => {
    const toLink = function (): void {}
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          <div onClick={toLink}>
            {icon && <Icon type={icon} />}
            <span>{title}</span>
          </div>
        </Link>
      </Menu.Item>
    )
  }

  const renderSubMenu = ({ key, icon, title, subs }: MenuParams) => {
    return (
      <Menu.SubMenu
        key={key}
        title={
          <span>
            {icon && <Icon type={icon} />}
            <span>{title}</span>
          </span>
        }
      >
        {subs &&
          subs.map(item => {
            return item.subs && item.subs.length > 0
              ? renderSubMenu(item)
              : renderMenuItem(item)
          })}
      </Menu.SubMenu>
    )
  }
  return (
    <Menu theme={'dark'} mode='inline'>
      {props.menus &&
        props.menus.map(item => {
          return item.subs && item.subs.length > 0
            ? renderSubMenu(item)
            : renderMenuItem(item)
        })}
    </Menu>
  )
}

export default CustomMenua
