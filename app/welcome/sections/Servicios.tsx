import Container from "~/components/Container";
import TitleH2 from "~/components/Titles/TitleH2";
import Section from "./Section";
import Paragraph from "~/components/Paragraph/Paragraph";

const serviciosLista = [
	{
		numero: "01.",
		color: "blue-light",
		title: "Diseño Web",
		description:
			"Ofrecemos diseños personalizados y atractivos que reflejan la identidad de tu marca y capturan la atención de tus visitantes.",
	},
	{
		numero: "02.",
		color: "red-light",
		title: "Desarrollo Web",
		description:
			"Desarrollamos sitios web funcionales utilizando las últimas tecnologías y mejores prácticas de la industria.",
	},
	{
		numero: "03.",
		color: "yellow-light",
		title: "Marketing Digital",
		description:
			"Ofrecemos estrategias de marketing digital personalizadas para ayudarte a alcanzar tus objetivos comerciales y aumentar tu presencia en línea.",
	},
	{
		numero: "04.",
		color: "green-light",
		title: "Mantenimiento Web",
		description:
			"Ofrecemos servicios de mantenimiento web para asegurar que tu sitio esté siempre actualizado, seguro y funcionando sin problemas.",
	},
	{
		numero: "05.",
		color: "purple-light",
		title: "Optimización SEO",
		description:
			"Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico orgánico y potenciales clientes.",
	},
	{
		numero: "06.",
		color: "pink-light",
		title: "Consultoría UX/UI",
		description:
			"Brindamos asesoramiento experto en experiencia de usuario (UX) y diseño de interfaz de usuario (UI) para mejorar la usabilidad y la satisfacción del usuario en tu sitio web.",
	},
];

const Servicios = () => {
	return (
		<Section id="servicios" background="">
			<Container>
				<TitleH2 title="Nuestros Servicios" colorClass="text-yellow-light" />
				<Paragraph content="En dspwebstudio, ofrecemos una amplia gama de servicios para ayudarte a establecer y mejorar tu presencia en línea. Nuestros servicios incluyen:" />
				<ul className="list-inside mb-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 list-none mt-12 md:mt-20">
					{serviciosLista.map((servicio, idx) => (
						<li
							key={servicio.title}
							className={`mb-2 border-2 border-${servicio.color} p-6 rounded-xl flex flex-col gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl min-h-[250px]`}>
							<h3
								className={`audiowide-regular text-${servicio.color} text-2xl`}>
								<span className={`text-${servicio.color} text-3xl`}>
									{servicio.numero}{" "}
								</span>
								<br />
								{servicio.title}
							</h3>
							<p>{servicio.description}</p>
						</li>
					))}
				</ul>
			</Container>
		</Section>
	);
};

export default Servicios;
