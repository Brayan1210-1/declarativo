import { NavLink, Outlet } from 'react-router';

export const NavBar = () => {
    // Función para centralizar los estilos de los links
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-4 py-2 rounded-md transition-colors ${isActive
            ? 'bg-blue-600 text-white font-bold' // Estilo cuando estás en la página
            : 'text-gray-600 hover:bg-gray-100'   // Estilo cuando no estás
        }`;

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            <header className="bg-white shadow-sm p-4">
                <nav className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold text-blue-600">Anime Explorer</h1>
                    <div className="flex gap-4">
                        <NavLink to="/anime" className={navLinkClass}>Explorar</NavLink>
                        <NavLink to="/auth" className={navLinkClass}>cerrar sesión</NavLink>
                        <NavLink to="/perfil" className={navLinkClass}>Perfil</NavLink>
                        <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-700" : 'text-gray-600'}> inicio </NavLink>
                    </div>
                </nav>
            </header>

            <main className="grow max-w-7xl mx-auto w-full p-6">

                <Outlet />
            </main>

            <footer className="p-4 text-center text-gray-400 border-t bg-white">
                demostrador de foother
            </footer>
        </div>
    );
};