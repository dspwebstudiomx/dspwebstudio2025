import React from "react";

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex flex-col gap-12 min-h-screen container mx-auto py-20 bg-gray-900">
			{children}
		</main>
	);
};

export default PageTemplate;
