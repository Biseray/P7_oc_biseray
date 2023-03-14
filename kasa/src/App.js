import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import FicheDetail from "./pages/FicheDetail/index";
import Apropos from "./pages/apropos/index";
import "./index.css"
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
           <Navigation />
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/FicheDetail" element={<FicheDetail />} />
                <Route path="/apropos" element={<Apropos />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;