import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'

const WebLayout = () => {
  return (
    <>
    <div className=''>
        <Navbar/>
        <div className="w-screen h-screen flex flex-row justify-start items-center">
        <div className="w-[18vw] h-screen flex flex-col left-0 top-0">
        <Leftbar/>
        </div>
        </div>
        <Outlet />
    </div></>
  )
}

export default WebLayout