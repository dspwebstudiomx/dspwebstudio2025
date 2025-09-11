import { testimonio } from "../Servicios/serviciosData";
import Section from "../Section";

type Props = {};

const Testimonios = (props: Props) => {
	{
		/* Proceso de trabajo */
	}
	return (
		<Section id="testimonios" background="" aditionalClasses="">
			<p className="italic mb-2">"{testimonio.mensaje}"</p>
			<span className="font-bold">{testimonio.nombre}</span>,{" "}
			<span>{testimonio.cargo}</span>
		</Section>
	);
};

export default Testimonios;
