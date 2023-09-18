import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <>
        <BrowserRouter>
            {/* Accueil */}

            <Routes>
                {/* Une route logement*/}
                {/*Une route dynamique pour chaque page de logement*/}
                {/*Page 404 : Route path="*" element={<NotFound />}*/}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
