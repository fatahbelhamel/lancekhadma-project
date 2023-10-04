import Categorie from "./categorie.js";
import Data_Categories from "../../data/data.js";

const Categories = ()=>{
	return (
      <div class="p-10 mt-20">
        <div>
          <h1 class="text-4xl">Browse services by category</h1>
        </div>
        <div class="float-right flex items-center hover:text-orange-600 cursor-pointer">
          <a href="/" class="text-l mr-2">All Categories</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </div> 
        <div class="mt-20 flex flex-row flex-wrap lg:justify-between md:justify-center items-center">
         {
          Data_Categories.map((category,key)=>{
            return (
            <Categorie key={category.id} name={category.name} description={category.desc} image={category.img} />
            )
          })
         }
        </div> 
      </div>
		)
}

export default Categories;