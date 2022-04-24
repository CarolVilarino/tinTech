class ValidaEntrada{
    constructor(){
        this.information = {};
    }

    
    validarNome(entrada, isNumberAllowed){
        try{
            if (entrada.val() === '') throw Error()
            const caracteresEspeciaisAceitos = 'áàâãòóôõèéêìíîúùûç '
            entrada.val().split('').forEach(element => {
                if ((/\W|_/).test(element) && !caracteresEspeciaisAceitos.includes(element.toLowerCase())) throw Error();
                if (!isNumberAllowed && (/[0-9]/).test(element)) throw Error();
            });
            return true;
        } catch(e){
            return false;
        }
    }

    verificaTamanhoMinimo(entrada, minLength){
        if (entrada.length < minLength) throw Error()
    }

    validarNumero(entrada){
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
        }
    }

    infosCepValido(response){
        this.information.bairro = response.bairro;
        this.information.cidade = response.localidade;
        this.information.uf = response.uf;
        this.information.rua = response.logradouro;
        this.information.error = false;
    }

    infosCepInvalido(){
        this.bairro = '';
        this.cidade = '';
        this.uf = '';
        this.rua = '';
        this.error = true;
    }

    validaCpf(){

    }

    validarEmail(input){
        const email = input.val();
        if(email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.length < 5) return false
        return true
    }

    validaData(input){
        const currentDate = new Date;
        input = input.slice(0,4)
        if (parseInt(currentDate.getFullYear()) - parseInt(input) < 18) throw Error()
    }


}