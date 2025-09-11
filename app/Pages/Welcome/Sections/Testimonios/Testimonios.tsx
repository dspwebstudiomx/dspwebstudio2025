import { testimonio } from "../../Data";
import Section from "../Section";
import TitleH2 from "~/components/Titles/TitleH2";

type Props = {};

const Testimonios = (props: Props) => {
	{
		/* Proceso de trabajo */
	}
	return (
		<Section id="testimonios" background="" aditionalClasses="">
			<TitleH2 title="Testimonios" colorClass="text-pink-light" />
			<p className="italic mb-2">"{testimonio.mensaje}"</p>
			<span className="font-bold">{testimonio.nombre}</span>,{" "}
			<span>{testimonio.cargo}</span>
		</Section>
	);
};

export default Testimonios;
