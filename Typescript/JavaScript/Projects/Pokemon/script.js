const pokemonList = document.getElementById("pokemon-list")
function addPokemon(){
   const nameInput = document.getElementById("pokemon-name")
   const pokemonName= nameInput.value.trim()
   if(pokemonName){
    const pokemonCard = document.createElement('div');
    pokemonCard.className='pokemon'
    pokemonCard.innerHTML = `<h3>${pokemonName}</h3>
     <div class="image"></div>

    `;
    pokemonList.append(pokemonCard)
    nameInput.value="";
   }
   else{
    alert("Please enter a Pokémon name!");
   }
}
