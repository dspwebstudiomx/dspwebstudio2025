import Navbar from "~/components/Navbar";
import HeroInicio from "./Hero/HeroInicio";
import Content from "./Content/Content.js";

export function Welcome() {
	return (
		<>
			<Navbar />
			<HeroInicio />
			<Content />
		</>
	);
}
