class Entrada{
    constructor(){

    }

    processamentoDeInputDeTexto(field, isNumberAllowed){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);
        
        const isValid = model.validarNome(input, isNumberAllowed);

        switch (isValid){
            case false:
                view.entradaInvalida(input);
                break;
            case true:
                view.entradaValida(input);
        }
    }

    processamentoDeEmail(field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);
        
        const isValid = model.validarEmail(input);
        switch (isValid){
            case false:
                view.entradaInvalida(input);
                throw new Error('[ERROR] Email inválido')
            case true:
                view.entradaValida(input);
        }
    }

    processamentoDeData(field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);
        const data = input.val()
        try{
            const isValid = model.verificaTamanhoMinimo(data, 10);
            model.validaData(data)
            switch (isValid){
                case false:
                    view.entradaInvalida(input);
                    break;
                case true:
                    view.entradaValida(input);
            }
        } catch(e){
            view.entradaInvalida(input);
        }
    }

    processamentoDeCPF(field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);
        const cpf = input.val();
        try{
            model.validaCpf(cpf);
            view.entradaValida(input);
        } catch(e){
            view.entradaInvalida(input);
        }
    }

    processamentoDeCEP(field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);
        const cep = input.val();
       
        try{
            model.verificaTamanhoMinimo(cep, 8)
            $(document).ready(()=>{
                $.ajax(
                    {url: `https://viacep.com.br/ws/${cep}/json/`, 
                    success: response => {
                        if (!("erro" in response)) {
                            model.infosCepValido(response);
                            view.entradaValida(input);
    
                            const information = model.information;
                            view.escreveInfosCep(information)
                            view.FormatacaoCepEntradas(view.entradaValida);
                        } else {
                            model.infosCepInvalido(response);
                            view.entradaInvalida(input);
                            const information = model.information;
                            view.escreveInfosCep(information);
                            view.FormatacaoCepEntradas(view.entradaInvalida);
                        }
                    },
                    error: (err) => {
                        view.entradaInvalida(input);
                        view.FormatacaoCepEntradas(view.entradaInvalida);
                    }
                })
            })
        } catch(e){
            const information = model.information;
            view.escreveInfosCep(information)
            view.entradaInvalida(input);
            view.FormatacaoCepEntradas(view.entradaInvalida);
        }
    }
    

    processamentoDeNumeros(field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);

        const isValid = model.validarNumero(input);

        switch (isValid){
            case false:
                view.entradaInvalida(input);
                break;
            case true:
                view.entradaValida(input);
        }
    }

    verificandoTamanho(field, maxLength, event){
        const view = new EntradaView();
        view.apagaExtra(field, maxLength, event);
    }

    processamentoDeSenha(field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const input = $(`#${field}`);
        const senha = input.val();
        
        try{
            model.verificaSenha(senha);
            view.entradaValida(input);
        } catch(e){
            view.entradaInvalida(input);
            throw new Error('[ERROR] Senha inválida')
        }
    }
    
    processamentoConfirmacao(baseField, field){
        const model = new ValidaEntrada();
        const view = new EntradaView();

        const senha = $(`#${baseField}`).val(); 
        const input = $(`#${field}`);
        const confirmacaoSenha = input.val();
        try{
            model.confirmacaoDeSenha(senha, confirmacaoSenha);
            view.entradaValida(input);
        } catch(e){
            view.entradaInvalida(input);
        }
    }
}
