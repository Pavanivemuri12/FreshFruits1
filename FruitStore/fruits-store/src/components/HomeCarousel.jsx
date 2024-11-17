import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const HomeCarousel = () => {
  return (
    <>

      <Carousel showThumbs={false} showStatus={false}>
        <div className="relative object-cover h-[50vh]">

          <img className=" w-[50vw]  object-cover flex justify-center align-center " src="https://image3.jdomni.in/banner/03052022/91/49/0A/4E3668C9F39FBA5C082152C735_1651572466566.png?output-format=webp" />
          {/* <p className="legend">Mobiles</p> */}

          {/* <div className="absolute left-5 bottom-2 flex flex-col bg-white rounded-md"> 
             <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left"> */}
          {/* <div>
                  <h2 className="text-sm font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Mobiles
                  </h2>
                </div> */}
          {/* <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-purple-600">
                      40%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div> */}
          {/* </div>
            </div> 
          </div> */}
        </div>
        <div>
          <img className="h-[98vh] object-cover absolute bottom-0" src="https://eatanytime.in/cdn/shop/articles/close-up-healthy-nuts-wooden-background-generative-ai.jpg?v=1702453505&width=1100" />
          {/* <p className="legend">Laptops</p> */}
          {/* <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Laptops
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-purple-600">
                      30%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <img className="h-[98vh] object-cover" src="https://i.pinimg.com/736x/94/cf/b4/94cfb45349111297e8871c217305f66c.jpg" />
          {/* <p className="legend">TV</p> */}
          {/* <div className="absolute left-2 bottom-2 flex flex-col bg-white rounded-md">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    Smart Watches
                  </h2>
                </div>
                <div className="mt-6">
                  <p>
                    <span className="text-5xl font-semibold tracking-tight text-purple-600">
                      50%
                    </span>
                    <span className="text-base font-medium text-gray-500"> offer </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
       
      </Carousel>

    </>
  )
}

export default HomeCarousel