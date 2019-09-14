import * as React from 'react'
import 'antd/dist/antd.css'
import './style/index.less'
import { BrowserRouter, Switch } from 'react-router-dom'
import Router from './components/router/router'

const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Router></Router>
      </Switch>
    </BrowserRouter>
  )
}

export default App
