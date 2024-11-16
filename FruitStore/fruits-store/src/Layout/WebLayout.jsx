import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'
 import Home from '../pages/Home'
 import HomeCarousel from '../components/HomeCarousel'

const WebLayout = () => {
  return (
    <>
    <div className=''>
        <Navbar/>
        <div className=" flex flex-row gap-0  justify-start items-center">
        <div className="w-[18vw] h-screen flex  left-0 top-0">
        <Leftbar/></div>
         <div className=" gap-5 flex justify-end items-end  flex-row left-0 top-0">
          
        <Home/>
        </div>
        <div className="flex flex-row justify-end items-start gap-8 w-screen h-full">
                <HomeCarousel />
                </div> 

        </div>

        <Outlet />

    </div></>
  )
}

export default WebLayout