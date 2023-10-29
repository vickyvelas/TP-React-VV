//vamos a tener un componente que va a renderizar los componentes que pertenecen a la pagina de inicio

import AboutUs from "../components/AboutUs/AboutUs";
import CarouselHome from "../components/CarouselHome/CarouselHome";

const HomePage = () => {
    return (
        <>
            <CarouselHome></CarouselHome>
            <AboutUs></AboutUs>
        </>
    )
}

export default HomePage;

//instalar: npm i react-router-dom