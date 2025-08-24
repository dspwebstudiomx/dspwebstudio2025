import React from "react";

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex flex-col gap-12 min-h-screen w-full container mx-auto py-20">
			{children}
		</main>
	);
};

export default PageTemplate;
