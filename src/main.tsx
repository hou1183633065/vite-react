import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import App from './App'

import '/@/assets/styles/Index.scss'

ReactDOM.render(
  /**React.StrictMode开启严格模式 */
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
)
