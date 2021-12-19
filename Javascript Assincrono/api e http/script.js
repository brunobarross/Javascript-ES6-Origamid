// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(r => r.json())
// .then(pokemon => {
//   console.log(pokemon);
// });

// const url = 'https://jsonplaceholder.typicode.com/posts/';

// const options = {
//     //por padrão é GET(geralmente o que o front lida)
//     method: 'POST',
//     body: '{ "title": "Javascript"}',
//     headers: {
//         "Content-Type": "application/json; charset=utf-8",
//     }
// }

// fetch(url, options)
// .then(response => response.json())
// .then(json => console.log(json))

//get - puxa informação, utilizado para pegar posts, usuarios e etc
//post - utilizado para criar posts, usuários e etc
// put - geralmente utilizado para atualizar informações
// delete - deleta uma informação
// head - puxa apenas os headers


// header é uma forma do servidor mandar informação pro browser ou vice e versa



//CORS- acordo entre browser e servidor, ou servidor x servidor pra definir quem deve ou não acessar, porém é possíveL violar usando PROXY


const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com'


fetch(url)
.then((response)=>{
    return console.log(response)
})