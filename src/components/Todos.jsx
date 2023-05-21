import React, { Fragment, useState } from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid'

const Todos = () => {
    const [todoState, setTodoState] = useState([])

    const markComplete = id => {
        const newTodos = todoState.map(todo => {
            if (todo.id == id) {
                todo.completed = !todo.completed
            }
            return todo
        })

        setTodoState(newTodos)
    }

    const deleteToDo = id => {
        // const newTodos = todoState.filter(todo => {
        //     return todo.id !== id
        // })
        const newTodos = todoState.filter(todo => todo.id !== id)
        setTodoState(newTodos)
    }

    const addTodo = title => {
        const newTodos = [...todoState, {
            id: uuidv4(),
            title,
            completed: false
        }]
        setTodoState(newTodos)
    }

    // Method 1:
    // const todoList = []
    // for (let todo of todoState) {
    //     todoList.push(<p>{todo}</p>)
    // }
    // return (
    //     <div>
    //         {todoList}
    //     </div>
    // )

    // Method 2
    return (
        <Fragment>
            <AddTodo addTodoFunc={addTodo} />
            {todoState.map(todo => {
                return (
                    <TodoItem key={todo.id}
                        todoProps={todo}
                        markCompleteFunc={markComplete}
                        deleteTodoFunc={deleteToDo}
                    />
                )
            })}
        </Fragment>
    )
}

export default Todos