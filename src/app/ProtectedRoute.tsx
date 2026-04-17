import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
    const isAuth = localStorage.getItem("email"); // Tu lógica de autenticación

    if (!isAuth || isAuth === null) {
        window.alert("No estás autenticado!!! debes iniciar sesión")
        return <Navigate to="/auth" replace />
    }

    if (isAuth === "admin123@gmail.com") {
        window.alert("Bienvendio");
        return <Outlet />
    }

    window.alert("No tienes permiso de ver esto")
    return <Navigate to="/" />
};