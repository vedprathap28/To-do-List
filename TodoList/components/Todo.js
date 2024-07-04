import '../App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => (
  <div className="Todo">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleComplete(task.id)}
    />
    <p
      className={`task-text ${task.completed ? 'completed' : ''}`}
      onClick={() => toggleComplete(task.id)}
    >
      {task.task}
    </p>
    <div>
      <FontAwesomeIcon
        className="edit-icon"
        icon={faPenToSquare}
        onClick={() => editTodo(task.id)}
      />
      <FontAwesomeIcon
        className="delete-icon"
        icon={faTrash}
        onClick={() => deleteTodo(task.id)}
      />
    </div>
  </div>
)

export default Todo
