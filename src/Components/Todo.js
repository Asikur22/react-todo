import React from 'react';
import TimeAgo from 'react-timeago';

class Todo extends React.Component {
	render() {
		let { eventHandler: { removeTodo, markComplete }, todo: { id, title, completed, time } } = this.props;
		return (
			<div className="col-4 mb-4">
				<div className="card Todo" id="todo-{id}">
					<div className="card-body">
						<button type="button" className="close" onClick={removeTodo.bind(this, id)}>
							<span aria-hidden="true">&times;</span>
						</button>
						<h5 className="card-title">{title}</h5>
						<p className="card-text">
							<small className="text-muted">
								Created <TimeAgo date={time} />
							</small>
						</p>
						<button
							className="card-link"
							onClick={markComplete.bind(this, id)}
							disabled={completed ? 'disabled' : ''}
						>
							Mark as Completed
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Todo;
