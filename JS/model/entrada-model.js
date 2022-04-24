class ValidaEntrada{
    constructor(){
        this.error;
    }

    
    validarNome(entrada){

        if (entrada.val() === '') return false
        const caracteresEspeciaisAceitos = 'áàâãòóôõèéêìíîúùûç '
        try{
            entrada.val().split('').forEach(element => {
                if ((/\W|_/).test(element) && !caracteresEspeciaisAceitos.includes(element.toLowerCase())) throw Error();
                
            });
            return true;
        } catch(e){
            return false;
        }
    }

    validarNumero(entrada){
        //console.log(entrada[0].id, entrada.val())
        const inputId = entrada[0].id;
        if (entrada.val() === '') return false
        switch(inputId){
            case 'cpf-field':
                console.log('isso é um cpf')
                this.information.cpf = entrada.val();
                break;
            case 'tel-field':
                if (entrada.val().length !== 11) return false;
                this.information.tel = entrada.val();
                return true;
                
            case 'rg-field':
                if (entrada.val().length !== 9) return false;
                this.information.rg = entrada.val();
                return true;
            case 'cep-field':
                const promise = new Promise((resolve, reject)=>{
                    this.validadorDeCep(entrada.val())
                    setTimeout(() => {
                        resolve(this.error)
                    }, 500);
                }).then((response)=>{
                    console.log(response)
                        if(this.error === true) {
                            console.log('entrou aqui, erro = true')
                            return false
                        } else if (this.error === false){
                            console.log('entrou aqui, erro = false')
                            return true
                        }
                })
                return promise;
        }
    }

    validadorDeCep(cep){
        $(document).ready(()=>{
            $.getJSON(`https://viacep.com.br/ws/${cep}/json/?callback=?`, (response) => {
               
                if (!("erro" in response)) {
                    this.bairro = response.bairro;
                    this.cidade = response.localidade;
                    this.uf = response.uf;
                    this.rua = response.logradouro;
                    this.error = false;
                } else {
                    this.error = true;
                    console.log(this)
    
                }
                
            })
        })
    }
}