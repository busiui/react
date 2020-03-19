import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap';

class App extends Component {
  render() {
    return (
      <div className="card">
        <custom-square></custom-square>
      </div>
    );
  }

  // componentDidMount() {
  //   //页面渲染结束后初始化busiUI框架
  //   if (typeof window['busiUiInit'] === 'function') {
  //     const card = document.querySelector('.card');
  //     window['busiUiInit'](card);
  //   }
  // }
}

export default App;
