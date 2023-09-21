import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {

  return (
    <>
        <BrowserRouter>
            <Navbar />

            <Routes>
                {/* Une route logement*/}
                {/*Une route dynamique pour chaque page de logement*/}
                {/*Page 404 : Route path="*" element={<NotFound />}*/}
            </Routes>

            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
