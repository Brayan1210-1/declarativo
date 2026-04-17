import { Link } from "react-router";
import { Container } from "../../../design/atoms/Container";

export function HomePage() {
    return (
        <Container>

            <div className=" ">
                <h1 className="p-12"> Bienvenidos a React Router mijos</h1>
                <p>esta es el inicio del proyecto</p>
                <Link to="https://reactrouter.com/home" className=" text-green-600" > la documentacion por si la quieren</Link>

            </div>

        </Container>
    )
}