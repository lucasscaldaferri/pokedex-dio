const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 15
const limit = 5
let offset = 0;





function loadPokemonsItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="mundo ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="statistic">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>` ).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonsItens(offset, limit)
    

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordsWithNexPage = offset + limit

    if(qtdRecordsWithNexPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonsItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonsItens(offset, limit) 
    }


                                                               
})
  




    

