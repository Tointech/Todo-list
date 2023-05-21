import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodo = props => {
    const addTodo = props.addTodoFunc
    const [title, setTitle] = useState('')

    const formStyle = {
        display: 'flex'
    }

    const inputStyle = {
        flex: '10',
        padding: '5px',
        border: 'none',
        outline: 'none'
    }

    const submitStyle = {
        flex: '1',
        background: '#999999',
        color: '#fff',
        border: 'none',
        borderRadius: '15%',
        cursor: 'pointer'
    }

    const changeTitle = event => {
        setTitle(event.target.value)
    }

    const addSingleTodo = event => {
        // prevent reload page when submit form
        event.preventDefault()
        if (title !== '') {
            addTodo(title)
            setTitle('')
        }
    }

    return (
        <form style={formStyle} onSubmit={addSingleTodo}>
            <input
                type="text"
                name="title"
                style={inputStyle}
                placeholder='Something here...'
                value={title}
                onChange={changeTitle}
            />
            <input
                type="submit"
                style={submitStyle}
                value="Add"
            />
        </form>
    )
}

AddTodo.protoTypes = {
    addTodoFunc: PropTypes.func.isRequired
}

export default AddTodo