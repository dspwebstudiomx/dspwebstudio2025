import Container from "~/components/Container";
import TitleH2 from "~/components/Titles/TitleH2";
import Section from "./Section";

const Servicios = () => {
	return (
		<Section id="servicios" background="gray-700">
			<Container>
				<TitleH2 title="Nuestros Servicios" />
				<p className="mb-4">
					En dspwebstudio, ofrecemos una amplia gama de servicios para ayudarte
					a establecer y mejorar tu presencia en línea. Nuestros servicios
					incluyen:
				</p>
				<ul className="list-disc list-inside mb-4">
					<li className="mb-2">
						<strong>Diseño y Desarrollo Web:</strong> Creamos sitios web
						personalizados que son visualmente atractivos, fáciles de navegar y
						optimizados para dispositivos móviles.
					</li>
				</ul>
			</Container>
		</Section>
	);
};

export default Servicios;
