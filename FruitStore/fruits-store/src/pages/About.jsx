import React from 'react'

const About = () => {
  return (
    <>
   
      
      <div className="relative h-[400px] w-full">
  {/* Background Image */}
  <img className="h-[68vh] w-[100vw] top-10 bottem-10 object-cover flex justify-center align-center " src="https://static.vecteezy.com/system/resources/thumbnails/037/944/263/small_2x/ai-generated-fresh-ripe-fruit-and-strawberry-water-drops-splash-photo.jpg" />
  {/* Overlay Text */}
  <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
    <div className="text-center text-white">
      <h2 className="text-5xl font-semibold mb-4">ABOUT US</h2>
      {/* <p className="text-xl font-medium">Your Subheading</p> */}
    </div>
  </div>
</div>
<div>
  <h1 class="text-5xl font-semibold text-black mb-4"  >Welcome to Fresh Fruits an eCommerce website</h1>
  <p class="text-1xl  text-black">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<br></br>
<p class="text-1xl  text-black">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
<br></br>
<button data-ripple-light="true" type="button" className="w-[15%] select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Shop Now
                    </button>
</div>
<div>
<div class="bg-white-50 py-6 px-4 flex items-center justify-between">

<div>

  <h2 class="text-xl font-semibold text-gray-800">Subscribe to our Newsletter</h2>

  <p class="text-gray-500">Get e-mail updates about our latest shops and special offers</p>

</div>



<form class="flex items-center  w-full max-w-md ">

  <input 

  type="email" 

    placeholder="Enter email address" 

    class="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-green-300"

  />

  <button 

    type="submit" 

    class="bg-green-500 text-white px-5 py-3 rounded-r-lg font-medium hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">

    Subscribe

  </button>

</form>

</div>
</div>
<div>
<div className="relative h-[400px] w-full">
  {/* Background Image */}
  <img className="h-[68vh] w-[100vw] top-10 bottem-10 object-cover flex justify-center align-center " src="https://i.pinimg.com/736x/c8/3b/2e/c83b2e66b2f3243dcc52fd4ba8909309.jpg" />
  {/* Overlay Text */}
  <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
    <div className="text-center text-black">
      <div className='flex flex-row space-x-20'>
   
   <div className='flex flex-col'>
      <h4 className="text-5xl font-sans-serif mb-4">10,000</h4>
       <p className="text-xl font-sans-serif">happy customers</p> 
       </div>
       <div className='flex flex-col'>
      <h4 className="text-5xl font-sans-serif mb-4">100</h4>
       <p className="text-xl font-sans-serif">branches</p> 
       </div>
       <div className='flex flex-col'>
      <h4 className="text-5xl font-sans-serif mb-4">10</h4>
       <p className="text-xl font-sans-serif">partners</p> 
       </div>
       <div className='flex flex-col'>
      <h4 className="text-5xl font-sans-serif mb-4">100</h4>
       <p className="text-xl font-sans-serif">awards</p> 
       </div> 
      </div>
    </div>
  </div>
</div>
</div>
</>
)
}

export default About