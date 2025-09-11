import React from "react";

type SectionProps = {
	children: React.ReactNode;
	background?: string;
	id?: string;
	aditionalClasses?: string;
};

const Section = ({
	children,
	background,
	id,
	aditionalClasses,
}: SectionProps) => {
	return (
		<section
			id={id}
			className={`bg-${background ? background : "transparent"} p-6 sm:p-12 xl:px-18 ${aditionalClasses}`}>
			{children}
		</section>
	);
};

export default Section;
