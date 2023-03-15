import React from "react";

import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home, {locationsLoader} from "./pages/Home/index";
import FicheDetail from "./pages/FicheDetail/index";
import Apropos from "./pages/apropos/index";
import "./index.css"

import Error404 from "./pages/error404/index";
import BaseLayout from "./components/BaseLayout";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <BaseLayout/> } errorElement={<Error404 />}> 
        <Route index element={<Home />} loader={locationsLoader} />
        <Route path="fichedetail" element={<FicheDetail />} />
        <Route path="apropos" element={<Apropos />} />
    </Route>
)) 

function App() {
    return (
        <RouterProvider router={router} /> 

       


        // <div className="App">
        //    <Navigation />
           
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/FicheDetail" element={<FicheDetail />} />
        //         <Route path="/apropos" element={<Apropos />} />
        //         <Route path="/*" element={<Error404 />} />
        //     </Routes>
        //     <Footer />
        // </div>
    )
}

export default App;