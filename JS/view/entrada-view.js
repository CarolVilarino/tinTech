class EntradaView{

    entradaInvalida(entrada){
        entrada.css('border-color', 'red')
    }

    entradaValida(entrada){
        entrada.css('border-color', '')
    }

    apagaExtra(field, maxLength, event){
        let keysEntered
        if ($(`#${field}`).val().length == maxLength && event.originalEvent.key !== 'Backspace'){
            keysEntered = $(`#${field}`).val().split('');
            keysEntered.shift()
            $(`#${field}`).val(keysEntered.join(''));
        }
    }

    escreveInfosCep(information){
        $("#uf-field").val(information.uf);
        $("#cidade-field").val(information.cidade);
        $("#bairro-field").val(information.bairro);
        $("#rua-field").val(information.rua);
    }

    FormatacaoCepEntradas(func){
        func($("#uf-field"))
        func($("#cidade-field"))
        func($("#bairro-field"))
        func($("#rua-field"))
    }
}

class NewsLetterView{
    voltaTelaParaBody(){
        window.location.href='#root'
    }

    criaCenarioParaCard(field){
        this.mostraDiv(field);
        this.escondeOverflow();
    }

    mostraDiv(field){
        const div = $(`#${field}`);
        div.css('display','flex');
    }

    escondeOverflow(){
        const body = $("#root")
        body.css('overflow','hidden')
    }

    escondeDiv(field){
        const div = $(`#${field}`);
        div.css('display','none');
    }

    mostraOverflow(){
        const body = $("#root")
        body.css('overflow','visible')
    }
}