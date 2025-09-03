import React from "react";
import BackgroundImage from "../../BackgroundImage";

type HeroProps = {
	backgroundImage: string;
	children: React.ReactNode;
	className?: string;
	heroId?: string;
};

const Hero: React.FC<HeroProps> = ({
	heroId = "main",
	backgroundImage,
	children,
	className,
}) => {
	return (
		<section className={`relative bg-cover bg-center z-40 ${className}`}>
			{/* Fondo con opacidad reutilizable */}
			<BackgroundImage imageUrl={backgroundImage} opacity={0.4} />
			{/* Contenido */}
			<div
				id={`hero-content-${heroId}`}
				className="container relative flex flex-col p-12 md:px-16 md:py-16 lg:px-0 gap-6 min-h-[80vh] text-gray-100 justify-center md:items-start z-10 h-full mx-auto">
				{children}
			</div>
		</section>
	);
};

export default Hero;
