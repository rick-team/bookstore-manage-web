import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { LocaleProvider } from 'antd'

import zhCN from 'antd/es/locale-provider/zh_CN'
import './assets/style/index.less'


ReactDom.render((
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>
), document.getElementById('root'))