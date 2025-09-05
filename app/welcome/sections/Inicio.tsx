import Button from "~/components/Buttons/Button";
import Container from "~/components/Container";
import Image from "~/components/Images/Image";
import TitleH2 from "~/components/Titles/TitleH2";

const Inicio = () => {
	return (
		<section id="inicio" className="flex gap-20">
			<Container>
				<div className="flex flex-col sm:flex-row items-center lg:items-start gap-12 sm:gap-6 md:gap-20 lg:gap-40">
					<article className="lg:w-2/3">
						<TitleH2 title="Bienvenido a dspwebstudio" />
						<p className="mb-4">
							En dspwebstudio, nos especializamos en crear sitios web modernos y
							funcionales que impulsan tu presencia en línea. Nuestro equipo de
							expertos está dedicado a transformar tus ideas en experiencias
							digitales impactantes.
						</p>
						<Button text="¡Impulsa tu presencia digital hoy! Contáctanos para una asesoría gratuita" />
					</article>
					<article className="p-6 md:p-0">
						<Image
							src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="imagen de bienvenida"
							width={600}
							height={800}
						/>
					</article>
				</div>
			</Container>
		</section>
	);
};

export default Inicio;
