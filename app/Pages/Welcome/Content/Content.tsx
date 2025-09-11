import PageTemplate from "~/components/templates/PageTemplate";
import Inicio from "../Sections/Inicio";
import Servicios from "../Sections/Servicios";

const Content = () => {
	return (
		<PageTemplate>
			<Inicio />
			<Servicios />
		</PageTemplate>
	);
};

export default Content;
