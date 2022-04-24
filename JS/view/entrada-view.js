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