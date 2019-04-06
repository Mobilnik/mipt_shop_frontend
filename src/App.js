import React, { Component } from 'react';
import MyApp from './components/MyApp.js'

const App = (props) =>  {
    return (
        <div>
            <MyApp goods = {props.goods} orders = {props.orders}/>
        </div>
    )
}

export default App