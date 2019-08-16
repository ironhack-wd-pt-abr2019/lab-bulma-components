'use strict';

import * as React from "react";

/**
 * Created by David on 15/08/2019.
 */

class Msgbox extends React.Component {

	constructor(props){
		super(props);
	}

	render(){


		const p =this.props;

		const titulo= p.titulo||"Titulo";
		const body= p.body||"El body";
		const lista= p.lista;

		return <article className="message">
			<div className="message-header">
				<p>{titulo}</p>
				<button className="delete" aria-label="delete"/>
			</div>
			<div className="message-body">
				{body}
				{lista}
			</div>
		</article>
	}
}

export default Msgbox;
