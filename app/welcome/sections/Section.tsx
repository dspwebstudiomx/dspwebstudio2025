import React from "react";

type SectionProps = {
	children: React.ReactNode;
	background?: string;
	id?: string;
};

const Section = ({ children, background, id }: SectionProps) => {
	return (
		<section id={id} className={`bg-${background} p-6 sm:px-12 lg:p-0`}>
			{children}
		</section>
	);
};

export default Section;
