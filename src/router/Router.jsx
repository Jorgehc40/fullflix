import { BrowserRouter } from "react-router-dom";
import Detail from "../pages/home/details/details";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home>}/>
                <Route path="/detail" element={Detail}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;