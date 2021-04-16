import React from 'react';
import {applyMiddleware} from 'redux'

class App extends React.Component{
    render(){
        console.log(applyMiddleware)
        return (
            <div>
                <h1>My React BoilerPlate</h1>
            </div>
        )
    }
}
export default App;