const controller = new Entrada();

$("#submit-btn").click((event)=>{
    // console.log(event);
    controller.processamentoDeInputDeTexto('name-field', false);
    controller.processamentoDeInputDeTexto('surname-field', false);
    controller.processamentoDeInputDeTexto('nacionalidade-field', false);
    controller.processamentoDeInputDeTexto('complemento-field', true);

    controller.processamentoDeNumeros('rg-field');
    controller.processamentoDeNumeros('tel-field');
    controller.processamentoDeNumeros('cpf-field');
    controller.processamentoDeCEP('cep-field');

})


$("#cep-field").keydown((event)=>{    
    controller.verificandoTamanho('cep-field', 8, event)
})