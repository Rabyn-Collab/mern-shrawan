const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
  <div>
    <h1 className="font-semibold text-4xl sm:text-center">Who I'am</h1>
  </div>
  <div className="w-[400px] h-[400px] bg-black rounded-full mt-10 border-8 border-sky-900 flex justify-center items-center">

   <div className="flex flex-col ">
   <p className="text-white text-sm ">Name: Himal Pache Magar</p>
    <p className="text-white text-sm ">Email: pachemagarhimal@gamil.com</p>
    <p className="text-white text-sm">Tel: +977 9766453223</p>
    <p className="text-white text-sm">Experienced: Javascript, MongoDB, React,<br/> Node.js, Express.js</p>
   </div>



  </div>


</div>

  )
}

export default Footer