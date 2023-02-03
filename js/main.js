$(document).ready(function() {
    $('#identidade-usuario').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep-usuario').mask('00.000-000');

        $('form button').on('submit', function(e) {
            e.preventDefault();

        $('form').validate({
            rules: {
                nome: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                telefone: {
                    required: true,
                },
                identidadeUsuario: {
                    required: true,
                },
                enderecoUsuario: {
                    required: true,
                },
                            cepUsuario: {
                    required: true,
                }
            },
            messages: {
                nome: 'Por favor, insira o seu nome.',
                email: 'Por favor, insira o seu e-mail.',
                telefone: 'Por favor, insira o seu telefone.',
                identidadeUsuario: 'Por favor, insira o seu CPF.',
                enderecoUsuario: 'Por favor, insira o endereço completo.',
                cepUsuario: 'Por favor, insira o CEP.',
            },
            submitHandler: function(form) {
                console.log(form)
            },
            invalidHandler: function(evento, validador) {
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            }
        })
    })
})