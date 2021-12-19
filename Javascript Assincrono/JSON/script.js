// fetch('./dados.json')
// .then(response => response.json())
// .then(body =>{
// body.forEach(materia=> {
//     console.log(materia.id)
//     console.log(materia.aula)
//     console.log(materia.tempo)
// });
// })


/* o objeto json tem dois métodos*/




/* json.parse() irá transformar uma string de texto e se ela parecer com um arquivo json ele vai transformar em um objeto javascript*/

fetch('./dados.json')
.then(response => response.text())
.then(body =>{
    const jsonFinal = JSON.parse(body)
    console.log(jsonFinal)
})


/* json.stringfy pega um objeto javascript e transforma em uma string que se parece com json*/

const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 Javascript",
}

const stringConfig = JSON.stringify(configuracoes)

console.log(stringConfig)