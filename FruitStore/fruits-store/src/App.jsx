import { BrowserRouter,Route,Routes } from "react-router-dom";
import WebLayout from "./Layout/WebLayout";
import AdminLayout from "./Layout/AdminLayout";
import ProductLayout from "./Layout/ProductLayout";
import Home from "./pages/Home"
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BasicFruits from "./pages/BasicFruits";

import DryFruits from "./pages/DryFruits";
import ExoticFruits from "./pages/ExoticFruits";
import OrganicFruits from "./pages/OrganicFruits";
import SeasonalFruits from "./pages/SeasonalFruits";
import FruitBaskets from "./pages/FruitBaskets";
import Admindashboard from "./pages/Admin/Admindashboard";
import NewlyAdded from "./pages/NewlyAdded";

import AdminBasicFruits from "./pages/Admin/AdminBasicFruits";
import AdminDryFruits from "./pages/Admin/AdminDryFruits";
import AdminExoticFruits from "./pages/Admin/AdminExoticFruits";
import AdminOrganicFruits from "./pages/Admin/AdminOrganicFruits";
import AdminSeasonalFruits from "./pages/Admin/AdminSeasonalFruits";
import AdminFruitBaskets from "./pages/Admin/AdminFruitBaskets";
<<<<<<< Updated upstream

=======
import AdminOrders from "./pages/Admin/AdminOrders"
>>>>>>> Stashed changes


const App = () => {
    return (
        <>
 <BrowserRouter>
                <Routes>
                    {/* <Route element={<WebLayout />}>
                    <Route path='/' element={<Home />} /> 
                    </Route> */}
                    <Route element={<WebLayout />}>
                    <Route path='/' element={<Home />} />
                    
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/location' element={<Location />} />
                    <Route path='/about' element={<About/>} />
                    <Route element={<ProductLayout />}>
                    
                    <Route path='/basicfruits' element={<BasicFruits />} />
                    <Route path='/dryfruits' element={<DryFruits />} />
                    <Route path='/exoticfruits' element={<ExoticFruits />} />
                    <Route path='/organicfruits' element={<OrganicFruits />} />
                    <Route path='/seasonalfruits' element={<SeasonalFruits />} />
                    <Route path='/fruitbasket' element={<FruitBaskets />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/location' element={<Location />} />
                    <Route path='/about' element={<About/>} />     
                    </Route>
                    </Route> 
                    <Route element={<AdminLayout/>}>
                        <Route path="/admin/dashboard" element={<Admindashboard/>}/>
                   
                    <Route path='/admin/basicfruits' element={<AdminBasicFruits />} />             
                    <Route path='/admin/dryfruits' element={<AdminDryFruits />} />
                    <Route path='/admin/exoticfruits' element={<AdminExoticFruits />} />
<<<<<<< Updated upstream
                    <Route path='/admin/organicfruits' element={<OrganicFruits />} />
                    <Route path='/admin/seasonalfruits' element={<SeasonalFruits />} />
                    <Route path='/admin/fruitbasket' element={<FruitBaskets />} />
=======
                    <Route path='/admin/organicfruits' element={<AdminOrganicFruits />} />
                    <Route path='/admin/seasonalfruits' element={<AdminSeasonalFruits />} />
                    <Route path='/admin/fruitbasket' element={<AdminFruitBaskets />} />
                    <Route path='/admin/orders' element={<AdminOrders />} />
>>>>>>> Stashed changes
                    </Route>
                </Routes> 
            </BrowserRouter>
        </>
    )}
    export default App