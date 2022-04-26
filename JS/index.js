
$("#newsletter-btn").click((event)=>{
    const controller = new NewsLetterController();
    controller.criaTelaPopup('popup-div');

    $("#close-btn").click((event) =>{
        controller.escondePopup('popup-div')
    })
    
    $("#inscrevase-btn").click((event)=>{
        event.preventDefault();
        let errorCounter = 0;
        try{controller.processamentoDeNome('name-field')} 
        catch (e){
            errorCounter++
        }
        try{controller.processamentoDeEmail('email-field')}
        catch(e){
            errorCounter++
        }

        if(errorCounter > 0) return alert(`Campos inválidos: ${errorCounter}`) 
        alert('Cadastro Realizado com Sucesso!');
        
        controller.escondePopup('popup-div')
    })
    
})


