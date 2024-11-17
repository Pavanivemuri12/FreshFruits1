import { NavLink } from "react-router-dom";
import { User, X } from "lucide-react";
import { useState } from "react";

const AdminTopBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const Linksdata = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      title: "Categories",
      hasDropdown: true,
      path: "/admin/categories",
    },
    {
      title: "Orders",
      path: "/admin/about",
    },
    {
      title: "Users",
      path: "/admin/users",
    },
  ];

  const allFruitss = [
    {
      title: "BasicFruits",
      path: "/admin/basicfruits",
    },
    {
      title: "DryFruits",
      path: "/admin/dryfruits",
    },
    {
      title: "ExoticFruits",
      path: "/admin/exoticfruits",
    },
    {
      title: "FruitBasket",
      path: "/admin/fruitbasket",
    },
    {
      title: "OrganicFruits",
      path: "/admin/organicfruits",
    },
    {
      title: "SeasonalFruits",
      path: "/admin/seasonalfruits",
    },
  ];
  // const handleLogin = async (e) => {
  //     e.preventDefault()
  //     const credentials = {
  //         email: emailRef.current.value,
  //         password: passwordRef.current.value
  //     }
  //     try {
  //         const response = await Login(credentials)
  //         const data = await JSON.stringify(response.data)
  //         if (response.status === 200) {
  //             const token = response.data.token
  //             // console.log(response.data.token)
  //             toast.success("Login Success")
  //             setShowLogin(false)
  //             storeToken(token)
  //             if (token) {
  //                 const role = getRole()
  //                 if (role === "ADMIN") {
  //                     //navigate to dashboard
  //                     navigate('/admin/dashboard')
  //                 } else if (role === "USER") {
  //                     //navigate to products
  //                     navigate('/products')
  //                 }
  //             }
  //         } else {
  //             console.log("Login Error" + data)
  //         }

  //     } catch (error) {
  //         if (error.response && (error.response.status === 401 || error.response.status === 400)) {
  //             toast.warning(error.response.data.message)
  //         } else {
  //             toast.error("Server Error")
  //         }
  //     }

  //     console.log(credentials)
  // }

  // const handleRegister = async (e) => {
  //     e.preventDefault()
  //     const credentials = {
  //         name: nameRef.current.value,
  //         phone: phoneRef.current.value,
  //         email: emailRef.current.value,
  //         password: passwordRef.current.value

  //     }
  //     try {
  //         const response = await Register(credentials)
  //         const data = await JSON.stringify(response.data)
  //         if (response.status === 200) {
  //             console.log("Signup Success" + data)
  //             toast.success("Signup Success")
  //             setShowRegister(false)
  //             setShowLogin(true)
  //         }
  //         else {
  //             toast.error("Error while signup")
  //         }

  //     } catch (error) {
  //         // console.error(error)
  //         if (error.response && (error.response.status === 409 || error.response && error.response.status === 400)) {
  //             toast.warning(error.response.data.message)
  //         } else {
  //             toast.error("Server Error")
  //         }
  //     }

  //     console.log(credentials)
  // }
  const switchAuth = () => {
    if (showLogin) {
      setShowLogin(false);
      setShowRegister(true);
    } else if (showRegister) {
      setShowLogin(true);
      setShowRegister(false);
    }
  };
  return (
    <>
      <div className="w-full h-14 shadow-lime-300  bg-lime-500 shadow-md flex flex-row justify-center items-center">
        <div className="w-[40%] flex justify-start items-center font-bold text-2xl text-white">
          Fresh Fruits
        </div>
        {/* <div className='w-[40%] h-full flex justify-end items-center gap-15 '>
                    <div className='w-full h-full flex flex-row justify-end items-center  space-x-12 font-bold'>
                        {Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-white hover:text-lime-600 text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                            
                            
                        ))
                        } */}
                        <div className='w-[40%] h-full flex justify-end items-center gap-15 '>
                        <div className='w-full h-full flex flex-row justify-end items-center  space-x-12 font-bold'>
        <div className=" ">
          <div className="relative flex items-start justify-start space-x-8 text-white">
            {Linksdata.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <NavLink
                  to={link.path || "#"}
                  className="h-5 text-lg font-semibold text-white py-3 px-5 hover:text-black hover:bg-lime-500 transition duration-200"
                >
                  {link.title}
                </NavLink>

                {/* Dropdown Menu */}
                {link.hasDropdown && isDropdownOpen && (
                  <div className="absolute  left-0 mt-2 bg-white shadow-xl rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col">
                      {allFruitss.map((category, idx) => (
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
      </div>
      <button
        className="h-9 w-9 flex justify-center items-center border-2  rounded-full hover:bg-white hover:border-lime-600 hover:text-lime-600 ml-4 shadow-md"
        onClick={() => {
          setShowLogin(!showLogin);
        }}
      >
        <User className="h-6 w-6 text-white hover:text-lime-500" />
      </button>
      </div>
            </div>

      {showLogin && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
          <div className="h-[60%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md">
            <div className="h-full w-full flex flex-col justify-center items-center text-lg font-semibold">
              <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                <h1 className="w-1/2 text-left text-xl my-6 font-bold text-lime-600">
                  Login
                </h1>
                <div
                  className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer"
                  onClick={() => {
                    setShowLogin(!showLogin);
                  }}
                >
                  <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                </div>
              </div>
              <form className="h-[80%] w-[80%] flex flex-col justify-center items-center gap-6">
                {/* onSubmit={handleLogin}> */}
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Email"
                  className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm"
                  required
                />
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Password"
                  className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-lime-400 bg-lime-600 text-white rounded-sm outline-none"
                >
                  Login
                </button>
              </form>
              <div className="h-[10%] w-[80%] flex justify-center items-start">
                <p
                  className="cursor-pointer text-lime-500 hover:text-lime-600"
                  onClick={switchAuth}
                >
                  Register ?
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {showRegister && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
          <div className="h-[75%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md">
            <div className="h-full w-full flex flex-col justify-center items-center text-lg font-semibold">
              <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                <h1 className="w-1/2 text-left text-xl my-6 font-bold text-lime-500">
                  Register
                </h1>
                <div
                  className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer"
                  onClick={() => {
                    setShowRegister(!showRegister);
                  }}
                >
                  <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                </div>
              </div>
              <form className="h-[100%] w-[80%] flex flex-col justify-center items-center gap-6">
                {/* onSubmit={handleRegister}> */}
                <input
                  type="text"
                  name=""
                  id="name"
                  placeholder="Name"
                  className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-600 rounded-sm"
                  required
                />
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Email"
                  className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-600 rounded-sm"
                  required
                />
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Password"
                  className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-600 rounded-sm"
                  required
                />
                <input
                  type="number"
                  name=""
                  id="phone"
                  placeholder="Phone"
                  className="w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-600 rounded-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full h-[3rem] shadow-lg shadow-gray-400 hover:shadow-lime-600 bg-lime-600 text-white rounded-sm outline-none"
                >
                  Register
                </button>
              </form>
              {/* <div className="h-[10%] w-[80%] flex justify-center items-start">
                                <p className="cursor-pointer text-purple-500 hover:text-purple-600" onClick={switchAuth}>Login ?</p>
                            </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminTopBar;
