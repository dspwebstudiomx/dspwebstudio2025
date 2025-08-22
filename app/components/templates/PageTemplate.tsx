import React from "react";

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
	return <div className="container flex flex-col gap-12">{children}</div>;
};

export default PageTemplate;
