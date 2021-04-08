import React, { Component } from 'react';

export default class AddTodo extends Component {
    state = {
        title:""
    }

    handelChange= (e)=>{
        e.preventDefault();
        this.setState({
            ...this.state,
            title: e.target.value
        })
    }

    handelAddSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title:""})
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handelAddSubmit}>
                    <input onChange={this.handelChange} value={this.state.title} style={{width:"40%",padding:"10px",margin:"10px 0px"}}type="text" name="title" placeholder="Enter a task..."/>
                    <input style={{marginLeft:"10px"}} type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
