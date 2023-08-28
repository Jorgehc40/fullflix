import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/detail/detail";
import React from "react";



function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/src/pages/detail" element={<Detail/>} />
            </Routes>
        </BrowserRouter>
    
    )
}

export default Router;