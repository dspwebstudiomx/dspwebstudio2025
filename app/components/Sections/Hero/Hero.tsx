import React from "react";
import BackgroundImage from "../../BackgroundImage";

type HeroProps = {
	backgroundImage: string;
	children: React.ReactNode;
	className?: string;
};

const Hero: React.FC<HeroProps> = ({
	backgroundImage,
	children,
	className,
}) => {
	return (
		<section className={`relative bg-cover bg-center ${className}`}>
			{/* Fondo con opacidad reutilizable */}
			<BackgroundImage imageUrl={backgroundImage} opacity={0.7} />
			{/* Contenido */}
			<div className="container relative flex flex-col mr-auto p-8 md:py-16 gap-6 min-h-[80vh] text-gray-100 justify-center md:items-start z-10 h-full mx-auto">
				{children}
			</div>
		</section>
	);
};

export default Hero;
