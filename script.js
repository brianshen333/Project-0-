import React from 'react';
import { render } from 'react-dom';


const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}
const Todo = props => (
	<li>
	<input type="checkbox" onClick={props.onToggle}/>
	<button onClick = {props.onDelete}>delete</button>
	<span>{props.text}</span>
	</li>
)
var id = 0;

class App extends React.Component {
	constructor(){
		super()
		this.setState = {
		 todos: [],
		}
	}
	addTodo() {
		const text = prompt("TODO text please!")
		this.setState({
		todos: [...this.state.todos, {id: id++,text: text},
		],
		})
	}
	
	removeTodo(id) {
	this.setState({
		todos: this.state.todos.filter(todo => todo.id != id)
		})
	}
	toggleTodo(id) {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id !== id) return todo 
				return {
					id:todo.id, 
					text:todo.text,
					checked: !todo.checked,
				}
			})
		})
	}
	render(){
	  <div class="container center">
      <h1 class="center title">My TODO App</h1>
      <div class="flow-right controls">
        <span>Item count: <span id="item-count">{this.state.todos.length}</span></span>
        <span>Unchecked count: <span id="unchecked-count">{this.state.todos.filter(todo => !todo.checked).length)}</span></span>
      </div>
	<button class="button center" onClick={() =>this.addTodo()}>New TODO</button>
      <ul id="todo-list" class="todo-list">
	  {this.state.todos.map(todo => <Todo onDelete={() => this.removeTodo(todo.id)}
		onToggle={() => this.toggleTodo(todo.id)}
		todo={todo}/>}
	  </ul>
    </div>
	}
}



const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  alert('New TODO button clicked!')
}

render(<App />, document.getElementById('root'))
