

function reiniciarAutomato(){
    simbolos = ["A","B","C","D"];
    estado_inicial = 0;
    estado_atual = estado_inicial;
    estados_aceitacao = [12];
    estados_rejeicao = [];
    funcoes_transicao = [
        [1,null,null,null],//q0 (A,B,C,D) 1=q1 2=q2 ...
        [null,2,null,null],//q1
        [null,null,3,null],//q2
        [null,null,null,4],//q3
        [5,null,null,null],//q4
        [null,6,null,null],//q5
        [7,null,null,null],//q6
        [null,8,null,null],//q7
        [null,null,9,null],//q8
        [null,null,null,10],//q9
        [11,null,null,null],//q10
        [null,12,null,null],//q11
        [null,null,null,null],//q12
    ];
    proxima_animacao = 0;
    finalizado = false;
}
function executarEntradaSimbolo(simbolo){
    if(finalizado)return;
    //Ler o simbolo da entrada
    var index_of_simbolo = simbolos.indexOf(simbolo);
    if(index_of_simbolo==-1){
        alert("Símbolo Invalido");
        finalizado=true;
        return;
    }
    //Alterar estado de acordo com a funcao de transicao
    var proximo_estado = funcoes_transicao[estado_atual][index_of_simbolo];
    //Parada para NFA (função de transição não definida)
    if(proximo_estado==null){
        finalizado=true;
        alert("Máquina não pode continuar, pois não tem uma função de transição definida para o par(entrada,estado)");
        document.getElementById("saida").innerText = "Rejeitado";
        return;
    }
    estado_atual=proximo_estado;

    //Verificar se esta em estado de aceitacao ou de rejeicao
    if(estados_aceitacao.includes(estado_atual)){
        document.getElementById("saida").innerText = "Aceitação(q"+estado_atual+")";
    }else{
        document.getElementById("saida").innerText = "Fora da aceitação (q"+estado_atual+")";
    }
    //Verificar estado de rejeição
    if(estados_rejeicao.includes(estado_atual)){
        finalizado=true;
        alert("Máquina não pode continuar, pois foi para um estado de rejeição");
    }else{
        if(proxima_animacao>=animacoes.length){//Acho que nunca vai ocorrer, mas so por precaussão
            alert("Máquina esta tentando trabalhar mais do que foi programada");
        }
        filaDeAnimacao(animacoes[proxima_animacao]);
        proxima_animacao++;
    }
}

function rodarDaFila() {
    if(fila_animacao.length>0){
        fila_animacao.shift();
    }
    if(fila_animacao.length>0){
        var animacao = fila_animacao.shift();
        fila_animacao.unshift(animacao);
        animacao();
    }else{
        sinalizar_verde();
    }
}
function filaDeAnimacao(animacao){
    if(fila_animacao.length>0){
        fila_animacao.push(animacao);
    }else{
        fila_animacao.push(animacao);
        animacao();
    }
}

function executarEntradaCadeia(cadeia){
    Array.from(cadeia).forEach(executarEntradaSimbolo);
}
function iniciar() {
    reiniciarAutomato();
    var cadeia = prompt("Digite a cadeia", "");
    executarEntradaCadeia(cadeia);
}
function continuar() {
    var cadeia = Array.from(prompt("Digite novos simbolos", ""));
    executarEntradaCadeia(cadeia);
}
function press_A(){
    executarEntradaCadeia("A");
}
function press_B(){
    executarEntradaCadeia("B");
}
function press_C(){
    executarEntradaCadeia("C");
}
function press_D(){
    executarEntradaCadeia("D");
}

