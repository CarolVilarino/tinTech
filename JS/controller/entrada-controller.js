class Entrada{
    constructor(){

    }

    processamentoDeInputDeTexto(field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);
        
        const isValid = model.validarNome(input);

        switch (isValid){
            case false:
                view.entradaInvalida(input);
                break;
            case true:
                view.entradaValida(input);
        }
        // if (!isValid){
            
        // }
    }

    processamentoDeCPF(){
    }

    processamentoDeCEP(field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);

        try{
            const isValid = model.validarNumero(input).then((result) => {
                console.log(result)
                switch (result){
                    case false:
                        view.entradaInvalida(input);
                        break;
                    case true:
                        view.entradaValida(input);
                }
            }).catch((err)=>{
                console.log('erro')
            })
        }catch(e){
            view.entradaInvalida(input);
        }
    }
    

    processamentoDeNumeros(field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);

        const isValid = model.validarNumero(input);

        switch (isValid){
            case false:
                view.entradaInvalida(input);
                break;
            case true:
                view.entradaValida(input);
        }
    }

    verificandoTamanho(field, maxLength, event){
        const view = new EntradaView();
        view.apagaExtra(field, maxLength, event);
    }
}

const controller = new Entrada();

$("#submit-btn").click((event)=>{
    // console.log(event);
    controller.processamentoDeInputDeTexto('name-field');
    controller.processamentoDeInputDeTexto('surname-field');

    controller.processamentoDeNumeros('rg-field');
    controller.processamentoDeNumeros('tel-field');
    controller.processamentoDeNumeros('cpf-field');
    controller.processamentoDeCEP('cep-field');

})


$("#cep-field").keydown((event)=>{    
    controller.verificandoTamanho('cep-field', 8, event)
})