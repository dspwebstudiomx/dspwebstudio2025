import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="bg-white shadow fixed top-0 left-0 w-full z-50">
			<div className="mx-auto container py-8 flex justify-between items-center">
				<h1 className="text-xl font-bold text-blue-600">Clínica Dental</h1>

				<nav className="hidden md:flex space-x-6">
					<a href="#inicio" className="text-gray-700 hover:text-blue-600">
						Inicio
					</a>
					<a href="#servicios" className="text-gray-700 hover:text-blue-600">
						Servicios
					</a>
					<a
						href="#especialistas"
						className="text-gray-700 hover:text-blue-600">
						Especialistas
					</a>
					<a href="#testimonios" className="text-gray-700 hover:text-blue-600">
						Testimonios
					</a>
					<a href="#contacto" className="text-gray-700 hover:text-blue-600">
						Contacto
					</a>
				</nav>

				{/* Botón móvil */}
				<button
					className="md:hidden text-gray-700"
					onClick={() => setOpen(!open)}>
					☰
				</button>
			</div>

			{/* Menú móvil */}
			{open && (
				<nav className="md:hidden bg-white px-4 pb-4 space-y-2">
					<a href="#inicio" className="block text-gray-700 hover:text-blue-600">
						Inicio
					</a>
					<a
						href="#servicios"
						className="block text-gray-700 hover:text-blue-600">
						Servicios
					</a>
					<a
						href="#especialistas"
						className="block text-gray-700 hover:text-blue-600">
						Especialistas
					</a>
					<a
						href="#testimonios"
						className="block text-gray-700 hover:text-blue-600">
						Testimonios
					</a>
					<a
						href="#contacto"
						className="block text-gray-700 hover:text-blue-600">
						Contacto
					</a>
				</nav>
			)}
		</header>
	);
};

export default Navbar;
