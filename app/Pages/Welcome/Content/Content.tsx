import PageTemplate from "~/components/templates/PageTemplate";
import Inicio from "../Sections/Inicio/Inicio";
import Servicios from "../Sections/Servicios/Servicios";
import PorqueElegirnos from "../Sections/PorqueElegirnos/PorqueElegirnos";
import NuestroProceso from "../Sections/NuestroProceso/NuestroProceso";
import PreguntasFrecuentes from "../Sections/PreguntasFrecuentes/PreguntasFrecuentes";
import Testimonios from "../Sections/Testimonios/Testimonios";

const Content = () => {
	return (
		<PageTemplate>
			<Inicio />
			<Servicios />
			<PorqueElegirnos />
			<NuestroProceso />
			<PreguntasFrecuentes />
			<Testimonios />
		</PageTemplate>
	);
};

export default Content;
