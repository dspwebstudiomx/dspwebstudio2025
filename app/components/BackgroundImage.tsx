import React from "react";

export type BackgroundImageProps = {
	imageUrl: string;
	opacity?: number;
	className?: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
	imageUrl,
	className = "",
	opacity = 0.3,
}) => (
	<div
		className={`absolute inset-0 bg-cover bg-center z-0 ${className}`}
		style={{
			backgroundImage: `url('${imageUrl}')`,
		}}>
		<div className="absolute inset-0 bg-black" style={{ opacity }} />
	</div>
);

export default BackgroundImage;
