'use strict';

import React from "react";

/**
 * Created by David on 15/08/2019.
 */

class ButtonGeneral extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const p = this.props;

		let textoClass = p.tipo === "1" ?"button is-rounded my-class is-danger is-small":"button is-small is-succes";

		return <button className={textoClass}>{p.texto}</button>
	}
}

export default ButtonGeneral;
