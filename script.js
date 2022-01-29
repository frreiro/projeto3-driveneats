let pratoEscolhido = null;
let bebidaEscolhida = null;
let sobremesaEscolhida = null;

let botaoPedido = document.querySelector(".button-pedido");
botaoPedido.disabled = true;


function clicadoPrato(nomePrato) {
    //Add um numero em frente ao "prato" para saber qual prato está sendo clicado
    for (let i = 1; i <= 3; i++) {
    
          //Verifica qual prato está sendo clicado e muda a borda dele
        if( nomePrato === '.prato'+i){
            let prato = document.querySelector(nomePrato);
            prato.classList.toggle("borda-verde");

            let check = document.querySelector('.icone-prato'+i);
            check.classList.toggle("escondido");

            if(prato.classList.contains("borda-verde") === true){
                  pratoEscolhido = "prato"+i;

            }else{
                 pratoEscolhido = null;

            }

            // Verifica qual prato não ta sendo clicado e remove a borda dele
            for (let j = 1; j <= 3; j++) {
                if ( i != j){
                    let remove = document.querySelector('.prato'+j);
                    remove.classList.remove("borda-verde");


                    let removeIcon = document.querySelector('.icone-prato'+j);
                    removeIcon.classList.add("escondido");

                }
            }
        }

    }
    mudarCorBotao();

}
function clicadoBebida(nomeBebida) {

    //Add um numero em frente ao "prato" para saber qual prato está sendo clicado
    for (let i = 1; i <= 3; i++) {
    
          //Verifica qual prato está sendo clicado e muda a borda dele
        if( nomeBebida === '.bebida'+i){
            let bebida = document.querySelector(nomeBebida);
            bebida.classList.toggle("borda-verde");

            let check = document.querySelector('.icone-bebida'+i);
            check.classList.toggle("escondido");
            
            if(bebida.classList.contains("borda-verde") === true){
                bebidaEscolhida = "bebida"+i;
            }else{
                bebidaEscolhida = null;

            }

            // Verifica e qual prato não ta sendo clicado e remove a borda dele
            for (let j = 1; j <= 3; j++) {
                if ( i != j){
                    let remove = document.querySelector('.bebida'+j);
                    remove.classList.remove("borda-verde");
                    
                    let removeIcon = document.querySelector('.icone-bebida'+j);
                    removeIcon.classList.add("escondido");

                }
            }
        }

    }
    mudarCorBotao();
}
function clicadoSobremesa(nomeSobremesa) {

    //Add um numero em frente ao "prato" para saber qual prato está sendo clicado
    for (let i = 1; i <= 3; i++) {
    
          //Verifica qual prato está sendo clicado e muda a borda dele
        if( nomeSobremesa === '.sobremesa'+i){
            let sobremesa = document.querySelector(nomeSobremesa);
            sobremesa.classList.toggle("borda-verde");

            let check = document.querySelector('.icone-sobremesa'+i);
            check.classList.toggle("escondido");
            
            if(sobremesa.classList.contains("borda-verde") === true){
                sobremesaEscolhida = "sobremesa"+i;
            }else{
                sobremesaEscolhida = null;
            }

            // Verifica e qual prato não ta sendo clicado e remove a borda dele
            for (let j = 1; j <= 3; j++) {
                if ( i != j){
                    let remove = document.querySelector('.sobremesa'+j);
                    remove.classList.remove("borda-verde");

                    let removeIcon = document.querySelector('.icone-sobremesa'+j);
                    removeIcon.classList.add("escondido");


                }
            }
        }

    }
    mudarCorBotao();
}


function estaSelecionado(pratoSelecionado, bebidaSelecionado, sobremesaSelecionado){
    let isChecked;
    if(pratoSelecionado !== null && bebidaSelecionado !== null && sobremesaSelecionado !== null){
        isChecked = true;
    }else{
        isChecked = false;
    }
    return isChecked;
}


 function mudarCorBotao(){

    if (estaSelecionado(pratoEscolhido, bebidaEscolhida,sobremesaEscolhida ) == true){
        //Ativa o button
        botaoPedido.disabled = false;

        // Troca o design do button
        let alterarBotao = document.querySelector(".button-pedido");
        alterarBotao.classList.add("pedido-fechado");
        // Altera o Texto do button
        let alterarTextoBotao = document.querySelector(".fechar-pedido");
        alterarTextoBotao.innerHTML = "Fechar Pedido";
    }   else{
        //Desativa o button
        botaoPedido.disabled = true;

        // Troca o design do button
        let pedidoFechado = document.querySelector(".button-pedido");
        pedidoFechado.classList.remove("pedido-fechado");

        // Altera o Texto do button
        let alterarTextoBotao = document.querySelector(".fechar-pedido");
        alterarTextoBotao.innerHTML = "Selecione os 3 itens<br/> para fechar o pedido";
    }

        
 }



function validarPedido(){
    console.log("Clicado");

    let texto = "Olá, gostaria de fazer o pedido:\n - Prato: Frango Yin Yang \n - Bebida: Coquinha Gelada \n - Sobremesa: Pudim \n Total: R$ 27.70"

    texto= window.encodeURIComponent(texto);
    console.log(texto);


    window.open("https://wa.me/5524998197200?text="+texto,'_blank')
}







// function clicadoPrato(nomePrato) {

//     const selecionado = document.querySelector(".caixa-pratos .borda-verde");
//     // Verifica quem está selecionado e remove a borda verde
//     if(selecionado !== null){
//         selecionado.classList.remove("borda-verde");
//     }   
//     // Add a borda verde
//     let prato = document.querySelector("."+nomePrato);
//     prato.classList.toggle("borda-verde");
    

//     let checkSelecionado = document.querySelector('.caixa-pratos .icone-'+nomePrato);
//     checkSelecionado.classList.remove("escondido");

// }


// function clicadoBebida(nomeBebida) {

//     const selecionado = document.querySelector(".caixa-bebidas .borda-verde");
//     if(selecionado !== null){
//         selecionado.classList.remove("borda-verde");
//     }   
//     let prato = document.querySelector(nomeBebida);
//     prato.classList.toggle("borda-verde");
// }

// function clicadoSobremesa(nomeSobremesa) {

//     const selecionado = document.querySelector(".caixa-sobremesa .borda-verde");
//     if(selecionado !== null){
//         selecionado.classList.remove("borda-verde");
//     }   
//     let prato = document.querySelector(nomeSobremesa);
//     prato.classList.toggle("borda-verde");
// }