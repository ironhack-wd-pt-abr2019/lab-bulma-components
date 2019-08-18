'use strict';

import React from "react";
import FormField from "./FormField";
import ButtonGeneral from "./ButtonGeneral";
import Msgbox from "./Msgbox";

/**
 * Created by David on 15/08/2019.
 */

class Form extends React.Component {
	render() {

		const elementoTexto = <div>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			<strong>Pellentesque risus mi</strong>

			<ul>
				<li>1</li>
			</ul>
		</div>;

		const listaParrafos=[
			<p>primero</p>,
			<p>segundo</p>,
			<h3>un tercero h</h3>
		];

		return <div>

			<FormField textoLabel="Nombre" placeholder="e.g Alex Smith"/>
			<FormField textoLabel="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>

			<ButtonGeneral texto="El boton 1" tipo="1"/>
			<ButtonGeneral texto="El boton 2" tipo="2"/>

			<Msgbox titulo="Hello World"
							lista={listaParrafos}
							body={elementoTexto}
			/>


		</div>
	}
}

export default Form;
