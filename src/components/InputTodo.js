import React from "react";

class InputTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {title: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value });
	}
	handleSubmit = (event) => {
		this.props.addTodoProps(this.state.title);
		this.setState({ title: "" });
		event.preventDefault();
	}
	render = () => {
		return (
			<form className="form-inline" onSubmit={this.handleSubmit}>
				<div className="form-row">
					<div className="form-group col-auto">
						<input className="form-control" name="title" type="text" value={this.state.title} onChange={this.handleChange} placeholder="Element à ajouter"/>
					</div>
					<div className="form-group col-auto">
						<button className="btn btn-primary mb-2" type="submit">Ajouter</button>
					</div>
				</div>
			</form>
		);
	}
}

export default InputTodo