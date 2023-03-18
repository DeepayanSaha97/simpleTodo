import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = uniqueId => {
    const {todosList} = this.state
    const newTodosList = todosList.filter(each => each.id !== uniqueId)
    this.setState({todosList: newTodosList})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="bg-container">
        <div className="todos-card-con">
          <h1 className="main-heading">Simple Todos</h1>
          <div className="todos-list-bg">
            <ul className="todos-list-con">
              {todosList.map(eachTodo => (
                <TodoItem
                  eachItem={eachTodo}
                  onRemoveTodo={this.deleteTodo()}
                  key={eachTodo.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
