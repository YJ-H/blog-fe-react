import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react'
import { Card, message } from 'antd'
import http from '../../util/http'
import { Link } from 'react-router-dom'

const style = require('./articleList.module.less')

interface User {
  _id: string;
  name: string;
  uid: string;
}

interface Article {
  markdown: string;
  html: string;
  title: string;
  create_user_id: number;
  user: User;
  created: string;
  updated: string;
  _id: string;
}

const renderArticleItem = (item: Article): ReactElement => {
  return (
    <Link key={item._id} to={'/articleDetail/' + item._id}>
      <Card bordered={false} className={style.articleItem} bodyStyle={ { 'padding': '10p 240px' } }>
          <div>
            <div className={style.metaList}>
              <span className={style.metaItem}>{item.user.name}</span>
              <span className={style.metaItem}>{item.updated}</span>
            </div>
            <h2 className={style.articleTitle}>{item.title}</h2>
          </div>
        </Card>
    </Link>
  )
}

const ArticleList: FunctionComponent = (): ReactElement => {
  const [articleList, setArticleList] = useState([])
  const getArticleList = async () => {
    try {
      let { data } = await http.get(`/api/article/articleList`)
      if (data.code !== 0) return false
      setArticleList(data.data)
    } catch (error) {
      message.error('服务错误')
    }
  }

  useEffect(() => {
    getArticleList()
  }, [])
  return (
    <div className={style.page}>
      <Card bodyStyle={ { 'padding': '1px 0px' } } className={style.body} title="文章列表" bordered={false}>
        {
          articleList.map((res) => {
            return renderArticleItem(res)
          })
        }

      </Card>
    </div>
  )
}

export default ArticleList
