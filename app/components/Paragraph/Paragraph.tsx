import React from "react";

type Props = {
	content: string;
};

const Paragraph = (props: Props) => {
	const { content } = props;
	return <p className="text-xl sm:text-md lg:text-xl mb-8">{content}</p>;
};

export default Paragraph;
