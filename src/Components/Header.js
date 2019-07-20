import React, { Component } from 'react';

export class Header extends Component {
	render() {
		return (
			<div className="mb-4" style={{ backgroundColor: '#f4f4f4' }}>
				<h1 className="text-center py-3">
					<a className="text-success" href={window.location}>
						My ToDo App
					</a>
				</h1>
			</div>
		);
	}
}

export default Header;
