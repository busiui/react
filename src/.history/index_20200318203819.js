import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
    <div className="App">
        <App></App>
        {/* <h1>antd version: {version}</h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
            Primary Button
    </Button> */}
    </div>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
