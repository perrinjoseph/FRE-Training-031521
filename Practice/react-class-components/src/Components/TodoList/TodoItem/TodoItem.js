import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {todo} = this.props;
        return (
            <>
                <li>
                    <span>{todo.title}</span>
                    <button>X</button>
                </li>
            </>
        )
    }
}
