// Variaveis de nome
let pratoEscolhido = null;
let bebidaEscolhida = null;
let sobremesaEscolhida = null;

// Variaveis de preço
let precoPratoEscolhido = 0;
let precoBebidaEscolhida = 0;
let precoSobremesaEscolhida = 0;

// Desabilita o botão inicialmente
let botaoPedido = document.querySelector(".button-pedido");
botaoPedido.disabled = true;


function clicadoPrato(nomePrato, nomePratoExibido) {
    //Add um numero em frente ao "prato" para saber qual prato está sendo clicado
    for (let i = 1; i <= 3; i++) {
    
          //Verifica qual prato está sendo clicado e muda a borda dele
        if( nomePrato === '.prato'+i){
            let prato = document.querySelector(nomePrato);
            prato.classList.toggle("borda-verde");

            let check = document.querySelector('.icone-prato'+i);
            check.classList.toggle("escondido");

            if(prato.classList.contains("borda-verde") === true){
                // Armazena o nome do prato escolhido
                pratoEscolhido = nomePratoExibido;
                console.log(pratoEscolhido);

                //Armazena o preço do prato escolhido
                precoPratoEscolhido = parseFloat(document.querySelector(".prato"+i+" .precoPrato").innerHTML.replace(",",".")).toFixed(2);
                console.log(precoPratoEscolhido);
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
function clicadoBebida(nomeBebida, nomeBebidaExibido) {

    //Add um numero em frente ao "prato" para saber qual prato está sendo clicado
    for (let i = 1; i <= 3; i++) {
    
          //Verifica qual prato está sendo clicado e muda a borda dele
        if( nomeBebida === '.bebida'+i){
            let bebida = document.querySelector(nomeBebida);
            bebida.classList.toggle("borda-verde");

            let check = document.querySelector('.icone-bebida'+i);
            check.classList.toggle("escondido");
            
            if(bebida.classList.contains("borda-verde") === true){
                // Armazena o nome do prato escolhido
                bebidaEscolhida = nomeBebidaExibido;
                console.log(bebidaEscolhida);
                //Armazena o preço do prato escolhido
                precoBebidaEscolhida = parseFloat(document.querySelector(".bebida"+i+" .precoBebida").innerHTML.replace(",",".")).toFixed(2);
                console.log(precoBebidaEscolhida);

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
function clicadoSobremesa(nomeSobremesa, nomeSobremesaExibido) {

    //Add um numero em frente ao "prato" para saber qual prato está sendo clicado
    for (let i = 1; i <= 3; i++) {
    
          //Verifica qual prato está sendo clicado e muda a borda dele
        if( nomeSobremesa === '.sobremesa'+i){
            let sobremesa = document.querySelector(nomeSobremesa);
            sobremesa.classList.toggle("borda-verde");

            let check = document.querySelector('.icone-sobremesa'+i);
            check.classList.toggle("escondido");
            
            if(sobremesa.classList.contains("borda-verde") === true){
                // Armazena o nome do prato escolhido
                sobremesaEscolhida = nomeSobremesaExibido;
                console.log(sobremesaEscolhida);
                //Armazena o preço do prato escolhido
                precoSobremesaEscolhida = parseFloat(document.querySelector(".sobremesa"+i+" .precoSobremesa").innerHTML.replace(",",".")).toFixed(2);
                console.log(precoSobremesaEscolhida);
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

// Verifica se os 3 tipos esão selecionados
function estaSelecionado(pratoSelecionado, bebidaSelecionado, sobremesaSelecionado){
    let isChecked;
    if(pratoSelecionado !== null && bebidaSelecionado !== null && sobremesaSelecionado !== null){
        isChecked = true;
    }else{
        isChecked = false;
    }
    return isChecked;
}
// Muda a cor do botão
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

 let nomeComprador = null;
 let enderecoComprador = null;
function validarPedido(){
    // Perguntar o nome e endereço do comprador - BÔNUS
    let nome = prompt("Qual o seu nome?");
    let endereco = prompt("Qual o seu endereço?")

    nomeComprador = nome;
    enderecoComprador = endereco;

    // Habilita a tela de confirmação - BÔNUS
    let habilitarTela = document.querySelector(".caixa-confirmacao");
    habilitarTela.classList.remove("escondido");
    


    //Muda o nome e o valor do prato na tela de confirmação
    let mudarPrato = document.querySelector(".prato-pedido");
    mudarPrato.innerHTML = pratoEscolhido;
    let mudarPrecoPrato = document.querySelector(".prato-pedido-valor");
    mudarPrecoPrato.innerHTML = precoPratoEscolhido.replace(".",",");

    //Muda o nome e o valor da bebida na tela de confirmação
    let mudarBebida = document.querySelector(".bebida-pedido");
    mudarBebida.innerHTML = bebidaEscolhida;
    let mudarPrecoBebida = document.querySelector(".bebida-pedido-valor");
    mudarPrecoBebida.innerHTML = precoBebidaEscolhida.replace(".",",");

    //Muda o nome e o valor da sobremesa na tela de confirmação
    let mudarSobremesa = document.querySelector(".sobremesa-pedido");
    mudarSobremesa.innerHTML = sobremesaEscolhida;
    let mudarPrecoSobremesa = document.querySelector(".sobremesa-pedido-valor");
    mudarPrecoSobremesa.innerHTML = precoSobremesaEscolhida.replace(".",",");

    // Muda o valor do total
    let mudarValorTotal = document.querySelector(".valor-total-pedido");
    mudarValorTotal.innerHTML ="R$ "+calculoSomaPreco(precoPratoEscolhido,precoSobremesaEscolhida,precoBebidaEscolhida).replace(".",",");
}

function confirmarPedido(){

    // Msg que sera enviada p/ whatsapp
    let texto = "Olá, gostaria de fazer o pedido:\n - Prato: "+pratoEscolhido+" \n - Bebida: "+bebidaEscolhida+" \n - Sobremesa: "+sobremesaEscolhida+" \n Total: R$ "+calculoSomaPreco(precoPratoEscolhido,precoSobremesaEscolhida,precoBebidaEscolhida).replace(".",",") +"\n\n Nome: "+nomeComprador+"\n Endereço: "+enderecoComprador;

    texto= window.encodeURIComponent(texto);
    window.open("https://wa.me/5524998197200?text="+texto,'_blank')
}

function cancelarPedido(){
    let desabilitarTela = document.querySelector(".caixa-confirmacao");
    desabilitarTela.classList.add("escondido");
}

function calculoSomaPreco(num1,num2,num3){
    let soma =0;
    soma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
    return soma.toFixed(2);
}
