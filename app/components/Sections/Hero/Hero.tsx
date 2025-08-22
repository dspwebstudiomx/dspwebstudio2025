import React from "react";
import BackgroundImage from "../../BackgroundImage";

type HeroProps = {
	backgroundImage: string;
	children: React.ReactNode;
};

const Hero: React.FC<HeroProps> = ({ backgroundImage, children }) => {
	return (
		<section className="relative bg-cover bg-center">
			{/* Fondo con opacidad reutilizable */}
			<BackgroundImage imageUrl={backgroundImage} opacity={0.6} />
			{/* Contenido */}
			<div className="container relative flex flex-col mr-auto p-8 md:p-16 gap-6 xl:w-1/2 text-white justify-center md:items-start z-10 h-full">
				{children}
			</div>
		</section>
	);
};

export default Hero;
