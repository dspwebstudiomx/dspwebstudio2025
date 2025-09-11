import React from "react";
import TitleH2 from "~/components/Titles/TitleH2";
import { beneficios, preguntasFrecuentes, proceso } from "../../Data";
import Section from "../Section";

type Props = {};

const PreguntasFrecuentes = (props: Props) => {
	{
		/* Proceso de trabajo */
	}
	return (
		<Section id="preguntas-frecuentes" background="" aditionalClasses="">
			<TitleH2 title="Preguntas Frecuentes" colorClass="text-purple-light" />
			<ul className="mt-4">
				{preguntasFrecuentes.map((pf, i) => (
					<li key={i} className="mb-4">
						<span className="font-semibold">{pf.pregunta}</span>
						<br />
						<span>{pf.respuesta}</span>
					</li>
				))}
			</ul>
		</Section>
	);
};

export default PreguntasFrecuentes;
