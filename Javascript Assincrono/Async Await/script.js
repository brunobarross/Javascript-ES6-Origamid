// async function puxarDados(){
//     try{
//         const responseDados = await fetch('./dados.json')
//         const jsonDados = await responseDados.json();
//         console.log(jsonDados)
    
//         document.body.innerText = jsonDados.aula;
//     } catch(erro){
//         console.log(erro)
//     }

// }

// puxarDados()


//iniciar fetch ao mesmo tempo

async function puxarDados(){

        const responseDados =  fetch('./dados.json')
        const responseCliente = fetch('./clientes.json')

        // const responseDados = await(promiseDados);
        const jsonDados = await (await responseDados).json();
        const jsonCliente = await (await responseCliente).json();
        console.log(jsonDados)
        console.log(jsonCliente)
}

puxarDados()