import React from 'react'

const DisplayTodos = ({todos, toggleDone, removeTodo}) => {
	return (
		<div>
			{todos.map((todo, i) => {
				return (
					<div key={i} className="flexCenter">
						<p onClick={() => {removeTodo(todo)}}>
							<span style={todo.completed ? {color: 'red', textDecoration: 'line-through'} : null}>
								{todo.task}
							</span>
						</p>
						<input type="checkbox" onClick={() => {toggleDone(todo)}} />
					</div>
				)
			})}
		</div>
	)
}

class ToDoList extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: [],
			input: ''
		}
	}

	handleText = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	addTodo = (e) => {
		e.preventDefault()
		const {input, todos} = this.state
		let todo = {task: input, completed: false}
		this.setState({
			todos: [...todos, todo],
			input: ''
		})
	}

	toggleDone = (todo) => {
		const {todos} = this.state
		let changedTodos = todos.map(t => {
			if (todo.task === t.task){
				t.completed = !t.completed
			}
			return t
		})
		this.setState({todos: changedTodos})
	}

	removeTodo = (todo) => {
		const {todos} = this.state
		let changedTodos = todos.filter(t => {return t.task !== todo.task})
		this.setState({todos: changedTodos})
	}

	render (){

		const {todos, input} = this.state

		return (
			<div>
				<form onSubmit={this.addTodo}>
					<input
						name="input"
						value={input}
						autoComplete="off"
						onChange={this.handleText}
					 />
				 </form>

				 <DisplayTodos todos={todos} toggleDone={this.toggleDone} removeTodo={this.removeTodo}/>

			</div>
		)
	}
}

export default ToDoList