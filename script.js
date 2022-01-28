

function clicadoPrato(nomePrato) {

    //Add um numero em frente ao "prato" para saber qual prato está sendo clicado
    for (let i = 1; i <= 3; i++) {
    
          //Verifica qual prato está sendo clicado e muda a borda dele
        if( nomePrato === '.prato'+i){
            let prato = document.querySelector(nomePrato);
            prato.classList.toggle("borda-verde");

            let check = document.querySelector('.icone-prato'+i);
            check.classList.toggle("escondido");
            
            console.log("toggle prato"+i); //  remover no commit

            // Verifica e qual prato não ta sendo clicado e remove a borda dele
            for (let j = 1; j <= 3; j++) {
                if ( i != j){
                    let remove = document.querySelector('.prato'+j);
                    remove.classList.remove("borda-verde");

                    let removeIcon = document.querySelector('.icone-prato'+j);
                    removeIcon.classList.add("escondido");

                    console.log("remove prato"+j); //  remover no commit
                }
            }
        }

    }
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
            
            
            console.log("toggle bebida"+i); //  remover no commit

            // Verifica e qual prato não ta sendo clicado e remove a borda dele
            for (let j = 1; j <= 3; j++) {
                if ( i != j){
                    let remove = document.querySelector('.bebida'+j);
                    remove.classList.remove("borda-verde");
                    
                    let removeIcon = document.querySelector('.icone-bebida'+j);
                    removeIcon.classList.add("escondido");

                    console.log("remove bebida"+j); //  remover no commit
                }
            }
        }

    }
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
            
            console.log("toggle sobremesa"+i); //  remover no commit

            // Verifica e qual prato não ta sendo clicado e remove a borda dele
            for (let j = 1; j <= 3; j++) {
                if ( i != j){
                    let remove = document.querySelector('.sobremesa'+j);
                    remove.classList.remove("borda-verde");

                    let removeIcon = document.querySelector('.icone-sobremesa'+j);
                    removeIcon.classList.add("escondido");


                    console.log("remove sobremesa"+j); //  remover no commit
                }
            }
        }

    }
}
