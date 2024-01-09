import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Error from "./pages/Error/Error.jsx";
import About from './pages/About/About.jsx';
import PresentationLogement from "./pages/presentationLogement/PresentationLogement.jsx";


function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/logement/:id" element={<PresentationLogement />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
