import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	// Estado para el menú móvil
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Cambiar el estado de "scrolled" al hacer scroll
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const vh = window.innerHeight * 0.12;
			setScrolled(scrollY > vh);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${open ? "bg-gray-950" : scrolled ? "bg-blue-950 shadow-2xl" : "bg-transparent"}`}>
			<div className="mx-auto container py-0 flex justify-between items-center px-8 sm:px-0">
				{/* Logo */}
				<a
					href="#hero-container-main"
					className="text-2xl font-bold text-white">
					<img
						src="/public/images/dsp-white.png"
						alt="dspwebstudio logo"
						width={120}
					/>
				</a>

				<nav className="hidden md:flex space-x-6 text-gray-100 uppercase ">
					<a href="/" className="hover:text-blue-300 tracking-wide">
						Inicio
					</a>
					<a href="#servicios" className="hover:text-blue-300">
						Servicios
					</a>
					<a href="#paquetes" className="hover:text-blue-300">
						Paquetes
					</a>
					<a href="#testimonios" className="hover:text-blue-300">
						Testimonios
					</a>
					<a href="#contacto" className="hover:text-blue-300">
						Contacto
					</a>
				</nav>

				{/* Botón móvil */}
				<button
					className="md:hidden text-gray-100"
					onClick={() => setOpen(!open)}>
					<GiHamburgerMenu size={28} />
				</button>
			</div>

			{/* Menú móvil */}
			{open && (
				<nav className="md:hidden bg-blue-900 sm:px-4 sm:pb-4 space-y-2 h-[90vh]">
					<a
						href="#hero-container-main"
						className="block text-gray-100 hover:bg-blue-600 text-xl uppercase tracking-widest p-8 active:text-blue-400 border-b-2 border-blue-400">
						Inicio
					</a>
					<a
						href="#servicios"
						className="block text-gray-100 hover:bg-blue-600 text-xl uppercase tracking-widest p-8 active:text-blue-400 border-b-2 border-blue-400">
						Servicios
					</a>
					<a
						href="#paquetes"
						className="block text-gray-100 hover:bg-blue-600 text-xl uppercase tracking-widest p-8 active:text-blue-400 border-b-2 border-blue-400">
						Paquetes
					</a>
					<a
						href="#testimonios"
						className="block text-gray-100 hover:bg-blue-600 text-xl uppercase tracking-widest p-8 active:text-blue-400 border-b-2 border-blue-400">
						Testimonios
					</a>
					<a
						href="#contacto"
						className="block text-gray-100 hover:bg-blue-600 text-xl uppercase tracking-widest p-8 active:text-blue-400 border-b-2 border-blue-400">
						Contacto
					</a>
				</nav>
			)}
		</header>
	);
};

export default Navbar;
