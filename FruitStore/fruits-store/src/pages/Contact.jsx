import React from 'react'
import { Mail, Phone, Pin } from 'lucide-react'
const Contact = () => {
  return (
    <>
      <div className='w-screen h-full flex flex-col justify-center items-center'>
      <br></br>
        <div className='w-full top-5 h-35 flex justify-center items-center text-3xl text-green-500 font-semibold'>
          Contact Us
        </div>
        <div className='w-[75%] h-[25rem] shadow-lg flex flex-row justify-center items-center'>
          <div className='h-[90%] w-1/2 flex flex-col justify-center items-center gap-4'>
            <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md'>
              <Mail className='h-8 w-8 text-green-600' />
              <h1>abc@gmail.com</h1>
            </div>
            <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md'>
              <Phone className='h-8 w-8 text-green-600' />
              <h1>9876543210</h1>
            </div>
            <div className='h-[31%] w-[70%] border rounded-md flex flex-col justify-center items-center text-lg font-semibold gap-4 shadow-md'>
              <Pin className='h-8 w-8 text-green-600' />
              <h1 className='text-center'>1/11 ,asd,dfg <br /> wert</h1>
            </div>
          </div>
          <div className='h-full w-80 flex flex-col justify-center items-center'>
            <div className='h-screen w-full flex flex-col justify-center items-center text-lg font-semibold'>
              <h1 className='w-[80%] text-left my-5 font-bold text-green-600'>Get in touch</h1>
              <form className='h-[60%] w-[80%] flex flex-col justify-center items-center gap-6'>
                <input type="text" name="" id="" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm' />
                <input type="email" name="" id="" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm' />
               
                <input type="tel" name="" id="" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm' />
                <input type="message" name="" id="" placeholder='Message' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-2 focus:shadow-lg focus:border-b-2 focus:border-lime-400 rounded-sm' />
                  </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact