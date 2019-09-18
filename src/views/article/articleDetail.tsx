import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react'
import { Card, message } from 'antd'
import http from '../../util/http'
import marked from '../../util/marked/marked'

const style = require('./articleDetail.module.less')

const ArticleDetail: FunctionComponent = (props: any): ReactElement => {
  const { match } = props
  let [article, setArticle] = useState({
    html: '',
    markdown: ''
  })
  const getArticleDetail: Function = async () => {
    try {
      let { data } = await http.get('/api/article/articleById/' + match.params.id)
      if (data.code === 0) {
        setArticle(data.data)
      } else {
        message.warning(data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getArticleDetail()
  }, [])
  return (
    <div className={style.page}>
      <Card bordered={false} className={style.articleBody + ' for-container'} bodyStyle={ { 'padding': '10p 240px' } }>
        <div
          className="for-preview for-markdown-preview"
          dangerouslySetInnerHTML={{ __html: marked(article.markdown) }}
        />
      </Card>
    </div>
  )
}

export default ArticleDetail
