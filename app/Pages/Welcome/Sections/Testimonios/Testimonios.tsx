import Card from "~/components/Cards/Card";
import { testimonio } from "../../Data";
import Section from "../Section";
import TitleH2 from "~/components/Titles/TitleH2";

type Props = {};

const Testimonios = (props: Props) => {
	return (
		<Section id="testimonios" background="" aditionalClasses="">
			<TitleH2 title="Testimonios" colorClass="text-pink-light" />
			<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
				{testimonio.map((item) => (
					<Card borderColor={item.borderColor} key={item.id}>
						<div>
							<p className="italic mb-2">"{item.mensaje}"</p>
						</div>
						<hr className="my-2" />
						<div>
							<h4 className="font-bold text-xl">{item.nombre}</h4>
							<h5>{item.cargo}</h5>
						</div>
					</Card>
				))}
			</div>
		</Section>
	);
};

export default Testimonios;
