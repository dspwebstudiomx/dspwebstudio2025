import React from "react";
import Container from "../Container";

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="bg-gray-900 text-gray-100 min-h-screen px-4 md:px-0 py-12 md:py-20">
			<Container>{children}</Container>
		</main>
	);
};

export default PageTemplate;
