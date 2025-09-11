import PageTemplate from "~/components/templates/PageTemplate";
import Inicio from "../Sections/Inicio/Inicio";
import Servicios from "../Sections/Servicios/Servicios";
import PorqueElegirnos from "../Sections/PorqueElegirnos/PorqueElegirnos";

const Content = () => {
	return (
		<PageTemplate>
			<Inicio />
			<Servicios />
			<PorqueElegirnos />
		</PageTemplate>
	);
};

export default Content;
