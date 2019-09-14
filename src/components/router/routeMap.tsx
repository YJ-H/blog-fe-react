import React from 'react'
import Login from '../../views/login'
import errorView404 from '../../views/errorView/errorView404'
import { HomePage } from '../../views/home'
import { AddArticle } from '../../views/article/addArticle'
import ArticleList from '../../views/article/articleList'
import ArticleDetail from '../../views/article/articleDetail'

export interface RouterMapModel {
  path: string;
  component?: any;
  noAuth?: boolean;
  noLoyout?: boolean;
}
export const routeMap: RouterMapModel[] = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/login',
    component: Login,
    noAuth: true,
    noLoyout: true
  },
  {
    path: '/article/list',
    component: ArticleList
  },
  {
    path: '/article/addArticle',
    component: AddArticle
  },
  // 详情页面路径必须放在其他article之后
  {
    path: '/articleDetail/:id',
    component: ArticleDetail
  },
  {
    path: '/404',
    component: errorView404,
    noAuth: true
  }
]
