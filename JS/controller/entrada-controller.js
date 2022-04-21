class Entrada{
    constructor(){

    }

    processamentoDeInputDeTexto(field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);
        
        const isValid = model.validarNome(input);

        if (isValid.includes('ERROR')){
            view.entradaInvalida(input);
        }
    }
}

const controller = new Entrada();

$("#submit-btn").click((event)=>{
    // console.log(event);
    controller.processamentoDeInputDeTexto('name-field');
    controller.processamentoDeInputDeTexto('surname-field');

})