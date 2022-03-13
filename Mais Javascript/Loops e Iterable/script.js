// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const lista = document.querySelectorAll('.lista li');

for(const item of lista ){
    item.classList.add('ativou')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for( const chave in window){
    console.log(`${chave}: ${window[chave]}`)
}
