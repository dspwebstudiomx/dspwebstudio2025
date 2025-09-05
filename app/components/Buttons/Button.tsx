import React from "react";

interface ButtonProps {
	text: string;
}

const Button = ({ text }: ButtonProps) => {
	return (
		<div className="mt-12">
			<a
				href="#contacto"
				className="inline-block px-8 py-5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 w-[420px] animate-cta-pulse shadow-[0_0_0_0_rgba(37,99,235,0.7)] text-lg">
				{text}
			</a>
		</div>
	);
};

export default Button;
