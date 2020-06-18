import React from "react"

class TodoItem extends React.Component {
	render = () => {
		//console.log(this.props);
		return (
			<React.Fragment>
				<li className="list-group-item" key={this.key}>
					<input className="form-check-input" type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
					{this.props.todo.title}
					<div className="text-right">
						<button onClick={() => this.props.deleteTodoProps(this.props.todo.id)} className="btn btn-primary">Supprimer</button>
					</div>
				</li>
			</React.Fragment>
		);
	}
}

export default TodoItem
