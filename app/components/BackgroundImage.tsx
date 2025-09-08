import React from "react";

export type BackgroundImageProps = {
	imageUrl?: string;
	videoUrl?: string;
	opacity?: number;
	className?: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
	imageUrl,
	videoUrl,
	className = "",
	opacity = 0.0,
}) => {
	if (videoUrl) {
		return (
			<div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
				<video
					className="absolute inset-0 w-full h-full object-cover"
					src={videoUrl}
					autoPlay
					loop
					muted
					playsInline
				/>
				<div className="absolute inset-0 bg-black" style={{ opacity }} />
			</div>
		);
	}
	if (imageUrl) {
		return (
			<div
				className={`absolute inset-0 bg-cover bg-center z-0 ${className}`}
				style={{
					backgroundImage: `url('${imageUrl}')`,
				}}>
				<div className="absolute inset-0 bg-black" style={{ opacity }} />
			</div>
		);
	}
	return null;
};

export default BackgroundImage;
