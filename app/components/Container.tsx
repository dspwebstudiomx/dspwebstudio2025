import React from "react";

type ContainerProps = {
	children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	return (
		<article className="container mx-auto flex flex-col gap-12 lg:gap-24">
			{children}
		</article>
	);
};

export default Container;
