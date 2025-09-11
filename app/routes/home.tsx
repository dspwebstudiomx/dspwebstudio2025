import { Welcome } from "~/Pages/Welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "dspwebstudio | Inicio - Diseño Web" },
		{ logo: "dspwebstudio" },
		{
			name: "description",
			content:
				"Bienvenido a dspwebstudio, tu solución integral para diseño web.",
		},
	];
}

export default function Home() {
	return <Welcome />;
}
