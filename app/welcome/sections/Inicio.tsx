import React from "react";
import Container from "~/components/Container";
import TitleH2 from "~/components/Titles/TitleH2";
// ...existing code...

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
						<div className="mt-12">
							<a
								href="#contacto"
								className="inline-block px-8 py-5 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 w-[420px] animate-cta-pulse"
								style={{ boxShadow: "0 0 0 0 rgba(37, 99, 235, 0.7)" }}>
								¡Impulsa tu presencia digital hoy! Contáctanos para una asesoría
								gratuita
							</a>
						</div>
					</article>
					<article className="p-6 md:p-0">
						<img
							src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="imagen de bienvenida"
							width={600}
							height={800}
							srcSet=""
							className="border-4 border-blue-400 rounded-4xl"
						/>
					</article>
				</div>
			</Container>
		</section>
	);
};

export default Inicio;
