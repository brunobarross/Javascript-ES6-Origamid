import initAnimaNumeros from './anima-numeros.js';
export default function initFetchAnimais() {
    async function fetchAnimais(url) {
        const animaisResponse = await fetch(url);
        const animaisJSON = await animaisResponse.json();
        animaisJSON.forEach(animal => {
            const divAnimal = createAnimal(animal)
            const numerosGrid = document.querySelector('.numeros-grid');
            numerosGrid.appendChild(divAnimal)
        });
        initAnimaNumeros()
    }
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `
        <h3>${animal.especie}</h3>
        <span>${animal.total}</span>
        `
        return div;
    }
    fetchAnimais('./animais.json');
}
