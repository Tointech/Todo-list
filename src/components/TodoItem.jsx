import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = props => {
    const todo = props.todoProps
    const markComplete = props.markCompleteFunc
    const deleteTodo = props.deleteTodoFunc

    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through' : 'none'
    }

    const checkboxStyle = {
        float: 'left'
    }

    const deleteButtonStyle = {
        transition: 'box-shadow .3s',
        background: '#f25252',
        color: '#fff',
        fontSize: '70%',
        border: 'none',
        padding: '5px 9px',
        cursor: 'pointer',
        float: 'right'
    }

    return (
        <p style={todoItemStyle}>
            <input
                type="checkbox"
                style={checkboxStyle}
                onChange={markComplete.bind(this, todo.id)}
                checked={todo.completed}
            />
            {todo.title}
            <button
                style={deleteButtonStyle}
                onClick={deleteTodo.bind(this, todo.id)}
            >
                Delete
            </button>
        </p>
    )
}

// PropTypes
TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markCompleteFunc: PropTypes.func.isRequired,
    deleteTodoFunc: PropTypes.func.isRequired
}

export default TodoItem