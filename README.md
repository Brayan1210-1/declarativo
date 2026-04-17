# REACT ROUTER DECLARATIVO

### Este readme tiene la finalidad de explicar que he usado para crear de proyecto de prueba "declarativo"

* ### librerias que facilitan 100 veces más la implementacion de los fetch/llamados y gestionar lo que trae el enpoint

```
npm i axios 
npm i @tanstack/react-query

# si lo quiere en una sola linea
npm i axios @tanstack/react-query

```

* ### Axios: Cliente HTTP para comunicación con el servidor.

¿Por qué lo usamos y no fetch (el que viene en el navegador)?

Porque transforma automáticamente los datos a JSON (no tienes que hacer .json()).

Permite configurar una baseURL para no escribir la dirección completa cada vez.

Maneja mejor los errores de red.

* ### TanStack Query: Poderosa herramienta de gestión de estado para aplicaciones web, encargada de la caché y la sincronización de datos asíncronos.

React Query no es para "hacer la petición" (para eso usa a Axios), sino para gestionar qué hacemos con los datos una vez que llegan. Es como un asistente personal inteligente.

Su misión: Administrar el estado de los datos, la caché y la interfaz.

¿Qué hace por ti?

Caché: Si buscas "Naruto", vas a otra página y vuelves, React Query te muestra los datos al instante porque ya los tiene guardados. No vuelve a molestar a la API.

Estados automáticos: Te da variables como isLoading (¿está cargando?), isError (¿falló?), y data (los resultados). No tienes que crear 3 useState manualmente.

Sincronización: Si los datos cambian, él puede refrescarlos por detrás sin que el usuario se dé cuenta.



***


# Ahora lo principal de la exposición, react Router 7

React router tiene 3 modos:
* Declarativo (el que estamos viendo)
* modo de data 
* modo framework

Solo veremos el modo declarativo porque es el más sencillo de aplicar

### ¿Cuáles son los pasos de instalación?

1- Ir a la documentación oficial y escoger el modo que vamos a trabajar (declarativo en nuestro caso)

[Documentacion aqui](https://reactrouter.com/start/declarative/installation)

2- ejecutar los siguientes comandos 
```
# Para crear el proyecto
npm create-vite@latest

# instalar la dependencia de react-router
npm i react-router 
```

3- Usar el componente ```<BrowserRouter>``` para envolver la app en ``main.tsx`` ó crear un solo archivo que gestione las rutas. En este caso optaremos por el archivo para mantener lo más limpio posible main y que todo esté en un solo lugar

```
# creamos AppRouter.tsx (puedes ponerle el nombre que quieras, pero este es más descriptivo)

import { Route, Routes, BrowserRouter } from 'react-router'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

          <Route path="/" element={<PaginaQuePongas />}
          >

            </Routes>
        </BrowserRouter>
    )
}
```
Eso es lo mínimo para que funcione react router, declaramos solo una ruta que tiene de path "/" y el elemento es lo que se renderiza cuando entra a ese path



4- Llevar ``AppRouter.tsx`` a ``App.tsx``
```
import './index.css'

import { AppRouter } from './AppRouter'

function App() {


  return (
    <>
      <AppRouter />

    </>
  )
}

export default App

```

¡Perfecto! ya tenemos react router funcionando

¿Que usaremos en la clase?


* ``<Link>``: es la versión mejorada de la etiqueta ``<a>`` de html, este componente no recarga la página cuando se le hace click haciendo que sea una mejor experiencia para el usuario  

declaracion:
```
<Link to="/miruta" > ingrese el texto para el enlace </Link>
```
#

* ``<Route>``: define una ruta de forma individual 

declaracion:
```
<Route path="/casa" element={<ComponenteDeReact />} />
```
#

* ``<Routes>`` Contiene todas las rutas que vamos a definir con ``<Route>`` 


#

``<NavLink>``: funciona como en componente Link, pero este tiene props como: active? y pending? esta vez usaremos active que sirve para aplicar estilos en caso de que la url en la que estamos posicionados coincida con la que está en el NavLink

declaracion:
```
 <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-700" : 'text-gray-600'}> inicio </NavLink>
```

#

```<Outlet />``: sirve como marcador de posición  dentro de un componente padre para renderizar rutas anidadas (hijas). Es fundamental para crear layouts compartidos, permitiendo que elementos estáticos (como menús, encabezados o barras laterales) permanezcan fijos mientras el contenido interior cambia dinámicamente según la URL.

 Layouts comunes: Mantiene componentes fijos (Layout) sin desmontarlos ni volver a renderizarlos al cambiar de página hija.

Como usarlo en un componente padre:
 ```
 import { Outlet } from "react-router";

export function Auth() {
    return (
        <div className="bg-gray-300">
            <h1> hola soy el padre</h1>
            <Outlet />
        </div >
    );
}
 ```
en AppRouter.tsx:
 ```
  <Route path='/auth' element={<Auth />} >

                    #index sirve para que el primer elemento renderizado sea LoginPage
            <Route index element={<LoginPage />} />

             <Route path='/auth/registro' element={<RegisterPage />} />

      </Route>
 ```


# 

* ``useParams``: sirve para leer los parámetros en la url ejem: anime/2

Nombres de Parámetros: Deben coincidir con los definidos en la ruta ej. path="/products/:productId" -> const { productId } = useParams()

```
import { useParams } from 'react-router-dom';

function UserProfile() {
  // Si la ruta es /user/:id y la URL /user/123, id será "123"
  const { id } = useParams(); 

  return <div>ID del usuario: {id}</div>;
}


# en las rutas va así:

<Route path="/producto/:id" element={<Producto />} />

```
#

* ``useNavigate`` sirve para navegar programáticamente entre rutas en una aplicación React (cambiar de página sin usar ``<Link>)``. Es ideal para redirecciones automáticas tras acciones del usuario, como enviar un formulario, hacer clic en un botón, o autenticación. 

uso y declaracion:
```
const navigate = useNavigate();

# en una funcion: 
 const pruebaButton = () => {
       
        navigate("/");
    }

    #Para volver atrás:
    navigate(-1)

```