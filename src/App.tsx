import Header from "./components/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import {Container} from "react-bootstrap";
import {Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <>
    <ToastContainer/>
      <Router>
        <Header/>
        <Container style={{minHeight: '100vh', minWidth: '100%', padding: '0'}}>
          <Suspense fallback = {<Loader/>}></Suspense>

          <AppRoutes/>
        </Container>
        <Footer/> 
      </Router>
    </>
  );
}

export default App;
