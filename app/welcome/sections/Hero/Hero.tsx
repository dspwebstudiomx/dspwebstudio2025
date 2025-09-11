import React from "react";
import BackgroundImage from "../../../components/BackgroundImage";

type HeroProps = {
	backgroundImage?: string;
	backgroundVideo?: string;
	children: React.ReactNode;
	className?: string;
	heroId?: string;
};

const Hero: React.FC<HeroProps> = ({
	heroId = "main",
	backgroundImage,
	backgroundVideo,
	children,
	className,
}) => {
	return (
		<section className={`relative bg-cover bg-center z-40 ${className}`}>
			{/* Fondo con opacidad reutilizable */}
			<BackgroundImage
				imageUrl={backgroundVideo ? undefined : backgroundImage}
				videoUrl={backgroundVideo}
				opacity={0.4}
			/>
			{/* Contenido */}
			<div
				id={`hero-content-${heroId}`}
				className="container relative flex flex-col p-12 md:px-16 md:py-16 xl:px-0 gap-6 min-h-[100vh] md:min-h-[50vh] xl:min-h-[60vh] text-gray-100 justify-center md:items-start z-10 h-full mx-auto">
				{children}
			</div>
		</section>
	);
};

export default Hero;
