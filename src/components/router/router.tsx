import React, { lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { routeMap, RouterMapModel } from './routeMap'
import { AppLayout } from './../layout/AppLayout'
const Router = (props: any): React.ReactElement => {
  const { location } = props
  const { pathname } = location
  const targetRoute = routeMap.find((v: any) => v.path === pathname)
  return (
    <div style={ { 'height': '100%' } }>
      {
        routeMap.map((item: RouterMapModel, index) => {
          const DynamicComponent = item.component
          return (
            <Route exact key={ index } path={ item.path }
              render={ (props) => (
                  <Suspense fallback={<div>loading...</div>}>
                    { item.noLoyout ? <DynamicComponent { ...props }/> : (<AppLayout>{ <DynamicComponent { ...props }/> }</AppLayout>) }
                  </Suspense>
                )
              }
            />
          )
        })
      }
    </div>
  )

  // if (targetRoute) {
  //   const { component } = targetRoute
  //   let RouteDOM = <Route exact path={pathname} component={component} />
  //   return targetRoute.noLoyout ? (
  //     RouteDOM
  //   ) : (
  //     <AppLayout>
  //       {RouteDOM}
  //     </AppLayout>
  //   )
  // }
  // 当上面条件全没有命中的时候返回404页面
  // return <Redirect to='/404' />
}
export default Router
