import { BrowserRouter,Route,Routes } from "react-router-dom";
import WebLayout from "./Layout/WebLayout";
import Home from "./pages/Home"
import Location from "./pages/Location";
import Contacts from "./pages/Contacts";


const App = () => {
    return (
        <>
 <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contacts />} />
                    <Route path='/location' element={<Location />} />
                    </Route>
                  
                </Routes> 
            </BrowserRouter>
        </>
    )}
    export default App