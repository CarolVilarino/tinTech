class ValidaEntrada{
    constructor(){

    }

    validarNome(entrada){

        if (entrada === null) throw new Error('[ERROR] Valor inválido')
        const caracteresEspeciaisAceitos = 'áàâãòóôõèéêìíîúùûç '
        try{
            entrada.val().split('').forEach(element => {
                if ((/\W|_/).test(element) && !caracteresEspeciaisAceitos.includes(element.toLowerCase())) throw Error();
            });
        } catch(e){
            return '[ERROR] Valor inválido';
        }
    }
}