import React from "react";
// component file
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
	state = {
		todos: [
			{
				id: uuidv4(),
				title: "Mettre en place l'environement de développement",
				completed: true
			},
			{
				id: uuidv4(),
				title: "Développer le site web et ajouter les composants",
				completed: false
			},
			{
				id: uuidv4(),
				title: "Deployer le site sur le serveur de production",
				completed: false
			}
		]
	};

	handleChange = (id) => {
		this.setState({todos: this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		})});
	};

	delTodo = (id) => {
		this.setState({ todos: [ ...this.state.todos.filter(todo => {
			return todo.id !== id;
		})]});
	};

	addTodoItem = (title) => {
		const newTodo = { id: uuidv4(), title: title, completed: false};
		this.setState({ todos: [...this.state.todos, newTodo]});
	};

	render = () => {
		return (
			<React.Fragment>
				<Header />
				<div className="clear"></div>
				<div className="container">
					<InputTodo addTodoProps={this.addTodoItem} />
					<div className="clear"></div>
					<ul className="list-group">
						<TodoList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo} />
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default TodoContainer