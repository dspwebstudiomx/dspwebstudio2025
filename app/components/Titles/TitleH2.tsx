import React from "react";

type TitleH2Props = {
	title: string;
};

const TitleH2 = ({ title }: TitleH2Props) => {
	return (
		<h2 className="text-4xl lg:text-4xl text-center sm:text-left mb-12 text-blue-800">
			{title}
		</h2>
	);
};

export default TitleH2;
