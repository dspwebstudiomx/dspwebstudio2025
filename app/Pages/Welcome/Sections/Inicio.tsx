import Button from "~/components/Buttons/Button";
import Container from "~/components/Container";
import Image from "~/components/Images/Image";
import TitleH2 from "~/components/Titles/TitleH2";
import Section from "./Section";
import Paragraph from "~/components/Paragraph/Paragraph";

const Inicio = () => {
	return (
		<Section id="inicio" aditionalClasses="" background="red-100/10">
			<>
				<div className="flex flex-col sm:flex-row items-center lg:items-start gap-12 sm:gap-6 md:gap-20 lg:gap-40">
					<article id="inicio-texto" className="lg:w-2/3">
						<TitleH2
							title="Bienvenido a dspwebstudio"
							colorClass="text-blue-light"
						/>
						<Paragraph content="En dspwebstudio, nos apasiona ayudar a emprendedores y pequeñas empresas a destacar en el mundo digital. Sabemos que cada negocio es único, y por eso ofrecemos soluciones personalizadas que se adaptan a tus necesidades y objetivos." />
						<Button
							text="¡Impulsa tu presencia digital hoy! Contáctanos para una asesoría gratuita"
							colorClass="green-light"
						/>
					</article>
					<article id="inicio-imagen">
						<Image
							src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="imagen de bienvenida"
							width={600}
							height={800}
						/>
					</article>
				</div>
			</>
		</Section>
	);
};

export default Inicio;
