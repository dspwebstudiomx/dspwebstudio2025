import React from "react";

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="bg-gray-900 text-gray-100 min-h-screen px-4 md:px-0 flex flex-col gap-12 lg:gap-36 py-12 md:py-20">
			{children}
		</main>
	);
};

export default PageTemplate;
