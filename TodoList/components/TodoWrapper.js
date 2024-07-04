import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm'

const TodoWrapper = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || []
  const [todos, setTodos] = useState(initialTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = task => {
    setTodos([
      ...todos,
      {id: uuidv4(), task, completed: false, isEditing: false},
    ])
  }

  const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id))

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    )
  }

  const toggleEditTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo,
      ),
    )
  }

  const updateTask = (task, id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo,
      ),
    )
  }

  return (
    <div className="TodoWrapper">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={updateTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={toggleEditTodo}
            toggleComplete={toggleComplete}
          />
        ),
      )}
    </div>
  )
}

export default TodoWrapper
