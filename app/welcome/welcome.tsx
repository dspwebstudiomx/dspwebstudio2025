import PageTemplate from "~/components/templates/PageTemplate";
import Hero from "../components/Sections/Hero/Hero.js";
import Navbar from "~/components/Navbar.js";
import Inicio from "./sections/Inicio.js";
import Servicios from "./sections/Servicios.js";
import TitleH1 from "~/components/Titles/TitleH1.js";

export function Welcome() {
	return (
		<>
			<Navbar />
			<Hero
				heroId="main"
				backgroundImage="https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				className="mt-0">
				<TitleH1 title="Transformamos tus ideas en experiencias digitales impactantes" />
				<p className="text-xl sm:text-md lg:text-xl leading-8">
					Estamos aquí para ayudarte a construir tu presencia en línea y llevar
					tus ideas al siguiente nivel.
				</p>
			</Hero>
			<PageTemplate>
				<Inicio />
				<Servicios />
			</PageTemplate>
		</>
	);
}
