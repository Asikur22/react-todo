import React, { Component } from 'react';

export class Form extends Component {
	state = {
		title : ''
	};

	handleOnChange = (e) => this.setState({ title: e.target.value });
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.title !== '') {
			this.props.addTodo(this.state.title);
			this.setState({ title: '' });
		} else {
			alert('Plz Add Title!');
		}
	};

	render() {
		return (
			<form className="form-inline justify-content-center mb-4" onSubmit={this.handleSubmit}>
				<div className="form-group mx-3 w-50">
					<label htmlFor="title" className="mr-2">
						Add New Todo
					</label>
					<input
						type="text"
						id="title"
						className="form-control col"
						name="title"
						placeholder="Todo Title"
						value={this.state.title}
						onChange={this.handleOnChange}
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Add Todo" />
			</form>
		);
	}
}

export default Form;
