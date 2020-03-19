import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <user-card></user-card>
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
        </div>
        <div class="btn-group" role="group" aria-label="...">
          <button type="button" class="btn btn-default add" >add</button>
          <button type="button" class="btn btn-default update">update</button>
          <button type="button" class="btn btn-default Remove">Remove</button>
        </div>
        {/* <Link  to="/home"/> */}
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    console.log(this.messageListRef.scrollTop) // 0
    this.messageListRef.scrollTop = 100
    console.log(this.messageListRef.scrollTop) // 0
  }
}

export default App;
