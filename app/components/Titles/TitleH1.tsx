import React from "react";

type TitleH1Props = {
	title: string;
};

const TitleH1 = ({ title }: TitleH1Props) => {
	return (
		<h1 className="audiowide-regular text-3xl sm:text-4xl lg:text-5xl text-left">
			{title}
		</h1>
	);
};

export default TitleH1;
