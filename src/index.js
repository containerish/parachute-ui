import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
// import './styles/antd.less'
import './styles/lightTheme/light-theme.css';
import './index.css';
import LandingPage from "./pages/landing_page";
import Dashboard from "./pages/dashboard";
import {ParachuteUIRouter} from "./router/router";

ReactDOM.render(<ParachuteUIRouter />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
