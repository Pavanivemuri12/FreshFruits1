import { BrowserRouter,Route,Routes } from "react-router-dom";
import WebLayout from "./Layout/WebLayout";
import ProductLayout from "./Layout/ProductLayout";
import Home from "./pages/Home"
import Location from "./pages/Location";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import BasicFruits from "./pages/BasicFruits";
import DryFruits from "./pages/DryFruits";
import ExoticFruits from "./pages/ExoticFruits";
import OrganicFruits from "./pages/OrganicFruits";
import SeasonalFruits from "./pages/SeasonalFruits";
import FruitBaskets from "./pages/FruitBaskets";
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
                    <Route path='/dryfruits' element={<DryFruits />} />
                    <Route path='/exoticfruits' element={<ExoticFruits />} />
                    <Route path='/organicfruits' element={<OrganicFruits />} />
                    <Route path='/seasonalfruits' element={<SeasonalFruits />} />
                    <Route path='/fruitbasket' element={<FruitBaskets />} />
                    </Route>
                </Routes> 
            </BrowserRouter>
        </>
    )}
    export default App