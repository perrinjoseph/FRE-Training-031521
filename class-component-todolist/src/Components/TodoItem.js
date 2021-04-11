import React, { Component } from 'react'
import PropType from 'prop-types'

class TodoItem extends Component {
    getItemStyle(){
        return {
            background: '#f4f4f4',
            borderBottom: "1px dotted lightgray",
            padding: "10px",
            textDecoration: this.props.todo.completed? "line-through":"none",
            display: "flex",
            justifyContent: "space-between",
        }
    }

    getButtonStyle (){
        return {
            height: "30px",
            width: "30px",
            outline: "none",
            border:"none",
            background: "rgb(228,90,99)",
            color:"white", 
            borderRadius:'100%',
            cursor:"pointer",
            fontWeight:"bolder",
            boxShadow: "0px 5px 10px rgba(228,90,99,0.8)",
            textDecoration:"none",
        }
    }


    render() {
        return (
            <div style={this.getItemStyle()}>
                    <div>
                        <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo)} checked={this.props.todo.completed===true?true:false}/>{' '}
                        <span>{this.props.todo.title}</span>
                    </div>
                    <button style={this.getButtonStyle()} onClick={this.props.deleteTodo.bind(this,this.props.todo)}>X</button>
            </div>
        )
    }
}

//PROP TYPES
TodoItem.PropType = {
    todo: PropType.object.isRequired
}

export default TodoItem;