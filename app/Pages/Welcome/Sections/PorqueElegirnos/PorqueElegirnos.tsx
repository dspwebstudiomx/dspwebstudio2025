import React from "react";
import TitleH2 from "~/components/Titles/TitleH2";
import { beneficios } from "../../Data";
import Container from "~/components/Container";
import Section from "../Section";

type Props = {};

const PorqueElegirnos = (props: Props) => {
	return (
		<Section id="porque-elegirnos" background="" aditionalClasses="">
			<TitleH2 title="¿Por qué elegirnos?" colorClass="text-red-light" />
			<ul className="list-disc pl-5 mt-4">
				{beneficios.map((b, i) => (
					<li key={i}>{b}</li>
				))}
			</ul>
		</Section>
	);
};

export default PorqueElegirnos;
