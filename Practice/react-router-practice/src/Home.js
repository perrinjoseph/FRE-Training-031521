import React, { Component, useState } from 'react'

class CounterClass extends React.Component{
    state= {
        counter:0
    }
    render(){
        return(
            <div>
                <h1>Class Component Counter</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.setState({counter:this.state.counter +1})} >Increment + </button>
                <button onClick={()=>setTimeout(()=>alert(this.state.counter),1000)}>Add Async</button>
            </div>
        )
    }
}
var c;
function CounterFunction (){
    const [counter,setCounter] = useState(0);
    c= counter;

    return(
        <div>
            <h1>Function Component Counter</h1>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter +1)}>Increment +</button>
            <button onClick={()=>setTimeout(()=>{
                    console.log(c);alert(c)
                },1000)}>Add Async</button>
        </div>
    )
}

export default class Home extends Component {
    render() {
        return (
            <div>
                <CounterClass/>
                <CounterFunction/>
            </div>
        )
    }
}


