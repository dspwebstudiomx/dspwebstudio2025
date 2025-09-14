import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
	FaHome,
	FaServicestack,
	FaBoxOpen,
	FaRegCommentDots,
	FaEnvelopeOpenText,
} from "react-icons/fa";

function scrollToSection(id: string, offset?: number) {
	const el = document.getElementById(id);
	const navbar = document.querySelector("header");
	let navbarHeight = 0;
	if (navbar) {
		navbarHeight = (navbar as HTMLElement).offsetHeight;
	}
	if (typeof offset === "number") {
		navbarHeight = offset;
	}
	if (el) {
		const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
		window.scrollTo({ top: y, behavior: "smooth" });
	}
}

const SECTIONS = [
	{ id: "hero-container-main", label: "Inicio" },
	{ id: "servicios", label: "Servicios" },
	{ id: "paquetes", label: "Paquetes" },
	{ id: "testimonios", label: "Testimonios" },
	{ id: "contacto", label: "Contacto" },
];

const Navbar = () => {
	const menuRef = useRef<HTMLDivElement>(null);
	const [animateOut, setAnimateOut] = useState(false);
	// Estado para el menú móvil
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState<string>(
		"hero-container-main"
	);

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

	// Cambiar el estado de "scrolled" y detectar sección activa al hacer scroll
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const vh = window.innerHeight * 0.05; // 5% de la altura de la ventana
			setScrolled(scrollY > vh);

			// Detectar sección activa
			let currentSection = SECTIONS[0].id;
			for (const section of SECTIONS) {
				const el = document.getElementById(section.id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 140 && rect.bottom > 140) {
						currentSection = section.id;
						break;
					}
				}
			}
			setActiveSection(currentSection);
		};
		window.addEventListener("scroll", handleScroll);
		// Llamar una vez al montar
		handleScroll();
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
			className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${open ? "bg-primary-dark" : scrolled ? "bg-blue-950 shadow-2xl" : "bg-transparent"}`}>
			<div className="mx-auto container py-6 flex justify-between items-center px-8 sm:px-0 lg:px-18 xl:px-12 h-20 xl:h-24">
				{/* Logo */}
				<a
					href="/"
					className="text-2xl font-bold text-white"
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}>
					<img
						src="/images/dsp-white.png"
						alt="dspwebstudio logo"
						width={120}
					/>
				</a>

				<nav className="hidden md:flex space-x-6 text-gray-100 uppercase ">
					{SECTIONS.map((section) => (
						<a
							key={section.id}
							href={
								section.id === "hero-container-main" ? "/" : `#${section.id}`
							}
							className={`tracking-wide hover:text-blue-300 transition-colors duration-200 ${activeSection === section.id ? "text-blue-400 font-bold" : ""}`}
							onClick={(e) => {
								e.preventDefault();
								if (section.id === "hero-container-main") {
									window.scrollTo({ top: 0, behavior: "smooth" });
								} else {
									scrollToSection(section.id, 130);
								}
							}}>
							{section.label}
						</a>
					))}
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
				<div className="fixed top-[80px] right-0 inset-0 z-40 flex flex-col">
					<div
						ref={menuRef}
						className={`md:hidden flex flex-col bg-gray-900 sm:px-4 sm:pb-4 h-[90vh] w-full shadow-2xl transform transition-transform duration-300 ${animateOut ? "slide-out-navbar " : "slide-in-navbar  border-t-2 border-gray-100"}`}>
						<div className="flex flex-col justify-start grow h-full">
							{SECTIONS.map((section) => {
								let icon = null;
								if (section.id === "hero-container-main")
									icon = <FaHome className="text-2xl" />;
								if (section.id === "servicios")
									icon = <FaServicestack className="text-2xl" />;
								if (section.id === "paquetes")
									icon = <FaBoxOpen className="text-2xl" />;
								if (section.id === "testimonios")
									icon = <FaRegCommentDots className="text-2xl" />;
								if (section.id === "contacto")
									icon = <FaEnvelopeOpenText className="text-2xl" />;
								return (
									<a
										key={section.id}
										href={
											section.id === "hero-container-main"
												? "/"
												: `#${section.id}`
										}
										className={`flex items-center gap-3 justify-start pl-18 text-xl uppercase tracking-widest py-8 border-b-2 text-center transition-colors duration-200 hover:bg-blue-600 ${activeSection === section.id ? "text-blue-400 font-bold bg-gray-950" : "text-gray-100"}`}
										onClick={(e) => {
											e.preventDefault();
											if (section.id === "hero-container-main") {
												window.scrollTo({ top: 0, behavior: "smooth" });
											} else {
												scrollToSection(section.id);
											}
											setOpen(false);
										}}>
										{icon}
										{section.label}
									</a>
								);
							})}
						</div>
					</div>
					{/* Fondo semitransparente para detectar clics fuera */}
					<div className="flex-1" />
				</div>
			)}
		</header>
	);
};

export default Navbar;
