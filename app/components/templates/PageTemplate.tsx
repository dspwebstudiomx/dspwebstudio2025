import React from "react";

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="bg-gray-100 text-gray-800 min-h-screen">
			<section className="px-4 md:px-0 flex flex-col gap-40 py-32">
				{children}
			</section>
		</main>
	);
};

export default PageTemplate;
