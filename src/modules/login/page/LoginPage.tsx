import { useState } from "react";
import { Button } from "../../../design/atoms/Button";
import { Input } from "../../../design/atoms/Input";
import { Container } from "../../../design/atoms/Container";
import { Link, useNavigate } from "react-router";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const pruebaButton = () => {
        window.alert("Inserte lógica de negocio y mire el localstorage");
        localStorage.setItem("email", "admin123@gmail.com");
        navigate("/");
    }

    return (
        <Container>
            <form >

                <h1> Bienvendio a hola mundo</h1>

                <Input type="email" label="email" value={email} placeHolder="ingresa email" onChange={(e) => setEmail(e.target.value)} />

                <Input type="password" label="contraseña" value={password} placeHolder="ingresa contraseña" onChange={(e) => setPassword(e.target.value)} />

                <Button name="Ingresar" onClick={pruebaButton} />

                <Link to="/auth/registro">¿no tienes una cuenta?</Link>

            </form>
        </Container>
    )
}