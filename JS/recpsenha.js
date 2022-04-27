$("#submit-btn").click((event)=>{
    
    event.preventDefault()
    const controller = new RecpSenhaController();
    try{
        controller.verificaEmail('email-field');
        alert('Email enviado com sucesso!')
    }catch(e){
        alert('Email inválido!')
    }
})