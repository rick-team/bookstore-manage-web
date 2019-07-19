import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import moment from 'moment';

import zhCN from 'antd/es/locale-provider/zh_CN'
import 'moment/locale/zh-cn'
import './assets/style/index.sass'

moment.locale('zh-cn');

ReactDom.render(<App />, document.getElementById('root'))