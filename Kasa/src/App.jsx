import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RentalPresentation from "./pages/RentalPresentation/RentalPresentation.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import FindOutMore from './pages/FindOutMore/FindOutMore.jsx'


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RentalPresentation />} />
                {/*Une route dynamique pour chaque page de logement*/}
                <Route path="/findoutmore" element={<FindOutMore />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
