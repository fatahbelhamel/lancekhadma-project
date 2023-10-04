const Categorie = (props)=>{
	return (
               <div class="w-72 mb-10 cursor-pointer">
                  <div class="p-2">
                    <img class="w-10 h-10 mb-5" src={props.image} alt="web dev"/>
                    <h2 class="text-2xl font-bold mb-2">{props.name}</h2>
                    <p class="text-gray-500">{props.description}</p>
                  </div>
                </div>
	)
}

export default Categorie;