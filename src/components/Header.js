import React, { Component } from "react";

class Header extends Component {
	render = () => {
		return (
			<header className="header">
				 <h1>Bonjour de l'application React</h1>
				 <p>Je suis dans un composant React !</p>
			</header>
		)
	}
}

export default Header