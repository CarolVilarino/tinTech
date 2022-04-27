const controller = new Entrada();
$("#submit-btn").click((event)=>{
    event.preventDefault();
    try{
        controller.processamentoDeEmail('email-field');
        controller.processamentoDeSenha('password-field');
        alert('Login Successful!')
    } catch(e){
        console.error(e)
    }
})