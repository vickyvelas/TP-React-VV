import HomePage from "../pages/HomePage";
import {Route, Routes} from "react-router-dom";
import Componentes from "../pages/Componentes";
import Administracion from "../pages/Administracion";

const AppRoutes: React.FC = () =>{
    return (
        //contenedor de rutas, dentro estan las rutas particualres, por ejemplo para ir a la HomePage, path es para especificar la ruta y element para especificar que componente mostrar cuando la url coincida con el path
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/componentes" element={<Componentes/>}/>
            <Route path="/administracion" element={<Administracion/>}/>
        </Routes>

    );
}

export default AppRoutes;