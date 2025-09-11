// Datos
import {
	serviciosLista,
	beneficios,
	proceso,
	preguntasFrecuentes,
	testimonio,
} from "./serviciosData";

// Componentes
import Container from "~/components/Container";
import TitleH2 from "~/components/Titles/TitleH2";
import Paragraph from "~/components/Paragraph/Paragraph";
import Section from "../Section";

// Componente principal
const Servicios = () => {
	return (
		<Section id="servicios" background="" aditionalClasses="">
			<TitleH2 title="Nuestros Servicios" colorClass="text-yellow-light" />
			<Paragraph content="En dspwebstudio, ofrecemos una amplia gama de servicios para ayudarte a establecer y mejorar tu presencia en línea. Nuestros servicios incluyen:" />
			<ul className="list-inside mb-4 grid gap-12 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 list-none mt-12 md:mt-20">
				{serviciosLista.map((servicio, idx) => (
					<li
						key={servicio.title}
						className={`mb-2 border-2 ${servicio.borderColor} p-4 py-8 md:p-8 rounded-xl flex flex-col gap-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl min-h-[250px]`}>
						<div className="flex flex-row items-center gap-4">
							{/* Ícono representativo (puedes cambiar el emoji por un ícono real si tienes una librería) */}
							<span className="text-4xl mb-2">
								{["🎨", "💻", "📈", "🛠️", "🔍", "🧑‍💻"][idx]}
							</span>
							<div className="flex flex-row">
								<h3
									className={`audiowide-regular ${servicio.textColor} text-2xl`}>
									{/* <span className={`${servicio.textColor} text-3xl`}>
											{servicio.numero}{" "}
										</span> */}
									<span className={`${servicio.textColor}`}>
										{servicio.title}
									</span>
								</h3>
							</div>
						</div>
						<p>{servicio.description}</p>
						<ul className="list-disc pl-5">
							{servicio.caracteristicas?.map((caracteristica, index) => (
								<li key={index}>{caracteristica}</li>
							))}
						</ul>
					</li>
				))}
			</ul>

			{/* Llamado a la acción */}
			<div className="mt-12 flex justify-center">
				<a
					href="#contacto"
					className="bg-yellow-light text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-500 transition">
					Solicita tu cotización
				</a>
			</div>
		</Section>
	);
};

export default Servicios;
