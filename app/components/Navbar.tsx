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
			const vh = window.innerHeight * 0.05; // 5% de la altura de la ventana
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
					<a
						href="/"
						className="hover:text-blue-300 tracking-wide"
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}>
						Inicio
					</a>
					<a
						href="#servicios"
						className="hover:text-blue-300"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("servicios", 130);
						}}>
						Servicios
					</a>
					<a
						href="#paquetes"
						className="hover:text-blue-300"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("paquetes", 130);
						}}>
						Paquetes
					</a>
					<a
						href="#testimonios"
						className="hover:text-blue-300"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("testimonios", 130);
						}}>
						Testimonios
					</a>
					<a
						href="#contacto"
						className="hover:text-blue-300"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("contacto", 130);
						}}>
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
				<div className="fixed top-[80px] right-0 inset-0 z-40 flex flex-col">
					<div
						ref={menuRef}
						className={`md:hidden flex flex-col bg-gray-900 sm:px-4 sm:pb-4 h-[90vh] w-full shadow-2xl transform transition-transform duration-300 ${animateOut ? "slide-out-navbar " : "slide-in-navbar  border-t-2 border-gray-100"}`}>
						<div className="flex flex-col justify-start grow h-full">
							<a
								href="#hero-container-main"
								className="flex items-center gap-3 justify-start pl-18 text-blue-light hover:bg-gray-950 text-xl uppercase tracking-widest py-8 active:text-blue-400 border-b-2 border-blue-400 text-center"
								onClick={(e) => {
									e.preventDefault();
									window.scrollTo({ top: 0, behavior: "smooth" });
									setOpen(false);
								}}>
								<FaHome className="text-2xl" />
								Inicio
							</a>
							<a
								href="#servicios"
								className="flex items-center gap-3 justify-start pl-18 text-yellow-light hover:bg-blue-600 text-xl uppercase tracking-widest p-8 active:text-blue-400 border-b-2 border-blue-400 text-center"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection("servicios");
									setOpen(false);
								}}>
								<FaServicestack className="text-2xl" />
								Servicios
							</a>
							<a
								href="#paquetes"
								className="flex items-center gap-3 justify-start pl-18 text-gray-100 hover:bg-blue-600 py-8 text-xl uppercase tracking-widest active:text-blue-400 border-b-2 border-blue-400 text-center"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection("paquetes");
									setOpen(false);
								}}>
								<FaBoxOpen className="text-2xl" />
								Paquetes
							</a>
							<a
								href="#testimonios"
								className="flex items-center gap-3 justify-start pl-18 text-gray-100 hover:bg-blue-600 py-8 text-xl uppercase tracking-widest active:text-blue-400 border-b-2 border-blue-400 text-center"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection("testimonios");
									setOpen(false);
								}}>
								<FaRegCommentDots className="text-2xl" />
								Testimonios
							</a>
							<a
								href="#contacto"
								className="flex items-center gap-3 justify-start pl-18 text-gray-100 hover:bg-blue-600 py-8 text-xl uppercase tracking-widest active:text-blue-400 border-b-2 border-blue-400 text-center"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection("contacto");
									setOpen(false);
								}}>
								<FaEnvelopeOpenText className="text-2xl" />
								Contacto
							</a>
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
