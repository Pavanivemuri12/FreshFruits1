
import {Outlet} from 'react-router-dom'
import BasicFruits from '../pages/BasicFruits'

const ProductLayout = () => {
  return (
    <>
    <div className=''>
        
       

   
        <div>
          <BasicFruits/>
        </div>
        <Outlet />

    </div>
    </>
  )
}

export default ProductLayout