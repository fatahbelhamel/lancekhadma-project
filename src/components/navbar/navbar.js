import React from 'react';
import {useRef, useState} from 'react';

const Navbar = (props) => {
  const subMenu = useRef();
  const items = useRef();
  const [classe, setClasse] = useState(true);

  const dropDownMenu = (e)=>{
    e.preventDefault();
    subMenu.current.classList.remove("hidden");
  }
  const unDropDownMenu = (e)=>{
    e.preventDefault();
    subMenu.current.classList.add("hidden");
  }
  const ShowItems = (e)=>{
    e.preventDefault();
    items.current.classList.toggle("translate-x-60");
    setClasse(items.current.classList.contains("translate-x-60"));
    console.log(items.current.classList.contains("translate-x-60"));
  }

  return (
    <div>
    	<nav class="flex justify-between items-center pr-10 pl-10 pt-5 pb-5 bg-black absolute top-0 left-0 right-0 h-70 z-30 text-white capitalize">
        <div>
          <h1 class="font-bold text-2xl">lanceKhadma</h1>
        </div>
        <div class="2xl:flex 2xl:justify-end lg:relative lg:top-0 lg:right-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:w-3/4 lg:pt-0 lg:translate-x-0 max-md:flex  max-sm:flex flex-col fixed top-0 right-0 pl-5 pt-16 w-60 min-h-full text-white bg-black translate-x-60 transition delay-100 duration-500 ease-in-out" ref={items}>
          <div class="2xl:mr-5">
            <ul class="relative z-30">
              <li class="font-bold hover:text-orange-600 cursor-pointer transition delay-100 ease-out lg:pt-0 pt-3 lg:mb-0 mb-7" onMouseEnter={dropDownMenu} onMouseLeave={unDropDownMenu} >categories</li>
               <ul class="absolute top-10 -ml-20 bg-white text-black w-60 text-center p-3 z-30 rounded-sm hidden transition delay-100 ease-out" ref={subMenu}>
                  <li class="pb-5 cursor-pointer">Design & Creative</li>
                  <li class="pb-5 cursor-pointer">Design & Creative</li>
                  <li class="pb-5 cursor-pointer">Design & Creative</li>
                  <li class="cursor-pointer">Design & Creative</li>
                </ul>
            </ul>
          </div>
          <div>
            <ul class="lg:flex lg:justify-between lg:flex-row flex-col">
              <li class="lg:mr-5 lg:mb-0 mb-5 cursor-pointer hover:text-orange-600">Home</li>
              <li class="lg:mr-5 lg:mb-0 mb-5 cursor-pointer hover:text-orange-600">Browse jobs</li>
              <li class="lg:mr-5 lg:mb-0 mb-5 cursor-pointer hover:text-orange-600">Blog</li>
              <li class="lg:mr-5 lg:mb-0 mb-5 cursor-pointer hover:text-orange-600">Lang</li>
            </ul>
          </div>
           <div>
            <ul class="flex">
              <li class="lg:mr-5 hover:text-orange-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:block hidden">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </li>
              <li class="lg:mr-5 lg:mb-0 hover:text-orange-600 transition delay-100 ease-out cursor-pointer mb-7">Become a seller</li>
            </ul>
          </div>
          <div class="lg:flex lg:flex-row max-sm:flex-col">
            <button class="mr-5 hover:text-orange-600 transition delay-100 ease-out">Login</button>
            <button class="p-2 bg-white text-black rounded-3 border-orange-300 hover:bg-orange-600 hover:text-white transition delay-100 ease-out">Signe up</button>
          </div>
        </div>  
        <div class="lg:hidden cursor-pointer z-40" onClick={ShowItems} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 transition delay-100 duration-500 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" 
            d={ 
              classe ?
              "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" 
              :
              "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"

            } />
          </svg>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;