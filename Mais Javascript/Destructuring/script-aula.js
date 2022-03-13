const cliente = {
    nome: "Andre",
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['VideoJS', 'VideoCSS']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}

const {digitais, fisicas, digitais:livros, videos} = cliente.compras;

console.log(digitais, fisicas, livros)


// com arrays

const frutas= ['Banana', 'Uva', 'Maça']

const [primeira, segunda, terceira] = frutas;

// declaração de variáveis

const [primeiro, segundo, terceiro] = ['Variavel 1', 'Variavel 2', 'Variavel 3']

console.log(terceiro)



//com evento


function handleKeyboard({key, keyCode}){
    console.log(key, keyCode)

}

document.addEventListener("keyup", handleKeyboard);