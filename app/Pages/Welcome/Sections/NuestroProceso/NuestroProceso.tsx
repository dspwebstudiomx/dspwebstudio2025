import React from "react";
import TitleH2 from "~/components/Titles/TitleH2";
import { beneficios, proceso } from "../Servicios/serviciosData";
import Section from "../Section";

type Props = {};

const NuestroProceso = (props: Props) => {
	{
		/* Proceso de trabajo */
	}
	return (
		<Section id="nuestro-proceso" background="" aditionalClasses="">
			<TitleH2 title="Nuestro Proceso" colorClass="text-green-light" />
			<ol className="list-decimal pl-5 mt-4">
				{proceso.map((p, i) => (
					<li key={i}>{p}</li>
				))}
			</ol>
		</Section>
	);
};

export default NuestroProceso;
