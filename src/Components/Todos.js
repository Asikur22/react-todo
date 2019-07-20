import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
	render() {
		let { todos, eventHandler: { removeTodo, markComplete } } = this.props;
		let sortedTodos = todos.sort(function(a, b) {
			return new Date(b.time) - new Date(a.time);
		});
		let todo = sortedTodos.map((todo) => {
			return <Todo key={todo.id} todo={todo} eventHandler={{ markComplete, removeTodo }} />;
		});

		return <div className="Todos row">{todo}</div>;
	}
}

export default Todos;
