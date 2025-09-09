import React from "react";

interface ButtonProps {
	text: string;
	colorClass?: string;
}

// Mapeo para usar variables CSS personalizadas
const colorVarMap: Record<string, string> = {
	primary: "--color-primary",
	"primary-dark": "--color-primary-dark",
	"primary-light": "--color-primary-light",
	blue: "--color-blue",
	"blue-dark": "--color-blue-dark",
	"blue-light": "--color-blue-light",
	green: "--color-green",
	"green-dark": "--color-green-dark",
	"green-light": "--color-green-light",
	red: "--color-red",
	"red-dark": "--color-red-dark",
	"red-light": "--color-red-light",
	yellow: "--color-yellow",
	"yellow-dark": "--color-yellow-dark",
	"yellow-light": "--color-yellow-light",
	purple: "--color-purple",
	"purple-dark": "--color-purple-dark",
	"purple-light": "--color-purple-light",
};

const Button = ({ text, colorClass }: ButtonProps) => {
	// Busca si colorClass coincide con alguna clave del mapeo
	let styleVar: React.CSSProperties | undefined = undefined;
	if (colorClass) {
		const found = Object.keys(colorVarMap).find((key) =>
			colorClass.includes(key)
		);
		if (found) {
			// Usa la variable CSS personalizada
			styleVar = {
				"--color-red": `var(${colorVarMap[found]})`,
			} as React.CSSProperties;
		}
	}
	return (
		<div className="mt-12">
			<a
				href="#contacto"
				className={`inline-block px-8 py-5 font-semibold rounded-full transition-colors duration-300 w-full sm:w-[420px] animate-cta-pulse md:text-lg mx-auto text-center bg-${colorClass}`}
				style={styleVar}>
				{text}
			</a>
		</div>
	);
};

export default Button;
