import React from "react";

interface ButtonProps {
	text: string;
}

const Button = ({ text }: ButtonProps) => {
	return (
		<div className="mt-12">
			<a
				href="#contacto"
				className="inline-block px-8 py-5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300 w-full  sm:w-[420px] animate-cta-pulse shadow-primary-dark md:text-lg mx-auto text-center">
				{text}
			</a>
		</div>
	);
};

export default Button;
