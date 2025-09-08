import PageTemplate from "~/components/templates/PageTemplate";
import Inicio from "../sections/Inicio";
import Servicios from "../sections/Servicios";

const Content = () => {
	return (
		<PageTemplate>
			<Inicio />
			<Servicios />
		</PageTemplate>
	);
};

export default Content;
