import React, { FunctionComponent, ReactElement, useEffect } from 'react'

export const HomePage: FunctionComponent = (): ReactElement => {
  useEffect(() => {
    location.replace('/user')
  })
  return (
    <div>home page</div>
  )
}
