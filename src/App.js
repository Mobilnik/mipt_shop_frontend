import React from 'react';
import MyApp from './components/MyApp.js'

const App = (props) =>  {
    return (
        <div>
            <MyApp state = {props.state}/>
        </div>
    )
}

export default App