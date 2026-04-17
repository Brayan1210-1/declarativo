import { Link, } from "react-router";
import { useState } from "react";

import { Button } from "../../../design/atoms/Button";
import { Container } from "../../../design/atoms/Container";
import { Input } from "../../../design/atoms/Input";



export default function RegisterPage() {

    {/* Ya sé que esto no debe ir aquí, no me vaya a pegar profe.
        Pero si está mejor los genéricos... voy a probar*/
    }

    const [email, setEmail] = useState("");

    const setLocalStorange = () => {
        return (
            localStorage.removeItem('email')
        );
    }

    {/* useNavigate entra en acción redirige al usuario sin recargar la página, que belleza ome*/ }

    /*
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/anime")
    }
    */
    return (
        <Container>
            <div className="justify-center col-end-2">
                <header className="p-2 m-3 justify-center align-middle">
                    <h1 className="font-extrabold text-3xl">Bienvenidos a mi cerro</h1>
                    <p className="font-semibold p-2 ">holaaaa soy un registro</p>
                </header>

                <Input label="email" placeHolder="juanito123@gmail.com" type={"email"} value={email} onChange={(e) => setEmail(e.target.value)}
                />

                <Input type={"text"} label={"nombrecompleto"} value={"prueba"} onChange={() => { console.log("cambio") }}
                />

                {/* Traiganme la evaluación 🫣 */}
                <Input type={"text"} label={"edad"} value={"probando"} onChange={() => { }} />


                <Button name={"Borrar localStorange"} onClick={setLocalStorange} />


                {/* de esta forma se usa link, es mejor solo para redirigir en formularios o así que no sea en una navbar
                lo bueno que tiene sobre <a> es que esto no recarga nada y nos permite ser más felices porque es más fluido */}
                <Link to="/auth" > ya tienes cuenta? </Link>

            </div>
        </Container>
    )
}