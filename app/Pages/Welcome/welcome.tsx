import Navbar from "~/components/Navbar";

import Content from "./Content/Content.js";
import HeroInicio from "./Hero/HeroInicio.js";

export function Welcome() {
	return (
		<>
			<Navbar />
			<HeroInicio />
			<Content />
		</>
	);
}
