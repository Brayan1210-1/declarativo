import { Outlet } from "react-router";

export function Auth() {
    return (
        <div className="bg-gray-300">
            <h1> hola soy el padre</h1>
            <Outlet />
        </div >
    );
}