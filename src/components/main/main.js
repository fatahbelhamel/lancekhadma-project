import React from 'react';
import {useRef} from "react";

const Main = (props) => {

  const subMenu = useRef();
  const dropDownMenu = (e)=>{
    e.preventDefault();
    subMenu.current.classList.toggle("hidden");
  }

  return (
    <div class="relative">
      <div class="h-screen overflow-hidden z-0">
        <img class="object-cover h-screen w-screen" src="/image/banerBack.jpg" alt="baner background"/>
      </div>
      <div class="absolute top-0 left-0 right-0 bottom-0 bg-neutral-5 text-red-500 z-5" style={{background:"rgba(0,0,0,.6)"}}></div>
      <div class="absolute inset-y-1/3 left-10">
        <div class="mb-7"><h1 class="text-5xl text-white w-2/3">Hire the best freelancers for any job,online</h1></div>
        <div class="mb-7"><h4 class="text-white opacity-70">a lot of people use lancekhadma.com to turn their ideas into reality</h4></div>
        <div class="bg-white w-4/5 p-6 lg:flex lg:flex-row lg:justify-between lg:items-center max-md:flex max-sm:flex flex-col justify-center">
          <div class="flex items-center md:w-full lg:mb-0 mb-5">
            <svg class="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input class="border-none focus:outline-none p-2 relative" type="search" name="search" placeHolder="What are you looking for?"/>
          </div>
          <div class="relative w-full lg:mb-0 mb-5">
              <p class="flex justify-between items-center cursor-pointer transition delay-100 ease-out" onClick={dropDownMenu}>
                <span class="">Categories</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </p>
             <ul class="absolute lg:left-12 lg:mt-0 mt-5 left-20 -top-20 -ml-20 bg-white text-black w-60 text-center p-3 z-30 rounded-sm hidden transition delay-100 ease-out" ref={subMenu} style={{top:"-220px"}}>
                <li class="pb-5">Design & Creative</li>
                <li class="pb-5">Design & Creative</li>
                <li class="pb-5">Design & Creative</li>
                <li>Design & Creative</li>
             </ul> 
          </div>  
          <div class="w-full"> 
             <button class="bg-orange-600 text-white rounded-sm pl-6 pr-6 pt-2 pb-2 lg:w-40 lg:ml-10 w-full">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

  

export default Main;