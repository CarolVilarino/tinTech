const controller = new Entrada();

$("#submit-btn").click((event)=>{
    // console.log(event);
    controller.processamentoDeInputDeTexto('name-field', false);
    controller.processamentoDeInputDeTexto('surname-field', false);
    controller.processamentoDeInputDeTexto('nacionalidade-field', false);
    controller.processamentoDeInputDeTexto('complemento-field', true);

    controller.processamentoDeEmail('email-field');
    controller.processamentoDeData('birthday-field')

    controller.processamentoDeNumeros('rg-field');
    controller.processamentoDeNumeros('tel-field');
    controller.processamentoDeCPF('cpf-field');
    controller.processamentoDeCEP('cep-field');

    controller.processamentoDeSenha('password-field');
    controller.processamentoConfirmacao('password-field','password2-field');
})


$("#cep-field").keydown((event)=>{    
    controller.verificandoTamanho('cep-field', 8, event)
})

$("#rg-field").keydown((event)=>{    
    controller.verificandoTamanho('rg-field', 9, event)
})

$("#cpf-field").keydown((event)=>{    
    controller.verificandoTamanho('cpf-field', 11, event)
})