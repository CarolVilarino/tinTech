const controller = new Entrada();

$("#submit-btn").click((event)=>{
    // console.log(event);
    let errorCounter = 0;
    try{controller.processamentoDeInputDeTexto('name-field', false)}
    catch(e){errorCounter++};
        
    try{controller.processamentoDeInputDeTexto('surname-field', false)}
    catch(e){errorCounter++};

    try{controller.processamentoDeData('birthday-field');}
    catch(e){errorCounter++};

    try{controller.processamentoDeNumeros('rg-field');}
    catch(e){errorCounter++};

    try{controller.processamentoDeCPF('cpf-field');}
    catch(e){errorCounter++};

    try{controller.processamentoDeEmail('email-field');}
    catch(e){errorCounter++};

    try{controller.processamentoDeNumeros('tel-field');}
    catch(e){errorCounter++};

    try{controller.processamentoDeCEP('cep-field');}
    catch(e){errorCounter++};

    try{controller.processamentoDeInputDeTexto('nacionalidade-field', false);}
    catch(e){errorCounter++};

    try{controller.processamentoDeInputDeTexto('complemento-field', true);}
    catch(e){errorCounter++};
    
    try{controller.processamentoDeSenha('password-field');}
    catch(e){errorCounter++};

    try{controller.processamentoConfirmacao('password-field','password2-field');}
    catch(e){errorCounter++};

    errorCounter > 0? alert(`Campos inválidos: ${errorCounter}`) : alert('Cadastro efetuado com sucesso!');
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