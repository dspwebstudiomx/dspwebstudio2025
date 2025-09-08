import React from "react";
import "../../app.css";

type TitleH2Props = {
	title: string;
	colorClass?: string; // Permite pasar una clase de color opcional
};

const TitleH2 = ({ title, colorClass }: TitleH2Props) => {
	return (
		<h2
			className={`audiowide-regular text-4xl lg:text-4xl text-center sm:text-left mb-12 ${colorClass ? colorClass : "text-primary"}`}>
			{title}
		</h2>
	);
};

export default TitleH2;
