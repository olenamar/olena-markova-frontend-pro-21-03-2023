const elPokemons = document.querySelector('.pokemons');
const modalPopup = document.querySelector('.modal')

fetch('https://pokeapi.co/api/v2/pokemon',{
    method: 'GET'
})
    .then(res => res.json())
    .then(res => namePakemons(res.results))

function namePakemons(pokemons){
    pokemons.forEach(item => {
        const itemPokemon = document.createElement('span');
        itemPokemon.addEventListener('click', openPokemon);
        itemPokemon.className = 'data';
        itemPokemon.innerText = `${item.name}`;
        elPokemons.append(itemPokemon);
    })
}

function openPokemon(event){
    const dataPokemon = event.target.innerText
    fetch(`https://pokeapi.co/api/v2/pokemon/${dataPokemon}`,{
        method: 'GET'
    })
    .then(res => res.json())
    .then(res => popup(res))
}

function popup(item){
    for(let i = 0; i < modalPopup.children.length; i++){
        modalPopup.lastElementChild.remove();
    }
    const popupElement = document.createElement('div');
    const pName = document.createElement('span');
    pName.innerText = `${item.name}`;
    const pHeight = document.createElement('span');
    pHeight.innerText = `Height: ${item.height}`;
    const pWeight = document.createElement('span');
    pWeight.innerText = `Weight: ${item.weight}`;
    const img = document.createElement('img');
    const btnClose = document.createElement('button');
    btnClose.innerText = 'Сlose'
    btnClose.addEventListener('click', () => {
        popupElement.style.display = 'none'
    });   
    popupElement.className = 'information';
    img.src = item.sprites.front_default;
    modalPopup.append(popupElement);
    popupElement.append(pName, pHeight, pWeight, img, btnClose);
}