import React, { Component } from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Form from './Components/Form';
import uuid from 'uuid';
import './bootstrap.min.css';
import './App.scss';

class App extends Component {
	state = {
		todos : [
			{
				id        : uuid.v4(),
				title     : 'Have to go to bazar',
				completed : false,
				time      : 'Thu Jan 01 2019 06:30:02'
			},
			{
				id        : uuid.v4(),
				title     : 'will call to mother',
				completed : false,
				time      : 'Sat Jul 20 2019 05:50:02'
			},
			{
				id        : uuid.v4(),
				title     : 'Need to clean home',
				completed : true,
				time      : 'Thu Jul 18 2019 09:00:02'
			},
			{
				id        : uuid.v4(),
				title     : 'Have to coock food',
				completed : false,
				time      : 'Sat Jul 20 2019 18:50:02'
			},
			{
				id        : uuid.v4(),
				title     : 'Create a new React App',
				completed : false,
				time      : 'Sat Jul 20 2019 21:50:02'
			}
		]
	};

	markComplete = (id) => {
		this.setState({
			todos : this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}

				return todo;
			})
		});
	};

	removeTodo = (id) => {
		this.setState({
			todos : [ ...this.state.todos.filter((todo) => todo.id !== id) ]
		});
	};

	addTodo = (title) => {
		const newTodo = {
			id        : uuid.v4(),
			title,
			completed : false,
			time      : new Date()
		};
		this.setState({
			todos : [ ...this.state.todos, newTodo ]
		});
	};

	render() {
		let { markComplete, removeTodo } = this;
		return (
			<div className="App mt-5">
				<div className="container">
					<Header />
					<Form addTodo={this.addTodo} />
					<Todos todos={this.state.todos} eventHandler={{ markComplete, removeTodo }} />
				</div>
			</div>
		);
	}
}

export default App;
