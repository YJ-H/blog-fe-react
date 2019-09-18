import React, { FunctionComponent, ReactElement, useEffect } from 'react'

export const HomePage: FunctionComponent = (): ReactElement => {
  useEffect(() => {
    location.replace('/article/addArticle')
  })
  return (
    <div>home page</div>
  )
}