function sinalizar_vermelho(){
    document.getElementById("sinalizador").style = "width: 20px;height: 20px;background-color: red; float: left; margin-right: 10px";
}
function sinalizar_verde(){
    document.getElementById("sinalizador").style = "width: 20px;height: 20px;background-color: green; float: left; margin-right: 10px";
}

  function a1(){
    sinalizar_vermelho();
    document.getElementById("sinalizador").innerText = "1";
    fila_ocupada=true;
      $('#maquina1-1').animate({
          right: '77.5%'
      }, 5000)
      $('#maquina1-1').animate({
          top: '40%'
      }, 2000, function () {
          $('#caixa1').animate({
              top: '14%'
          }, 2000)
      })
      $('#maquina1-1').animate({
          top: '5%'
      }, 2000, function () {
          $('#caixa1').animate({
              left: '41.1%'
          }, 2000)
      })
      $('#maquina1-1').animate({
          right: '44.5%'
      }, 2000,rodarDaFila);
  }

   function a2() {
       sinalizar_vermelho();
       document.getElementById("sinalizador").innerText = "2";
       $('#caixa1').animate({
           top: '29.7%',//29.7&
           left: '40.3%'
       }, function () {
           $('#caixa1').css('display', 'none')
           $('#caixa1').attr('src','View/img/caixa1subirGIF_pronta.gif')
           rodarDaFila()
       })
   }

    function a3(){
        sinalizar_vermelho();
        document.getElementById("sinalizador").innerText = "3";
        $('#maquina2').attr('src','View/img/maquina2GIF.gif')
        $('#maquina1-1').animate({
            right: '44.4%'
        })
        $('#maquina1-1').animate({
            right: '44.5%'
        },rodarDaFila)
    }

    function a4() {
        sinalizar_vermelho();
        document.getElementById("sinalizador").innerText = "4";
        $('#maquina2').attr('src','View/img/m2p.png')
        $('#maquina1-1').animate({
            right:'40%'
        },rodarDaFila)
    }



  function a5() {
      sinalizar_vermelho();
      document.getElementById("sinalizador").innerText = "5";
      $('#maquina1-1').animate({
          top: '24%'
      })
      $('#caixa1').animate({
          left: '45.8%',
          top: '32%'
      }, function () {
          $('#maquina2').attr('src','View/img/m2v0.png')
          $('#caixa1').css('display', 'block')
          $('#maquina1-1').animate({
              top: '5%'
          }, 1500)
          $('#caixa1').animate({
              top: '14%'//14
          }, 1500, function () {
              $('#caixa1').attr('src','View/img/caixa1_pronta.png')
          })
          $('#maquina1-1').animate({
              right: '7%'
          }, 2000)
          $('#caixa1').animate({
              left: '78.8%'
          }, 2000,rodarDaFila)
      })
  }


    function a6() {
        sinalizar_vermelho();
        document.getElementById("sinalizador").innerText = "6";
        $('#caixa1').attr('src','View/img/caixa1cairGIF.gif')
        $('#caixa1').animate({
            top: '50.9%'
        },1000,function () {
            $('#caixa1').attr('src','View/img/caixa1_pronta.png')
            $('#maquina1-1').animate({
                right: '84.2%'
            },800)
            rodarDaFila()
        })
    }

    function a7() {
        sinalizar_vermelho();
        document.getElementById("sinalizador").innerText = "7";
        $('#maquina1-1').animate({
            top: '40%'
        },2000, function () {
            $('#caixa2').animate({
                top: '15%'
            },2000)
        })
        $('#maquina1-1').animate({
            top: '5%',
        }, 2000,function () {
            $('#caixa2').animate({
                left: '41.2%'
            },2000)
        })
        $('#maquina1-1').animate({
            right: '44.5%'
        },2000,rodarDaFila)


    }

    function a8() {
        sinalizar_vermelho();
        document.getElementById("sinalizador").innerText = "8";
        $('#caixa2').animate({
            top: '29.7%',//29.7
            left: '40.3%%'
        }, function () {
            $('#caixa2').css('display', 'none')
            $('#caixa2').attr('src','View/img/caixa2subirGIF_pronta.gif')
            rodarDaFila()
        })
    }

    function a9() {
        sinalizar_vermelho();
        document.getElementById("sinalizador").innerText = "9";
        $('#maquina2').attr('src', 'View/img/maquina2GIF.gif')
        $('#maquina1-1').animate({
            right: '44.4%'
        })
        $('#maquina1-1').animate({
            right: '44.5%'
        },rodarDaFila)
    }


    function a10() {
        sinalizar_vermelho();
        document.getElementById("sinalizador").innerText = "10";
        $('#maquina2').attr('src', 'View/img/m2p.png')
        $('#maquina1-1').animate({
            right: '40%'
        },rodarDaFila)
    }

    function a11() {
        sinalizar_vermelho();
        document.getElementById("sinalizador").innerText = "11";
        $('#maquina1-1').animate({
            top: '24%'
        })
        $('#caixa2').animate({
            left: '45.8%',
            top: '32%'
        }, function () {
            $('#maquina2').attr('src','View/img/m2v0.png')
            $('#caixa2').css('display', 'block')
            $('#maquina1-1').animate({
                top: '5%'
            }, 1500)
            $('#caixa2').animate({
                top: '14%'
            }, 1500, function () {
                $('#caixa2').attr('src','View/img/caixa2_pronta.png')
            })
            $('#maquina1-1').animate({
                right: '0%'
            }, 2000)
            $('#caixa2').animate({
                left: '85.5%'
            }, 2000,rodarDaFila)
        })
    }
////////////////////
    function a12(){
        sinalizar_vermelho();
        document.getElementById("sinalizador").innerText = "12";
        $('#caixa2').attr('src','View/img/caixa2cairGIF.gif')
        $('#caixa2').animate({
            top: '49.9%'
        },1000,function () {
            $('#caixa2').attr('src','View/img/caixa2_pronta.png')
            rodarDaFila()
        })
    }


$('#btn1').click(function() {
    press_A();
});
$( "#btn2" ).click(function() {
    press_B();
});
$( "#btn3" ).click(function() {
    press_C();
});
$( "#btn4" ).click(function() {
    press_D();
});

$( "#form_testar" ).submit(function() {
    var entrada = document.getElementById("entrada").value;
    document.getElementById("entrada").value="";
    executarEntradaCadeia(entrada);
});

