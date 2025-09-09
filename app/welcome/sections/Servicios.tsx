import Container from "~/components/Container";
import TitleH2 from "~/components/Titles/TitleH2";
import Section from "./Section";
import Paragraph from "~/components/Paragraph/Paragraph";

const Servicios = () => {
	return (
		<Section id="servicios" background="blue-700">
			<Container>
				<TitleH2 title="Nuestros Servicios" colorClass="text-yellow-light" />
				<Paragraph content="En dspwebstudio, ofrecemos una amplia gama de servicios para ayudarte a establecer y mejorar tu presencia en línea. Nuestros servicios incluyen:" />
				<ul className="list-inside mb-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 list-none mt-12 md:mt-20">
					<li className="mb-2 border-2 border-blue-light p-6 rounded-xl flex flex-col gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl min-h-[250px]">
						<h3 className="audiowide-regular text-blue-light text-2xl">
							<span className="text-blue-light">01. </span>
							Diseño Web
						</h3>{" "}
						<p>
							Ofrecemos diseños personalizados y atractivos que reflejan la
							identidad de tu marca y capturan la atención de tus visitantes.
						</p>
					</li>
					<li className="mb-2 border-2 border-red-light p-6 rounded-xl flex flex-col gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl min-h-[250px]">
						<h3 className="audiowide-regular text-red-light text-2xl">
							<span className="text-red-light">02. </span>
							Desarrollo Web
						</h3>{" "}
						<p>
							Desarrollamos sitios web funcionales utilizando las últimas
							tecnologías y mejores prácticas de la industria.
						</p>
					</li>
					<li className="mb-2 border-2 border-yellow-light p-6 rounded-xl flex flex-col gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl min-h-[250px]">
						<h3 className="audiowide-regular text-yellow-light text-2xl">
							<span className="text-yellow-light">03. </span>
							Marketing Digital
						</h3>{" "}
						<p>
							Ofrecemos estrategias de marketing digital personalizadas para
							ayudarte a alcanzar tus objetivos comerciales y aumentar tu
							presencia en línea.
						</p>
					</li>
					<li className="mb-2 border-2 border-green-light p-6 rounded-xl flex flex-col gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl min-h-[250px]">
						<h3 className="audiowide-regular text-green-light text-2xl">
							<span className="text-green-light">04. </span>
							Mantenimiento Web
						</h3>{" "}
						<p>
							Ofrecemos servicios de mantenimiento web para asegurar que tu
							sitio esté siempre actualizado, seguro y funcionando sin
							problemas.
						</p>
					</li>
					<li className="mb-2 border-2 border-purple-light p-6 rounded-xl flex flex-col gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl min-h-[250px]">
						<h3 className="audiowide-regular text-purple-light text-2xl">
							<span className="text-purple-light">05. </span>
							Optimización SEO
						</h3>
						<p>
							Mejoramos la visibilidad de tu sitio web en los motores de
							búsqueda para atraer más tráfico orgánico y potenciales clientes.
						</p>
					</li>
				</ul>
			</Container>
		</Section>
	);
};

export default Servicios;
