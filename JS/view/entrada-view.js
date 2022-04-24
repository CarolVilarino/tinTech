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
}