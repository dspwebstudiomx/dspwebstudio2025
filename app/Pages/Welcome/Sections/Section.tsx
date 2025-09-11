import React from "react";

type SectionProps = {
	children: React.ReactNode;
	background?: string;
	id?: string;
};

const Section = ({ children, background, id }: SectionProps) => {
	return (
		<section id={id} className={`bg-${background} p-6 sm:p-12 xl:px-18`}>
			{children}
		</section>
	);
};

export default Section;
