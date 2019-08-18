'use strict';


import React from "react";

/**
 * Created by David on 15/08/2019.
 */

class FormField extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const p = this.props;

		let type = p.type || "text";

		return <div className="field">

			<label className="label">{p.textoLabel}</label>
			<div className="control">
				<input className="input" type={type}
							 placeholder={p.placeholder}/>
			</div>

		</div>

	}
}

export default FormField
