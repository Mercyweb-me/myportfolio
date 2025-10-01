import React, { useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Body1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, 
      offset:200,
      delay:50,
      easing:"ease-in-out",
    }); 
  }, []);
  return (
    <>
    <nav className='shadow-lg sm:mx-20 w-50'>
      <div data-aos="fade-up" className='  bg-cover h-160 w-200 flex justify center flex-col  mx-70 my-30'>
     <div className=' my-70'>
      <h1 className='text-5xl  text-white  mx- flex justify-center items-center font-bold'>HI I'M MERCY</h1>
<p className=' text-2xl flex justify-center  my-1 mx-5 text-white'>A passionate designer with a focus on creating intutive and engaging user experiencs. i code,design and have a keen eye for detail. </p>
      </div>
        <button className='bg-blue-700 rounded-md text-3xl w-50 mx-50 my-'>View Projects</button>
      </div>
    
      </nav>
    </>
  );
}

export default Body1
