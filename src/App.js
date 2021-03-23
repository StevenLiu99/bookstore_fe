import React from 'react';
import { Button } from 'antd';
import './App.css';
import {SiderDemo} from "./components/siderDemo";
import {HomePage} from "./view/HomePage";
import BasicRoute from "./Router";

class App extends React.Component {

    render() {
        return (
            <BasicRoute/>
        );
    }
}

export default App;