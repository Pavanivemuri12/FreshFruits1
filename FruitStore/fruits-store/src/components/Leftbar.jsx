import { useState } from 'react';
import { NavLink } from "react-router-dom"


const Leftbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
    const Linksdata = [
      { title: 'All Categories',
         hasDropdown: true }
    ]  
     const allFruits = [ {
            title: 'BasicFruits',
            path: '/basicfruits'
        },
        {
            title:'DryFruits',
            path:'/dryfruits'
        },
        {
            title: 'ExoticFruits',
            path: '/exoticfruits'
        },
        {
            title: 'FruitBaskets',
            path: '/fruitbaskets'
        },
        {
            title: 'OrganicFruits',
            path: '/organicfruits'
        },
        {
            title: 'SeasonalFruits',
            path: '/seasonalfruits'
        }]
    return (
        <>
       
       <div className=' z-10 h-9 w-full  bg-white shadow-md flex flex-row justify-start items-center'>
         <div className="relative flex items-start justify-start space-x-8">
           {Linksdata.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
            >
              <NavLink
                to={link.path || '#'}
                className="h-5 text-lg font-semibold text-lime-500 py-3 px-5 hover:text-white hover:bg-lime-500 transition duration-200"
              >
                {link.title}
              </NavLink>

              {/* Dropdown Menu */}
              {link.hasDropdown && isDropdownOpen && (
                <div className="absolute  left-0 mt-2 bg-white shadow-xl rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col">
                    {allFruits.map((category, idx) => (
                      <NavLink
                        key={idx}
                        to={category.path}
                        className="text-lime-700 py-2 px-2 h- hover:bg-lime-100 font-semibold rounded-md transition duration-150"
                      >
                        {category.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
    </div>
      </>
      )}
      export default Leftbar
      

//            {/* {showLogin && (
//                 <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
//                     <div className='h-[60%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
//                         <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
//                             <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
//                                 <h1 className='w-1/2 text-left text-xl my-6 font-bold text-purple-500'>Login</h1>
//                                 <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowLogin(!showLogin) }}>
//                                     <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
//                                 </div>
//                             </div>
//                             <form className='h-[90%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleLogin}>
//                                 <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
//                                 <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
//                                 <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-purple-400 bg-purple-500 text-white rounded-sm outline-none">Login</button>
//                             </form>
//                             <div className="h-[15%] w-[80%] flex justify-center items-start gap-2">
//                                 <p className="cursor-pointer text-purple-500 hover:text-purple-600" onClick={switchAuth}>Register ?</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )
//             }
//               {showRegister && (
//                 <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
//                     <div className='h-[75%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
//                         <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
//                             <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
//                                 <h1 className='w-1/2 text-left text-xl my-6 font-bold text-purple-500'>Register</h1>
//                                 <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowRegister(!showRegister) }}>
//                                     <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
//                                 </div>
//                             </div>
//                             <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleRegister}>
//                                 <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
//                                 <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
//                                 <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
//                                 <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
//                                 <button type="submit" className="w-full h-[10rem] shadow-lg shadow-gray-400 hover:shadow-purple-400 bg-purple-500 text-white rounded-sm outline-none">Register</button>
//                             </form>
//                             <br/>
//                             <div className="h-[10%] w-[80%] flex justify-center items-start">
//                                 <p className="cursor-pointer text-purple-500 hover:text-purple-600" onClick={switchAuth}>Login ?</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )
//             } */}

//         </>
//     )
// }

// export default Leftbar

// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from 'lucide-react'


// export default function Leftbar() {
//     return (
//         <Menu as="div" className="relative inline-block text-left">
//             <div>
//                 <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//                     Options
//                     <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
//                 </MenuButton>
//             </div>

//             <MenuItems
//                 transition
//                 className="absolute text-black right-0 z-10 mt-2 w-56 text-black-500 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//             >
//                 <div className="py-1">
//                     <MenuItem>
//                         <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-green-500 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//                         >
//                             Account settings
//                         </a>
//                     </MenuItem>
//                     <MenuItem>
//                         <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//                         >
//                             Support
//                         </a>
//                     </MenuItem>
//                     <MenuItem>
//                         <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//                         >
//                             License
//                         </a>
//                     </MenuItem>
//                     <form action="#" method="POST">
//                         <MenuItem>
//                             <button
//                                 type="submit"
//                                 className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//                             >
//                                 Sign out
//                             </button>
//                         </MenuItem>
//                     </form>
//                 </div>
//             </MenuItems>
//         </Menu>
//     )
// }

// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

// export default function Leftbar() {
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//           Options
//           <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
//         </MenuButton>
//       </div>

//       <MenuItems
//         transition
//         className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//       >
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//             >
//               Edit
//             </a>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//             >
//               Duplicate
//             </a>
//           </MenuItem>
//         </div>
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//             >
//               Archive
//             </a>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//             >
//               Move
//             </a>
//           </MenuItem>
//         </div>
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//             >
//               Share
//             </a>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//             >
//               Add to favorites
//             </a>
//           </MenuItem>
//         </div>
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
//             >
//               Delete
//             </a>
//           </MenuItem>
//         </div>
//       </MenuItems>
//     </Menu>
//   )
// }


