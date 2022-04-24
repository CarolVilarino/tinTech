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

    validaCpf(input){
        this.verificaTamanhoMinimo(input, 11)
        const cpfArr = input.split('');
        
        const dgtVerificador2 = cpfArr.pop();
        const dgtVerificador1 = cpfArr.pop();
        const cpfArrNumbers = cpfArr.map((element) => parseInt(element))

        this.etapasValidacaoCPF(1, cpfArrNumbers,dgtVerificador1);
        cpfArrNumbers.push(parseInt(dgtVerificador1));
        this.etapasValidacaoCPF(2, cpfArrNumbers,dgtVerificador2);
    }

    etapasValidacaoCPF(etapa, cpfArrNumbers, dgtVerificador){
        let arrayDeValidacao;
        switch (etapa){
            case 1:
                arrayDeValidacao = [10,9,8,7,6,5,4,3,2];
                break
            case 2:
                arrayDeValidacao = [11,10,9,8,7,6,5,4,3,2];
                break
        }

        const restoDaDivisao = cpfArrNumbers.reduce((prev, current, index) => {
            return prev + (current * arrayDeValidacao[index])
        }, 0) * 10 % 11

        let result = restoDaDivisao;
        switch (result){
            case 10:
                result = 0;
                break;
            case 11:
                result = 0;
                break;
        }
        if (result  != dgtVerificador) throw new Error('[ERRO] CPF inválido')
    }

    validarEmail(input){
        const email = input.val();
        if(email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.length < 5) return false
        return true
    }

    validaData(input){
        const currentDate = new Date;
        input = input.slice(0,4)
        if (parseInt(currentDate.getFullYear()) - parseInt(input) < 16) throw Error()
    }

    verificaSenha(entrada){
        this.verificaTamanhoMinimo(entrada, 8);
        const arrSenha = entrada.split('')

        let hasSpecialCharacter = false;
        let hasNumber = false;
        let hasLowerCase = false;
        let hasUpperCase = false;

        arrSenha.forEach((element) => {
            console.log(element)
            if ((/\W|_/).test(element)) hasSpecialCharacter = true;
            if ((/[0-9]/).test(element)) hasNumber = true;
            if ((/[a-z]/).test(element)) hasLowerCase = true;
            if ((/[A-Z]/).test(element)) hasUpperCase = true;
        })

        if (!hasSpecialCharacter && !hasNumber && !hasLowerCase && !hasUpperCase) return false;
        return true; 
    }
}