import { BrowserRouter,Route,Routes } from "react-router-dom";
import WebLayout from "./Layout/WebLayout";
import ProductLayout from "./Layout/ProductLayout";
import Home from "./pages/Home"
import Location from "./pages/Location";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import BasicFruits from "./pages/BasicFruits";


const App = () => {
    return (
        <>
 <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contacts />} />
                    <Route path='/location' element={<Location />} />
                    <Route path='/about' element={<About/>} />     
                    </Route>
                    <Route element={<ProductLayout />}>
                    <Route path='/basicfruits' element={<BasicFruits />} />
                    </Route>
                </Routes> 
            </BrowserRouter>
        </>
    )}
    export default App