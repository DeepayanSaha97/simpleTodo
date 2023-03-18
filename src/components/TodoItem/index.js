import './index.css'

const TodoItem = props => {
  const {eachItem, onRemoveTodo} = props
  const {title, id} = eachItem

  const onClickBtn = () => {
    onRemoveTodo(id)
  }

  return (
    <li className="todos-list">
      <p className="todos-title">{title}</p>
      <button className="button" type="button" onClick={onClickBtn}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
