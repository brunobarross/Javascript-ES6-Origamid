// iterator = para saber se é iteravel (symbo.iterator)

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));


//loop for of (faz loop por cada valor do objeto)
//só funciona em objeto iteravel 



const buttons = document.querySelectorAll('button')


for(const btn of buttons){
    btn.style.color = 'blue';
}

console.log(...buttons)


//loop em objeto nao iteravel pode ser feito com for in

// só puxa propriedades de objeto com enumerable true

const carro = {
    marca: 'Honda',
    ano: '2022'
}



for(const chave in carro){
    console.log(chave, carro[chave])
}



// o melhor para o array é o for of

const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);


for(const style in btnStyles){
    console.log(`${style}: ${btnStyles[style]} `)
}


// Do/While

let i = 0;

do{
    console.log(i++);
} while(i <= 5);