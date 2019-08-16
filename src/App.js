import React from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";


class App extends React.Component {
	render = () => {

		return (
			<div className="App">


			 <NavBar/>

			 <Form/>

			</div>
		);
	}
}

export default App;
