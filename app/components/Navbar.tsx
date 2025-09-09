import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	const menuRef = useRef<HTMLDivElement>(null);
	const [animateOut, setAnimateOut] = useState(false);
	// Estado para el menú móvil
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Bloquear/desbloquear scroll del body cuando el menú móvil está abierto
	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		// Limpiar en desmontaje
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	// Cambiar el estado de "scrolled" al hacer scroll
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const vh = window.innerHeight * 0.05;
			setScrolled(scrollY > vh);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Animaciones CSS en línea (solo una vez)
	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			!document.head.querySelector("style[data-navbar-anim]")
		) {
			const style = document.createElement("style");
			style.setAttribute("data-navbar-anim", "true");
			style.innerHTML = `
			.slide-in-navbar { transform: translateX(100%); animation: slideInRightNavbar 0.3s forwards; }
			.slide-out-navbar { animation: slideOutRightNavbar 0.3s forwards; }
			@keyframes slideInRightNavbar { from { transform: translateX(100%); } to { transform: translateX(0); } }
			@keyframes slideOutRightNavbar { from { transform: translateX(0); } to { transform: translateX(100%); } }
			`;
			document.head.appendChild(style);
		}
	}, []);

	// Cerrar menú al hacer clic fuera
	useEffect(() => {
		if (!open) return;
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setAnimateOut(true);
				setTimeout(() => {
					setOpen(false);
					setAnimateOut(false);
				}, 300);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [open]);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${open ? "bg-primary-dark" : scrolled ? "bg-primary-dark shadow-2xl" : "bg-transparent"}`}>
			<div className="mx-auto container py-0 flex justify-between items-center px-8 sm:px-0 lg:px-12 xl:px-0 h-20">
				{/* Logo */}
				<a href="/" className="text-2xl font-bold text-white">
					<img
						src="/images/dsp-white.png"
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

			{/* Menú móvil con animación */}
			{open && (
				<div className="fixed top-[80px] right-0 inset-0 z-40">
					<div
						ref={menuRef}
						className={`md:hidden flex flex-col bg-blue-900 sm:px-4 sm:pb-4 space-y-2 h-[84vh] w-full shadow-2xl transform transition-transform duration-300 ${animateOut ? "slide-out-navbar " : "slide-in-navbar  border-t-2 border-gray-100"}`}>
						<a
							href="#hero-container-main"
							className="flex items-center justify-center text-gray-100 hover:bg-blue-600 text-xl uppercase tracking-widest p-8 active:text-blue-400 border-b-2 border-blue-400 text-center"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
								setOpen(false);
							}}>
							Inicio
						</a>
						<a
							href="#servicios"
							className="flex items-center justify-center text-gray-100 hover:bg-blue-600 text-xl uppercase tracking-widest p-8 active:text-blue-400 border-b-2 border-blue-400 text-center"
							onClick={() => setOpen(false)}>
							Servicios
						</a>
						<a
							href="#paquetes"
							className="flex items-center justify-center text-gray-100 hover:bg-blue-600 py-8 text-xl uppercase tracking-widest active:text-blue-400 border-b-2 border-blue-400 text-center"
							onClick={() => setOpen(false)}>
							Paquetes
						</a>
						<a
							href="#testimonios"
							className="flex items-center justify-center text-gray-100 hover:bg-blue-600 py-8 text-xl uppercase tracking-widest active:text-blue-400 border-b-2 border-blue-400 text-center"
							onClick={() => setOpen(false)}>
							Testimonios
						</a>
						<a
							href="#contacto"
							className="flex items-center justify-center text-gray-100 hover:bg-blue-600 py-8 text-xl uppercase tracking-widest active:text-blue-400 border-b-2 border-blue-400 text-center"
							onClick={() => setOpen(false)}>
							Contacto
						</a>
					</div>
					{/* Fondo semitransparente para detectar clics fuera */}
					<div className="flex-1" />
				</div>
			)}
		</header>
	);
};

export default Navbar;
