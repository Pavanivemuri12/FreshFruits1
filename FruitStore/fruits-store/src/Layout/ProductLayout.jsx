
import {Outlet} from 'react-router-dom'
import BasicFruits from '../pages/BasicFruits'
import DryFruits from '../pages/DryFruits'
import ExoticFruits from '../pages/ExoticFruits'
import OrganicFruits from '../pages/OrganicFruits'
import SeasonalFruits from '../pages/SeasonalFruits'
import FruitBaskets from '../pages/FruitBaskets'
const ProductLayout = () => {
  return (
    <>
    <div className=''>
        
       

   
        
        <Outlet />

    </div>
    </>
  )
}

export default ProductLayout