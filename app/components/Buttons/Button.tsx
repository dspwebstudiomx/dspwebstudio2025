import React from "react";

interface ButtonProps {
	text: string;
	colorClass?: string;
}

// Mapeo para usar variables CSS personalizadas
const colorVarMap: Record<string, { var: string; hex: string }> = {
	primary: { var: "--color-primary", hex: "#2563eb" },
	"primary-dark": { var: "--color-primary-dark", hex: "#1d4ed8" },
	"primary-light": { var: "--color-primary-light", hex: "#3b82f6" },
	blue: { var: "--color-blue", hex: "#2563eb" },
	"blue-dark": { var: "--color-blue-dark", hex: "#1e40af" },
	"blue-light": { var: "--color-blue-light", hex: "#3b82f6" },
	green: { var: "--color-green", hex: "#22c55e" },
	"green-dark": { var: "--color-green-dark", hex: "#16a34a" },
	"green-light": { var: "--color-green-light", hex: "#4ade80" },
	red: { var: "--color-red", hex: "#dc2626" },
	"red-dark": { var: "--color-red-dark", hex: "#b91c1c" },
	"red-light": { var: "--color-red-light", hex: "#ef4444" },
	yellow: { var: "--color-yellow", hex: "#eab308" },
	"yellow-dark": { var: "--color-yellow-dark", hex: "#ca8a04" },
	"yellow-light": { var: "--color-yellow-light", hex: "#facc15" },
	purple: { var: "--color-purple", hex: "#8b5cf6" },
	"purple-dark": { var: "--color-purple-dark", hex: "#6d28d9" },
	"purple-light": { var: "--color-purple-light", hex: "#a78bfa" },
	pink: { var: "--color-pink", hex: "#ec4899" },
	"pink-dark": { var: "--color-pink-dark", hex: "#be185d" },
	"pink-light": { var: "--color-pink-light", hex: "#f472b6" },
};

// Función para convertir hex a rgba
function hexToRgba(hex: string, alpha: number) {
	const h = hex.replace("#", "");
	const bigint = parseInt(h, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;
	return `rgba(${r},${g},${b},${alpha})`;
}

// Obtiene el color más relevante del colorClass
function getColorKey(colorClass?: string): string | undefined {
	if (!colorClass) return undefined;
	return Object.keys(colorVarMap).find((key) => colorClass.includes(key));
}

const Button = ({ text, colorClass }: ButtonProps) => {
	const styleVar: React.CSSProperties = {};
	let keyframesStyle = "";
	const found = getColorKey(colorClass);
	if (found) {
		const { hex, var: cssVar } = colorVarMap[found];
		styleVar.background = `var(${cssVar})`;
		// Contraste automático simple para texto blanco o negro
		styleVar.color =
			found.includes("light") || found === "yellow" || found === "yellow-light"
				? "#222"
				: "#fff";
		// Animación personalizada para el color (usando rgba para opacidad)
		keyframesStyle = `@keyframes cta-pulse-dynamic {\n0% { box-shadow: 0 0 0 0 ${hexToRgba(hex, 1)}; }\n70% { box-shadow: 0 0 0 16px ${hexToRgba(hex, 0)}; }\n100% { box-shadow: 0 0 0 0 ${hexToRgba(hex, 0)}; }\n}`;
		styleVar.animation = "cta-pulse-dynamic 1.5s infinite";
	}
	return (
		<div className="mt-12">
			{keyframesStyle && <style>{keyframesStyle}</style>}
			<a
				href="#contacto"
				className="inline-block px-8 py-5 font-semibold rounded-xl transition-colors duration-300 w-full sm:w-[420px] md:text-lg mx-auto text-center"
				style={styleVar}>
				{text}
			</a>
		</div>
	);
};

export default Button;
