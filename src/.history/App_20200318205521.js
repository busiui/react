import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
        <h5 class="card-title">Card title</h5>
          {/* <div class="input-group">
          <span class="input-group-addon">$</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
          <span class="input-group-addon">.00</span>
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Action <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div> */}
          <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default add" >add</button>
            <button type="button" class="btn btn-default update">update</button>
            <button type="button" class="btn btn-default remove">Remove</button>
          </div>
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
