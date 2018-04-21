/* BEM VINDO, MARINHEIRO 
   O desafio demorou mas saiu rápido
   Antes de tudo, leia todas as dicas e obersações no link do desafio
   ...
   *-* Todo conteudo dentro de $(document).ready( function() { ... } ); será execultado assim que carregar a página
*/

var count;

$(document).ready(function() {
    //Inserir um comando para deixar a div #alerta movel  (Dica: função da jqueryui)
    $('#alerta').draggable();
    //chamar a funcão chamada "contador"
    // contador();
    //Fazer a alerta aparecer depois de 5 segundos, chamando ã função toggleAlert
    count = setInterval(contador,1000);

    // $('.fa fa-times').click(toggleAlert());

    $("#novidadesform [type='submit']").click(function(e) {
        e.preventDefault();

        //criar uma variavel e pegar o conteudo digitado na input
        var campo = document.getElementById("inputemail").value;
        //verificar se o campo não está vazio com if e else
        if(campo == ""){
            toastr.error('Preencha um email!', 'Error!');
        }else{
            // alert(campo);
            $.ajax({
                url: 'http://51.254.204.44/ti/enviar_email.php', 
                type:'post',
                data:{'meuemail':campo},
                dataType:'JSON',
                success: function(retorno){
                    toastr.success(retorno.text,'Sucesso!');
                    $('.resultado').html(campo+' foi salvo em nossa lista de novidades =)');
                    $('#inputemail').val('');
                    setTimeout(toggleAlert,2000);
                },
                error: function(erro){
                    toastr.error(erro.responseText,'Error!');
                }
            })
            // toastr.success('Email salvo', 'Sucesso!');
            
        }



        //se for vazio execultar o comando abaixo
        //toastr.error('Preencha um email!', 'Error!');

        //se não for vazio enviar uma requisição com -requisição AJAX- do tipo POST para http://51.254.204.44/ti/enviar_email.php 
        // -- passando o paramentro "meuemail" e o dataType JSON

        //SE OCORRER TUDO CERTO COM A REQUISIÇAO: 1° exibir um toastr.sucess com a mensagem  | 2° 
        // 2° colocar um texto na div  de class resultado. "*emaildigitado* foi salvo em nossa lista de novidades =)"
        //limpar input
        //fechar a alerta depois de 2 segundos

        //SE não ocorrer tudo certo a alerta ñ deve fechar. Exibir um toastr.error com a mensagem do erro retornada pelo servidor



    });
});

/* NÃO MEXER 
   Se tiver visível, após executar a função, a div será oculta e vice-versa
*/
function toggleAlert() {
    $('#alerta').slideToggle();
}

//Contador inicia em 5
var i = 5;

function contador() {
    
    if(i<=0){
            $('#contador').hide();
            clearInterval(count);
            toggleAlert();
    }else{
        if(i<=3){
            $('#contador').css("color","blue");
        }
    }
    $('#contador').html('Alerta aparecendo em: '+i);
    i--;
    //Ocultar a div #contador qnd o cronometro ser menor ou igual a ZERO

    //Mudar a cor do texto da div #contador qnd o cronometro ser menor ou igual a TRES

    //Sinalizar contador. Ex: Alerta aparecendo em: __  (usar a div #contador)
}

function mudarCor(){
    $('#r1').css('background-color','#f0f0f0');
}
function mudarCorback(){
    $('#r1').css('background-color','white');
}

function core1(){
    $('#e1').css('background-color','yellow');
    $('#e1').css('color','black');
}

function core1back(){
    $('#e1').css('background-color','#ff7b00');
    $('#e1').css('color','white');
}

function mudarCor2(){
    $('#r2').css('background-color','#f0f0f0');
}
function mudarCorback2(){
    $('#r2').css('background-color','white');
}

function corE2(){
    $('#e2').css('background-color','yellow');
    $('#e2').css('color','black');
}

function corE2back(){
    $('#e2').css('background-color','#ff7b00');
    $('#e2').css('color','white');
}


function mudarCor3(){
    $('#r3').css('background-color','#f0f0f0');
}
function mudarCorback3(){
    $('#r3').css('background-color','white');
}

function corE3(){
    $('#e3').css('background-color','yellow');
    $('#e3').css('color','black');
}

function corE3back(){
    $('#e3').css('background-color','#ff7b00');
    $('#e3').css('color','white');
}

function mudarCor4(){
    $('#r4').css('background-color','#f0f0f0');
}
function mudarCorback4(){
    $('#r4').css('background-color','white');
}

function corE4(){
    $('#e4').css('background-color','yellow');
    $('#e4').css('color','black');
}

function corE4back(){
    $('#e4').css('background-color','#ff7b00');
    $('#e4').css('color','white');
}



function scrollar(){
    $("html, body").animate({
        scrollTop: $("#titulo").offset().top
    }, 700);
}

function scrollar2(){
    $("html, body").animate({
        scrollTop: $("#titulo2").offset().top
    }, 700);
}

function aparece(){
    $('.inv').show();
}

$( document ).tooltip( "option", "show", { effect: "blind", duration: 800 } )