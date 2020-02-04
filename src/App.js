import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Text(props) {
	return <span style={{ color: props.color }}>{props.value}</span>;
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hello, <Text color="green" value="Kenneth" />
				</p>
			</header>
		</div>
	);
}

export default App;
