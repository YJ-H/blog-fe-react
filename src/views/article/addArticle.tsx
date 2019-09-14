import React, { FunctionComponent, ReactElement, useState } from 'react'
import { Button, message } from 'antd'
import Editor from 'for-editor'
import marked from 'marked'
import http from '../../util/http'
const style = require('./addArticle.module.less')

export const AddArticle: FunctionComponent = (): ReactElement => {
  const [markdown, setMarkdown] = useState('')
  let title: string
  const [articleTitle, setArticleTitle] = useState('')
  const handleChange = (value: string): void => {
    setMarkdown(value)
    // console.log(articleValue)
  }
  const titleChange = (event: any) => {
    setArticleTitle(event.target.value)
  }

  const subArticle = async () => {
    try {
      let { data } = await http.put('/api/article/addArticle',
        {
          markdown: markdown,
          html: marked(markdown),
          title: articleTitle
        })
      if (data.code === 0) {
        message.success('提交成功')
        location.replace('/article/list')
      } else {
        message.warning('提交失败')
      }
    } catch (error) {
      message.error('错误，请重试！')
    }
  }
  return (
    <div className={style.page}>
      <div className={style.menus}>
        <input type="text" value={articleTitle} onChange={titleChange} placeholder="输入文章标题..." className={style['title-input']}></input>
        <Button size="large" type="primary" className={style.writeButton} onClick={subArticle}>保存</Button>
      </div>
      <div className={style.editor}>
        <Editor preview subfield value={markdown} onChange={handleChange}/>
      </div>
    </div>
  )
}
