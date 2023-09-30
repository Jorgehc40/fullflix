/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";


function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/detail" element={<Detail/>} />
                <Route path="*" element={<div><h2>Error 404 - Page is not found</h2></div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;