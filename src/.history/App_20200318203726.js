import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="btn-group" role="group" aria-label="...">
          <button type="button" class="btn btn-default add" >add</button>
          <button type="button" class="btn btn-default update">update</button>
          <button type="button" class="btn btn-default remove">Remove</button>
        </div>
        {/* <Link  to="/home"/> */}
      </div>
    );
  }

  componentDidMount() {
    //页面渲染结束后初始化busiUI框架
    if (typeof window['busiUiInit'] === 'function') {
      window['busiUiInit']();
    }
  }
}

export default App;
