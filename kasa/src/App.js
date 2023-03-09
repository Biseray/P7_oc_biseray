import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import FicheDetail from "./pages/FicheDetail/index";
import Apropos from "./pages/apropos/index";
import Navbar from "./componants/Navbar";
import Banner from "./componants/Banner";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner /> 
            
        <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/FicheDetail" element={<FicheDetail />} />
                <Route path="/apropos" element={<Apropos />} />

        </Routes>
        </div>
    );
}

export default App;