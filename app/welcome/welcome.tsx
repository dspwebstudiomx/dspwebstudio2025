import PageTemplate from "~/components/templates/PageTemplate";
import Hero from "../components/Sections/Hero/Hero.js";

export function Welcome() {
	return (
		<section className="bg-gray-900 min-h-screen-[100vh]">
			<Hero backgroundImage="https://images.unsplash.com/photo-1753696053910-1166f7c6751e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDcyNjN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTU4Mjc3MTh8&ixlib=rb-4.1.0&q=85">
				<h1 className="text-4xl lg:text-5xl">Hello World</h1>
				<p className="text-md lg:text-xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsam
					inventore dolor, nulla qui dolores voluptate voluptatibus repudiandae
					fugit omnis aliquam vel aliquid at officia in debitis deleniti maiores
					enim recusandae. Deleniti deserunt molestiae necessitatibus animi, eos
					tempore similique aperiam libero exercitationem omnis officiis odio
					accusamus assumenda commodi nam eveniet iusto ducimus? Dicta esse
					laborum illo eaque odio, corporis modi commodi suscipit nam quas.
					Quas, fugit suscipit sequi accusamus earum at sit magni! Quidem fugiat
					quasi, reiciendis quisquam hic quaerat. A aspernatur velit ullam
					laboriosam nobis! Cum, veniam. Commodi modi minima doloribus nobis
					ipsa, ad quis voluptatibus quos alias nisi?
				</p>
			</Hero>
			<PageTemplate>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
					sint voluptatem magnam est ipsa ea, eligendi alias quia magni?
					Quibusdam vitae dolorum illum dolorem itaque reiciendis blanditiis
					numquam reprehenderit! Quaerat?
				</p>
			</PageTemplate>
		</section>
	);
}
