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