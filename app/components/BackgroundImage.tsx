import React from "react";

export type BackgroundImageProps = {
	imageUrl: string;
	opacity?: number;
	className?: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
	imageUrl,
	opacity = 0.3,
	className = "",
}) => (
	<div
		className={`absolute inset-0 bg-[url('${imageUrl}')] bg-cover bg-center z-0 ${className}`}
		style={{ opacity }}></div>
);

export default BackgroundImage;
