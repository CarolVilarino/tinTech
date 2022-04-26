
$("#newsletter-btn").click((event)=>{
    window.location.href='#root'
    const div = $("#popup-div");
    div.addClass('darken');

    const formDiv = $("<div>");
    formDiv.attr('id', 'newsletter-form')
    formDiv.addClass('newsletter-form')

    const form = $("<form>");

    const closeBtn = $("<button>")
    closeBtn.addClass('close-btn')
    closeBtn.attr('id', 'close-btn')
    closeBtn.text('X')

    const fieldset = $("<fieldset>")
    const label = $("<label>")
    label.text('Insira o seu e-mail: ')
    const input = $("<input type='email'>")
    fieldset.append(label, input)

    const submitBtn = $("<button>")
    submitBtn.attr('id','inscrevase')
    submitBtn.text('Inscreva-se!')

    form.append(closeBtn, fieldset, submitBtn)
    formDiv.append(form)
    div.append(formDiv)

    $("#close-btn").click((event) =>{
        console.log(event)
        $("#newsletter-form").remove()
        div.removeClass('darken')
    })
    
})


