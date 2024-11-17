// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home
// import HomeCards from "../components/HomeCards"
//import HomeCarousel from "../components/HomeCarousel"
// import SocialCard from "../components/SocialCard"

// const Home = () => {
//     return (
       
//         <div>
//             hello
//             <div/>
       
//              {/* <div className="flex flex-row justify-end items-start gap-8 w-screen h-full">
//                 <HomeCarousel />
              
                
//             </div>  */}
      
//     )
// }

// export default Home
import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import HomeCards from '../components/HomeCards'
const Home = () => {
  return (
    <>
   
      <div className="flex flex-row justify-end items-start gap-8 w-screen h-full">
               <HomeCarousel />
               
                
            </div>  
            <br></br>
            <br></br>
           <div className='flex flex-row justify-end items-start gap-8 w-screen h-full'>
            <HomeCards/>
           </div>
            
             </>
  )
}

export default Home
