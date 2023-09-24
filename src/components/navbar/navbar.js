import React from 'react';

const navbar = (props) => {
  return (
    <div>
    	<nav class="flex justify-between items-center pr-10 pl-10 pt-5 pb-5 bg-black absolute top-0 left-0 right-0 h-70 z-10 text-white capitalize">
        <div>
          <h1 class="font-bold text-2xl">lanceKhadma</h1>
        </div>
        <div>
          <ul>
            <li class="font-bold">categories</li>
          </ul>
        </div>
        <div>
          <ul class="flex">
            <li class="mr-5">Home</li>
            <li class="mr-5">Browse jobs</li>
            <li class="mr-5">Blog</li>
            <li class="mr-5">Lang</li>
          </ul>
        </div>
         <div>
          <ul class="flex">
            <li class="mr-5 hover:text-orange-600 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </li>
            <li class="mr-5 hover:text-orange-600 transition delay-100 ease-out cursor-pointer">Become a seller</li>
          </ul>
        </div>
        <div>
          <button class="mr-5 hover:text-orange-600 transition delay-100 ease-out">Login</button>
          <button class="p-2 bg-white text-black rounded-3 border-orange-300 hover:bg-orange-600 hover:text-white transition delay-100 ease-out">Signe up</button>
        </div>
      </nav>
    </div>
  )
}

export default navbar;