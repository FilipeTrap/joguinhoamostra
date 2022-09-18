/*
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████──██████─██████████████─██████──────────██████─██████████████─██████████─████████████████───██████████████─
─██░░██──██░░██─██░░░░░░░░░░██─██░░██████████████░░██─██░░░░░░░░░░██─██░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░██─
─██░░██──██░░██─██░░██████░░██─██░░░░░░░░░░░░░░░░░░██─██░░██████░░██─████░░████─██░░████████░░██───██░░██████░░██─
─██░░██──██░░██─██░░██──██░░██─██░░██████░░██████░░██─██░░██──██░░██───██░░██───██░░██────██░░██───██░░██──██░░██─
─██░░██──██░░██─██░░██████░░██─██░░██──██░░██──██░░██─██░░██████░░██───██░░██───██░░████████░░██───██░░██──██░░██─
─██░░██──██░░██─██░░░░░░░░░░██─██░░██──██░░██──██░░██─██░░░░░░░░░░██───██░░██───██░░░░░░░░░░░░██───██░░██──██░░██─
─██░░██──██░░██─██░░██████░░██─██░░██──██████──██░░██─██░░██████████───██░░██───██░░██████░░████───██░░██──██░░██─
─██░░░░██░░░░██─██░░██──██░░██─██░░██──────────██░░██─██░░██───────────██░░██───██░░██──██░░██─────██░░██──██░░██─
─████░░░░░░████─██░░██──██░░██─██░░██──────────██░░██─██░░██─────────████░░████─██░░██──██░░██████─██░░██████░░██─
───████░░████───██░░██──██░░██─██░░██──────────██░░██─██░░██─────────██░░░░░░██─██░░██──██░░░░░░██─██░░░░░░░░░░██─
─────██████─────██████──██████─██████──────────██████─██████─────────██████████─██████──██████████─██████████████─
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────
*/
function attackvampiro() {

    
  document.getElementById("especialvampiro2").style.visibility='hidden';
  document.getElementById("especialvampiro4").style.visibility='hidden';
  document.getElementById("especialvampiro6").style.visibility='hidden';

 
  danoenemy = 0
  var dado = Math.floor( 1 + 6*Math.random() );
   soma =  soma + dado
   text += "vampiro acumulou " + dado + " de dano somando " + soma + '\n';
   document.getElementById("demo").innerHTML = text;

   quantodano = soma;
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;
  

   if (soma > 1) {
   if (vidaplayer2 > 0){
   document.getElementById("danonoinimigo2").style.visibility='visible'; 
   }
    if (vidaplayer4 > 0){
    document.getElementById("danonoinimigo4").style.visibility='visible';
    }
    if (vidaplayer6 > 0){
    document.getElementById("danonoinimigo6").style.visibility='visible';
    }
    }
//---------------------


  
if (dado == '1') {
  dadoroll.unshift('assets/dice1.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '2') {
  dadoroll.unshift('assets/dice2.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '3') {
  dadoroll.unshift('assets/dice3.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '4') {
  dadoroll.unshift('assets/dice4.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '5') {
  dadoroll.unshift('assets/dice5.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '6') {
  dadoroll.unshift('assets/dice6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }




//--------------------  especialvampiro

  //   if (dado == 6) {
 
  //   if (turno == 1){
  //  document.getElementById("especialvampiro2").style.visibility='visible'; 
   
  //  }
  //   if (turno == 3){
  //   document.getElementById("especialvampiro4").style.visibility='visible';
    
  //   }
  //   if (turno == 5){
  //   document.getElementById("especialvampiro6").style.visibility='visible';
    
  //   }

  //   }
   
  
      if (dado == 1) {
    soma = 0
    text += "O vampiro ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';

    quantodano = 0;

       
    document.getElementById("botaorolarvampiro").style.visibility='hidden'; 
      document.getElementById("botaorolarmago").style.visibility='hidden'; 
      document.getElementById("botaorolarguerreiro").style.visibility='hidden';
    document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden';
    document.getElementById("danonoinimigo6").style.visibility='hidden';
    document.getElementById("especialvampiro2").style.visibility='hidden'; 
    document.getElementById("especialvampiro4").style.visibility='hidden'; 
    document.getElementById("especialvampiro6").style.visibility='hidden';  
    document.getElementById("auraplayer1").style.visibility='hidden';
    document.getElementById("auraplayer3").style.visibility='hidden';
    document.getElementById("auraplayer5").style.visibility='hidden';
    document.getElementById("demo").innerHTML = text;


    
    if (turno == 1){
document.getElementById("missplayer1").style.visibility='visible';
}
if (turno == 3){
document.getElementById("missplayer3").style.visibility='visible';
}
if (turno == 5){
document.getElementById("missplayer5").style.visibility='visible';
}




// turno++;
    setTimeout(function() {
    document.getElementById("missplayer1").style.visibility='hidden';
    document.getElementById("missplayer3").style.visibility='hidden';
    document.getElementById("missplayer5").style.visibility='hidden';
    //return turnos();
    return endturn();
     }, 1000)
      }
}


// especial do vampiro 

function especialvampiro2(){

  vidaplayer2 = vidaplayer2 - soma;

  text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer2 + " de vida" + '\n';
  document.getElementById("demo").innerHTML = text;

  vidaplayer2show = document.getElementById('vidaplayer2show'); 
  vidaplayer2show.innerHTML = vidaplayer2

soma = soma / 2;
soma = Math.floor(soma, 1);  

  if (turno == 1){
    vidaplayer1 = vidaplayer1 + soma
    if (vidaplayer1 > slot1[3]){
      vidaplayer1 = slot1[3]
    };
    vidaplayer1show = document.getElementById('vidaplayer1show'); 
    vidaplayer1show.innerHTML = vidaplayer1
  document.getElementById('player1').className = 'aninPL1atkPL2'; //animação
  document.getElementById("healplayer1").style.visibility='visible';
  setTimeout(function() {
    document.getElementById('player1').className = 'none';
    }, 900)
    setTimeout(function() {
      document.getElementById("healplayer1").style.visibility='hidden';
      }, 500)
  }
  if (turno == 3){
    vidaplayer3 = vidaplayer3 + soma
    if (vidaplayer3 > slot3[3]){
      vidaplayer3 = slot3[3]
    };
    vidaplayer3show = document.getElementById('vidaplayer3show'); 
    vidaplayer3show.innerHTML = vidaplayer3
  document.getElementById('player3').className = 'aninPL3atkPL2'; //animação
  document.getElementById("healplayer3").style.visibility='visible';
  setTimeout(function() {
    document.getElementById('player3').className = 'none';
    }, 900)
    setTimeout(function() {
      document.getElementById("healplayer3").style.visibility='hidden';
      }, 500)
  }
  if (turno == 5){
    vidaplayer5 = vidaplayer5 + soma
    if (vidaplayer5 > slot5[3]){
      vidaplayer5 = slot5[3]
    };
    vidaplayer5show = document.getElementById('vidaplayer5show'); 
    vidaplayer5show.innerHTML = vidaplayer5
  document.getElementById('player5').className = 'aninPL5atkPL2'; //animação
  document.getElementById("healplayer5").style.visibility='visible';
  setTimeout(function() {
    document.getElementById('player5').className = 'none';
    }, 900)
    setTimeout(function() {
      document.getElementById("healplayer5").style.visibility='hidden';
      }, 500)
  }

  soma = 0


      if (vidaplayer2 < 1){
        morreuplayer2();
      }

      return endturn();
     // turno++;
      setTimeout(function() {
         // return turnos();
          }, 900)
  
  }
  
    
function especialvampiro4(){

  vidaplayer4 = vidaplayer4 - soma;

  text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer4 + " de vida" + '\n';
  document.getElementById("demo").innerHTML = text;

  vidaplayer4show = document.getElementById('vidaplayer4show'); 
  vidaplayer4show.innerHTML = vidaplayer4

soma = soma / 2;
soma = Math.floor(soma, 1);  

  if (turno == 1){
    vidaplayer1 = vidaplayer1 + soma
    if (vidaplayer1 > slot1[3]){
      vidaplayer1 = slot1[3]
    };
    vidaplayer1show = document.getElementById('vidaplayer1show'); 
    vidaplayer1show.innerHTML = vidaplayer1
  document.getElementById('player1').className = 'aninPL1atkPL4'; //animação
  document.getElementById("healplayer1").style.visibility='visible';
  setTimeout(function() {
    document.getElementById('player1').className = 'none';
    }, 900)
    setTimeout(function() {
      document.getElementById("healplayer1").style.visibility='hidden';
      }, 500)
  }
  if (turno == 3){
    vidaplayer3 = vidaplayer3 + soma
    if (vidaplayer3 > slot3[3]){
      vidaplayer3 = slot3[3]
    };
    vidaplayer3show = document.getElementById('vidaplayer3show'); 
    vidaplayer3show.innerHTML = vidaplayer3
  document.getElementById('player3').className = 'aninPL3atkPL4'; //animação
  document.getElementById("healplayer3").style.visibility='visible';
  setTimeout(function() {
    document.getElementById('player3').className = 'none';
    }, 900)
    setTimeout(function() {
      document.getElementById("healplayer3").style.visibility='hidden';
      }, 500)
  }
  if (turno == 5){
    vidaplayer5 = vidaplayer5 + soma
    if (vidaplayer5 > slot5[3]){
      vidaplayer5 = slot5[3]
    };
    vidaplayer5show = document.getElementById('vidaplayer5show'); 
    vidaplayer5show.innerHTML = vidaplayer5
  document.getElementById('player5').className = 'aninPL5atkPL4'; //animação
  document.getElementById("healplayer5").style.visibility='visible';
  setTimeout(function() {
    document.getElementById('player5').className = 'none';
    }, 900)
    setTimeout(function() {
      document.getElementById("healplayer5").style.visibility='hidden';
      }, 500)
  }

  soma = 0



      if (vidaplayer4 < 1){
        morreuplayer4();
      }
      return endturn();
      //turno++;
      setTimeout(function() {
         // return turnos();
         return endturn();
          }, 900)
  
  }
  
function especialvampiro6(){

  vidaplayer6 = vidaplayer6 - soma;

  text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer6 + " de vida" + '\n';
  document.getElementById("demo").innerHTML = text;

  vidaplayer6show = document.getElementById('vidaplayer6show'); 
  vidaplayer6show.innerHTML = vidaplayer6

soma = soma / 2;
soma = Math.floor(soma, 1);  

  if (turno == 1){
    vidaplayer1 = vidaplayer1 + soma
    if (vidaplayer1 > slot1[3]){
      vidaplayer1 = slot1[3]
    };
    vidaplayer1show = document.getElementById('vidaplayer1show'); 
    vidaplayer1show.innerHTML = vidaplayer1
  document.getElementById('player1').className = 'aninPL1atkPL6'; //animação
  document.getElementById("healplayer1").style.visibility='visible';
  setTimeout(function() {
    document.getElementById('player1').className = 'none';
    }, 900)
    setTimeout(function() {
      document.getElementById("healplayer1").style.visibility='hidden';
      }, 500)
  }
  if (turno == 3){
    vidaplayer3 = vidaplayer3 + soma
    if (vidaplayer3 > slot3[3]){
      vidaplayer3 = slot3[3]
    };
    vidaplayer3show = document.getElementById('vidaplayer3show'); 
    vidaplayer3show.innerHTML = vidaplayer3
  document.getElementById('player3').className = 'aninPL3atkPL6'; //animação
  document.getElementById("healplayer3").style.visibility='visible';
  setTimeout(function() {
    document.getElementById('player3').className = 'none';
    }, 900)
    setTimeout(function() {
      document.getElementById("healplayer3").style.visibility='hidden';
      }, 500)
  }
  if (turno == 5){
    vidaplayer5 = vidaplayer5 + soma
    if (vidaplayer5 > slot5[3]){
      vidaplayer5 = slot5[3]
    };
    vidaplayer5show = document.getElementById('vidaplayer5show'); 
    vidaplayer5show.innerHTML = vidaplayer5
  document.getElementById('player5').className = 'aninPL5atkPL6'; //animação
  document.getElementById("healplayer5").style.visibility='visible';
  setTimeout(function() {
    document.getElementById('player5').className = 'none';
    }, 900)
    setTimeout(function() {
      document.getElementById("healplayer5").style.visibility='hidden';
      }, 500)
  }

  soma = 0

      if (vidaplayer6 < 1){
        morreuplayer6();
      }
      return endturn();
      //turno++;
      setTimeout(function() {
         // return turnos();
         return endturn();
          }, 900)
  
  }
  
  


/*
                        https://fsymbols.com/generators/tarty/
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████████████───██████████████─████████████████───██████████████───██████████████─████████████████───██████████████─
─██░░░░░░░░░░██───██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░██───██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░██─
─██░░██████░░██───██░░██████░░██─██░░████████░░██───██░░██████░░██───██░░██████░░██─██░░████████░░██───██░░██████░░██─
─██░░██──██░░██───██░░██──██░░██─██░░██────██░░██───██░░██──██░░██───██░░██──██░░██─██░░██────██░░██───██░░██──██░░██─
─██░░██████░░████─██░░██████░░██─██░░████████░░██───██░░██████░░████─██░░██████░░██─██░░████████░░██───██░░██──██░░██─
─██░░░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░██──██░░██─
─██░░████████░░██─██░░██████░░██─██░░██████░░████───██░░████████░░██─██░░██████░░██─██░░██████░░████───██░░██──██░░██─
─██░░██────██░░██─██░░██──██░░██─██░░██──██░░██─────██░░██────██░░██─██░░██──██░░██─██░░██──██░░██─────██░░██──██░░██─
─██░░████████░░██─██░░██──██░░██─██░░██──██░░██████─██░░████████░░██─██░░██──██░░██─██░░██──██░░██████─██░░██████░░██─
─██░░░░░░░░░░░░██─██░░██──██░░██─██░░██──██░░░░░░██─██░░░░░░░░░░░░██─██░░██──██░░██─██░░██──██░░░░░░██─██░░░░░░░░░░██─
─████████████████─██████──██████─██████──██████████─████████████████─██████──██████─██████──██████████─██████████████─
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
*/

  function attackbarbaro() {

    
    document.getElementById("especialbarbaro2").style.visibility='hidden';
    document.getElementById("especialbarbaro4").style.visibility='hidden';
    document.getElementById("especialbarbaro6").style.visibility='hidden';
  
    
    danoenemy = 0
    var dado = Math.floor( 1 + 6*Math.random() );
    //var dado4 = Math.floor( 1 + 4*Math.random() );
     soma =  soma + dado
     if (turno == 1 && furiabarbaro1 > 1){
      soma =  soma + dado
      text += "barbaro acumulou " + dado + " e " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;
     
if (dado == '1') {
  dadoroll.unshift('assets/dice1.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '2') {
  dadoroll.unshift('assets/dice2.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '3') {
  dadoroll.unshift('assets/dice3.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '4') {
  dadoroll.unshift('assets/dice4.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '5') {
  dadoroll.unshift('assets/dice5.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '6') {
  dadoroll.unshift('assets/dice6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
      }
       if (turno == 3 && furiabarbaro3 > 1){
        soma =  soma + dado
        text += "barbaro acumulou " + dado + " e " + dado + " de dano somando " + soma + '\n';
        document.getElementById("demo").innerHTML = text;
        
if (dado == '1') {
  dadoroll.unshift('assets/dice1.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '2') {
  dadoroll.unshift('assets/dice2.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '3') {
  dadoroll.unshift('assets/dice3.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '4') {
  dadoroll.unshift('assets/dice4.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '5') {
  dadoroll.unshift('assets/dice5.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '6') {
  dadoroll.unshift('assets/dice6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  }
       }
       if (turno == 5 && furiabarbaro5 > 1){
        soma =  soma + dado
        text += "barbaro acumulou " + dado + " e " + dado + " de dano somando " + soma + '\n';
        document.getElementById("demo").innerHTML = text;
        
if (dado == '1') {
  dadoroll.unshift('assets/dice1.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '2') {
  dadoroll.unshift('assets/dice2.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '3') {
  dadoroll.unshift('assets/dice3.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '4') {
  dadoroll.unshift('assets/dice4.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '5') {
  dadoroll.unshift('assets/dice5.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '6') {
  dadoroll.unshift('assets/dice6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  }
       }

       if (turno == 1 && furiabarbaro1 < 1){
        text += "barbaro acumulou " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;
        }
         if (turno == 3 && furiabarbaro3 < 1){
          text += "barbaro acumulou " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;
         }
         if (turno == 5 && furiabarbaro5 < 1){
          text += "barbaro acumulou " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;
         }

     

    quantodano =  soma;
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;
     if (soma > 1) {
     if (vidaplayer2 > 0){
     document.getElementById("danonoinimigo2").style.visibility='visible'; 
     }
      if (vidaplayer4 > 0){
      document.getElementById("danonoinimigo4").style.visibility='visible';
      }
      if (vidaplayer6 > 0){
      document.getElementById("danonoinimigo6").style.visibility='visible';
      }
      }
//---------------------

  
if (dado == '1') {
  dadoroll.unshift('assets/dice1.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '2') {
  dadoroll.unshift('assets/dice2.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '3') {
  dadoroll.unshift('assets/dice3.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '4') {
  dadoroll.unshift('assets/dice4.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '5') {
  dadoroll.unshift('assets/dice5.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '6') {
  dadoroll.unshift('assets/dice6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }




//--------------------

      if (dado == 6) {
     
      if (turno == 1 && furiabarbaro1 < 1){
     document.getElementById("especialbarbaro2").style.visibility='visible'; 
     }
      if (turno == 3 && furiabarbaro3 < 1){
      document.getElementById("especialbarbaro4").style.visibility='visible';
      }
      if (turno == 5 && furiabarbaro5 < 1){
      document.getElementById("especialbarbaro6").style.visibility='visible';
      }

      }
     
    
        if (dado == 1) {
      soma = 0
      text += "O barbaro ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';
         
      document.getElementById("botaorolarbarbaro").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("especialbarbaro2").style.visibility='hidden'; 
      document.getElementById("especialbarbaro4").style.visibility='hidden'; 
      document.getElementById("especialbarbaro6").style.visibility='hidden';  
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';
      document.getElementById("demo").innerHTML = text;

 
      
      if (turno == 1){
  document.getElementById("missplayer1").style.visibility='visible';
  }
  if (turno == 3){
  document.getElementById("missplayer3").style.visibility='visible';
  }
  if (turno == 5){
  document.getElementById("missplayer5").style.visibility='visible';
  }



  
      //turno++;
      setTimeout(function() {
      document.getElementById("missplayer1").style.visibility='hidden';
      document.getElementById("missplayer3").style.visibility='hidden';
      document.getElementById("missplayer5").style.visibility='hidden';
      //return turnos();
      return endturn();
       }, 1000)
        }
  }

  // especial do barbaro 
  
  function especialbarbaro2(){

    furiabarbaro1 = 5;

   
    text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
    document.getElementById("demo").innerHTML = text;
    soma = 0
    
    
    player1.setAttribute('src', 'assets/barbarofuria4.png');
      document.getElementById('player1').className = 'aninshakePL1'; //animação
      setTimeout(function() {
        document.getElementById('player1').className = 'none';
        }, 900)
    

    document.getElementById("botaorolarbarbaro").style.visibility='hidden'; 
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialbarbaro2").style.visibility='hidden'; 
        document.getElementById("especialbarbaro4").style.visibility='hidden'; 
        document.getElementById("especialbarbaro6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';

        return endturn();
        //turno++;
        setTimeout(function() {
            //return turnos();
            return endturn();
            }, 900)
    
    }

    function especialbarbaro4(){

      furiabarbaro3 = 5;
  
     
      text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
      document.getElementById("demo").innerHTML = text;
      soma = 0
      
      
      player3.setAttribute('src', 'assets/barbarofuria4.png');
        document.getElementById('player3').className = 'aninshakePL3'; //animação
        setTimeout(function() {
          document.getElementById('player3').className = 'none';
          }, 900)
      
  
      document.getElementById("botaorolarbarbaro").style.visibility='hidden'; 
          document.getElementById("danonoinimigo2").style.visibility='hidden'; 
          document.getElementById("danonoinimigo4").style.visibility='hidden';
          document.getElementById("danonoinimigo6").style.visibility='hidden';
          document.getElementById("especialbarbaro2").style.visibility='hidden'; 
          document.getElementById("especialbarbaro4").style.visibility='hidden'; 
          document.getElementById("especialbarbaro6").style.visibility='hidden'; 
          document.getElementById("auraplayer1").style.visibility='hidden';
          document.getElementById("auraplayer3").style.visibility='hidden';
          document.getElementById("auraplayer5").style.visibility='hidden';

          return endturn();
  
          //turno++;
          setTimeout(function() {
              //return turnos();
              return endturn();
              }, 900)
      
      }
  
      function especialbarbaro6(){

        furiabarbaro5 = 5;
    
       
        text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
        document.getElementById("demo").innerHTML = text;
        soma = 0
        
        
        player5.setAttribute('src', 'assets/barbarofuria4.png');
          document.getElementById('player5').className = 'aninshakePL5'; //animação
          setTimeout(function() {
            document.getElementById('player5').className = 'none';
            }, 900)
        
    
        document.getElementById("botaorolarbarbaro").style.visibility='hidden'; 
            document.getElementById("danonoinimigo2").style.visibility='hidden'; 
            document.getElementById("danonoinimigo4").style.visibility='hidden';
            document.getElementById("danonoinimigo6").style.visibility='hidden';
            document.getElementById("especialbarbaro2").style.visibility='hidden'; 
            document.getElementById("especialbarbaro4").style.visibility='hidden'; 
            document.getElementById("especialbarbaro6").style.visibility='hidden'; 
            document.getElementById("auraplayer1").style.visibility='hidden';
            document.getElementById("auraplayer3").style.visibility='hidden';
            document.getElementById("auraplayer5").style.visibility='hidden';
    
    return endturn();
            //turno++;
            setTimeout(function() {
                //return turnos();
                return endturn();
                }, 900)
        
        }
    



/*                        https://fsymbols.com/generators/tarty/
──────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████████████─██████─────────██████████████─████████████████───██████████─██████████████─██████████████─
─██░░░░░░░░░░██─██░░██─────────██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██░░██████████─██░░██─────────██░░██████████─██░░████████░░██───████░░████─██░░██████████─██░░██████░░██─
─██░░██─────────██░░██─────────██░░██─────────██░░██────██░░██─────██░░██───██░░██─────────██░░██──██░░██─
─██░░██─────────██░░██─────────██░░██████████─██░░████████░░██─────██░░██───██░░██─────────██░░██──██░░██─
─██░░██─────────██░░██─────────██░░░░░░░░░░██─██░░░░░░░░░░░░██─────██░░██───██░░██──██████─██░░██──██░░██─
─██░░██─────────██░░██─────────██░░██████████─██░░██████░░████─────██░░██───██░░██──██░░██─██░░██──██░░██─
─██░░██─────────██░░██─────────██░░██─────────██░░██──██░░██───────██░░██───██░░██──██░░██─██░░██──██░░██─
─██░░██████████─██░░██████████─██░░██████████─██░░██──██░░██████─████░░████─██░░██████░░██─██░░██████░░██─
─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░░░░░██─██░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██████████████─██████████████─██████████████─██████──██████████─██████████─██████████████─██████████████─
──────────────────────────────────────────────────────────────────────────────────────────────────────────
*/

function attackclerigo() {

    
  document.getElementById("especialclerigo2").style.visibility='hidden';
  document.getElementById("especialclerigo4").style.visibility='hidden';
  document.getElementById("especialclerigo6").style.visibility='hidden';

  danoenemy = 0
  var dado = Math.floor( 1 + 6*Math.random() );
   soma =  soma + dado
   text += "clerigo acumulou " + dado + " de dano somando " + soma + '\n';
   document.getElementById("demo").innerHTML = text;

   quantodano = soma; //isso é o contador de dano
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;
  

   if (soma > 1) {
   if (vidaplayer2 > 0){
   document.getElementById("danonoinimigo2").style.visibility='visible'; 
   }
    if (vidaplayer4 > 0){
    document.getElementById("danonoinimigo4").style.visibility='visible';
    }
    if (vidaplayer6 > 0){
    document.getElementById("danonoinimigo6").style.visibility='visible';
    }
    }
//---------------------


  
if (dado == '1') {
  dadoroll.unshift('assets/dice1.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '2') {
  dadoroll.unshift('assets/dice2.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '3') {
  dadoroll.unshift('assets/dice3.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '4') {
  dadoroll.unshift('assets/dice4.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '5') {
  dadoroll.unshift('assets/dice5.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '6') {
  dadoroll.unshift('assets/dice6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }



//--------------------

    if (dado == 6) {
    // especialclerigo
    if (vidaplayer1 > 0 && vidaplayer1 < slot1[3]){
   document.getElementById("especialclerigo2").style.visibility='visible'; 
   }
    if (vidaplayer3 > 0 && vidaplayer3 < slot3[3]){
    document.getElementById("especialclerigo4").style.visibility='visible';
    }
    if (vidaplayer5 > 0 && vidaplayer5 < slot5[3]){
    document.getElementById("especialclerigo6").style.visibility='visible';
    }

    }
   
  
      if (dado == 1) {
    soma = 0
    text += "O clerigo ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';

    quantodano = 0;

       
    document.getElementById("botaorolarclerigo").style.visibility='hidden'; 
    document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden';
    document.getElementById("danonoinimigo6").style.visibility='hidden';
    document.getElementById("especialclerigo2").style.visibility='hidden'; 
    document.getElementById("especialclerigo4").style.visibility='hidden'; 
    document.getElementById("especialclerigo6").style.visibility='hidden';  
    document.getElementById("auraplayer1").style.visibility='hidden';
    document.getElementById("auraplayer3").style.visibility='hidden';
    document.getElementById("auraplayer5").style.visibility='hidden';
    document.getElementById("demo").innerHTML = text;


    
    if (turno == 1){
document.getElementById("missplayer1").style.visibility='visible';
}
if (turno == 3){
document.getElementById("missplayer3").style.visibility='visible';
}
if (turno == 5){
document.getElementById("missplayer5").style.visibility='visible';
}




    //turno++;
    setTimeout(function() {
    document.getElementById("missplayer1").style.visibility='hidden';
    document.getElementById("missplayer3").style.visibility='hidden';
    document.getElementById("missplayer5").style.visibility='hidden';
    //return turnos();
    return endturn();
     }, 1000)
      }
}

// especial do clerigo 

function especialclerigo2(){

vidaplayer1 = vidaplayer1 + soma;
if (sangramento1 > 0){
  sangramento1 = 0
  document.getElementById('sangramento1show').style.visibility='hidden';
};
  
if (vidaplayer1 > slot1[3]){
  vidaplayer1 = slot1[3]
};

document.getElementById("healplayer1").style.visibility='visible';
 
  text += "O clerigo curou " + soma + " de dano restando " + vidaplayer1 + " de vida" + '\n';
  document.getElementById("demo").innerHTML = text;

  vidaplayer1show = document.getElementById('vidaplayer1show'); 
  vidaplayer1show.innerHTML = vidaplayer1
 
  soma = 0
  
  if (turno == 1){
  document.getElementById('player1').className = 'aninshakePL1'; //animação
  setTimeout(function() {
    document.getElementById('player1').className = 'none';
    }, 900)
  }
  if (turno == 3){
  document.getElementById('player3').className = 'aninshakePL3'; //animação
  setTimeout(function() {
    document.getElementById('player3').className = 'none';
    }, 900)
  }
  if (turno == 5){
  document.getElementById('player5').className = 'aninshakePL5'; //animação
  setTimeout(function() {
    document.getElementById('player5').className = 'none';
    }, 900)
  }
  
      document.getElementById("botaorolarclerigo").style.visibility='hidden'; 
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("especialclerigo2").style.visibility='hidden'; 
      document.getElementById("especialclerigo4").style.visibility='hidden'; 
      document.getElementById("especialclerigo6").style.visibility='hidden'; 
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';

      //turno++;
      setTimeout(function() {

        document.getElementById("healplayer1").style.visibility='hidden';
          //return turnos();
          return endturn();
          }, 900)
  
  }


  function especialclerigo4(){

    vidaplayer3 = vidaplayer3 + soma;
    if (sangramento3 > 0){
      sangramento3 = 0
      document.getElementById('sangramento3show').style.visibility='hidden';
    };
      
    if (vidaplayer3 > slot3[3]){
      vidaplayer3 = slot3[3]
    };
    
    document.getElementById("healplayer3").style.visibility='visible';
     
      text += "O clerigo curou " + soma + " de dano restando " + vidaplayer3 + " de vida" + '\n';
      document.getElementById("demo").innerHTML = text;
    
      vidaplayer3show = document.getElementById('vidaplayer3show'); 
      vidaplayer3show.innerHTML = vidaplayer3
     
      soma = 0
      
      if (turno == 1){
      document.getElementById('player3').className = 'aninshakePL1'; //animação
      setTimeout(function() {
        document.getElementById('player3').className = 'none';
        }, 900)
      }
      if (turno == 3){
      document.getElementById('player3').className = 'aninshakePL3'; //animação
      setTimeout(function() {
        document.getElementById('player3').className = 'none';
        }, 900)
      }
      if (turno == 5){
      document.getElementById('player5').className = 'aninshakePL5'; //animação
      setTimeout(function() {
        document.getElementById('player5').className = 'none';
        }, 900)
      }
      
          document.getElementById("botaorolarclerigo").style.visibility='hidden'; 
          document.getElementById("danonoinimigo2").style.visibility='hidden'; 
          document.getElementById("danonoinimigo4").style.visibility='hidden';
          document.getElementById("danonoinimigo6").style.visibility='hidden';
          document.getElementById("especialclerigo2").style.visibility='hidden'; 
          document.getElementById("especialclerigo4").style.visibility='hidden'; 
          document.getElementById("especialclerigo6").style.visibility='hidden'; 
          document.getElementById("auraplayer3").style.visibility='hidden';
          document.getElementById("auraplayer3").style.visibility='hidden';
          document.getElementById("auraplayer5").style.visibility='hidden';
    
          //turno++;
          setTimeout(function() {
    
            document.getElementById("healplayer3").style.visibility='hidden';
              //return turnos();
              return endturn();
              }, 900)
      
      }



      function especialclerigo6(){

        vidaplayer5 = vidaplayer5 + soma;
        if (sangramento5 > 0){
          sangramento5 = 0
          document.getElementById('sangramento6show').style.visibility='hidden';
        };
          
        if (vidaplayer5 > slot3[3]){
          vidaplayer5 = slot3[3]
        };
        
        document.getElementById("healplayer5").style.visibility='visible';
         
          text += "O clerigo curou " + soma + " de dano restando " + vidaplayer5 + " de vida" + '\n';
          document.getElementById("demo").innerHTML = text;
        
          vidaplayer5show = document.getElementById('vidaplayer5show'); 
          vidaplayer5show.innerHTML = vidaplayer5
         
          soma = 0
          
          if (turno == 1){
          document.getElementById('player5').className = 'aninshakePL1'; //animação
          setTimeout(function() {
            document.getElementById('player5').className = 'none';
            }, 900)
          }
          if (turno == 3){
          document.getElementById('player5').className = 'aninshakePL3'; //animação
          setTimeout(function() {
            document.getElementById('player5').className = 'none';
            }, 900)
          }
          if (turno == 5){
          document.getElementById('player5').className = 'aninshakePL5'; //animação
          setTimeout(function() {
            document.getElementById('player5').className = 'none';
            }, 900)
          }
          
              document.getElementById("botaorolarclerigo").style.visibility='hidden'; 
              document.getElementById("danonoinimigo2").style.visibility='hidden'; 
              document.getElementById("danonoinimigo4").style.visibility='hidden';
              document.getElementById("danonoinimigo6").style.visibility='hidden';
              document.getElementById("especialclerigo2").style.visibility='hidden'; 
              document.getElementById("especialclerigo4").style.visibility='hidden'; 
              document.getElementById("especialclerigo6").style.visibility='hidden'; 
              document.getElementById("auraplayer5").style.visibility='hidden';
              document.getElementById("auraplayer5").style.visibility='hidden';
              document.getElementById("auraplayer5").style.visibility='hidden';
        
              //turno++;
              setTimeout(function() {
        
                document.getElementById("healplayer5").style.visibility='hidden';
                 // return turnos();
                 return endturn();
                  }, 900)
          
          }
  



//────────────────────────────────────────────────────────────────────────────────────────────
//─██████──────────██████─██████████████─██████──────────██████─██████████████─██████████████─
//─██░░██████████████░░██─██░░░░░░░░░░██─██░░██████████──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
//─██░░░░░░░░░░░░░░░░░░██─██░░██████░░██─██░░░░░░░░░░██──██░░██─██░░██████████─██░░██████████─
//─██░░██████░░██████░░██─██░░██──██░░██─██░░██████░░██──██░░██─██░░██─────────██░░██─────────
//─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██─────────██░░██████████─
//─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██──██████─██░░░░░░░░░░██─
//─██░░██──██████──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██████████─
//─██░░██──────────██░░██─██░░██──██░░██─██░░██──██░░██████░░██─██░░██──██░░██─██░░██─────────
//─██░░██──────────██░░██─██░░██████░░██─██░░██──██░░░░░░░░░░██─██░░██████░░██─██░░██████████─
//─██░░██──────────██░░██─██░░░░░░░░░░██─██░░██──██████████░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
//─██████──────────██████─██████████████─██████──────────██████─██████████████─██████████████─
///────────────────────────────────────────────────────────────────────────────────────────────



function attackmonge() {

    
  document.getElementById("especialmonge2").style.visibility='hidden';
  document.getElementById("especialmonge4").style.visibility='hidden';
  document.getElementById("especialmonge6").style.visibility='hidden';


  danoenemy = 0
  var dado = Math.floor( 1 + 6*Math.random() );
   soma =  soma + dado
   text += "monge acumulou " + dado + " de dano somando " + soma + '\n';
   document.getElementById("demo").innerHTML = text;

   quantodano = soma;
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;
  

   if (soma > 1) {
   if (vidaplayer2 > 0){
   document.getElementById("danonoinimigo2").style.visibility='visible'; 
   }
    if (vidaplayer4 > 0){
    document.getElementById("danonoinimigo4").style.visibility='visible';
    }
    if (vidaplayer6 > 0){
    document.getElementById("danonoinimigo6").style.visibility='visible';
    }
    }
//---------------------


  
if (dado == '1') {
  dadoroll.unshift('assets/dice1.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '2') {
  dadoroll.unshift('assets/dice2.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '3') {
  dadoroll.unshift('assets/dice3.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '4') {
  dadoroll.unshift('assets/dice4.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '5') {
  dadoroll.unshift('assets/dice5.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '6') {
  dadoroll.unshift('assets/dice6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }



//--------------------

    if (dado == 6) {
    // especialmonge
    if (vidaplayer2 > 0){
   document.getElementById("especialmonge2").style.visibility='visible'; 
   document.getElementById("danonoinimigo2").style.visibility='hidden'; 
   }
    if (vidaplayer4 > 0){
    document.getElementById("especialmonge4").style.visibility='visible';
    document.getElementById("danonoinimigo4").style.visibility='hidden'; 
    }
    if (vidaplayer6 > 0){
    document.getElementById("especialmonge6").style.visibility='visible';
    document.getElementById("danonoinimigo6").style.visibility='hidden'; 
    }

    }
   
  
      if (dado == 1) {
    soma = 0
    text += "O monge ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';

    quantodano = 0;

       
    document.getElementById("botaorolarmonge").style.visibility='hidden'; 
    document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden';
    document.getElementById("danonoinimigo6").style.visibility='hidden';
    document.getElementById("especialmonge2").style.visibility='hidden'; 
    document.getElementById("especialmonge4").style.visibility='hidden'; 
    document.getElementById("especialmonge6").style.visibility='hidden';  
    document.getElementById("auraplayer1").style.visibility='hidden';
    document.getElementById("auraplayer3").style.visibility='hidden';
    document.getElementById("auraplayer5").style.visibility='hidden';
    document.getElementById("demo").innerHTML = text;


    
    if (turno == 1){
document.getElementById("missplayer1").style.visibility='visible';
}
if (turno == 3){
document.getElementById("missplayer3").style.visibility='visible';
}
if (turno == 5){
document.getElementById("missplayer5").style.visibility='visible';
}




    //turno++;
    setTimeout(function() {
    document.getElementById("missplayer1").style.visibility='hidden';
    document.getElementById("missplayer3").style.visibility='hidden';
    document.getElementById("missplayer5").style.visibility='hidden';
    //return turnos();
    return endturn();
     }, 1000)
      }
}

// especial do monge 

function especialmonge2(){

  if(escudoplayer2 > 0){
    soma = soma / 2;
    soma = Math.floor(soma, 1); 
    escudoplayer2 = escudoplayer2 - soma
    escudoplayer2show = document.getElementById('escudoplayer2show'); 
    escudoplayer2show.innerHTML = escudoplayer2
    text += "O inimigo resistiu dano por causa do escudo" + '\n';
    document.getElementById("demo").innerHTML = text;
  if(escudoplayer2 < 1){
    
    vidaplayer2 = vidaplayer2 + escudoplayer2;
    vidaplayer2show = document.getElementById('vidaplayer2show'); 
    vidaplayer2show.innerHTML = vidaplayer2
    escudoplayer2 = 0
    document.getElementById("escudoplayer2show").style.visibility='hidden';
    player2.setAttribute('src', 'assets/guerreiro.png');

    atordoadoplayer2 = 1;
    document.getElementById("stunplayer2").style.visibility='visible';
    
    if(furiabarbaro2 > 1){
      furiabarbaro2 = 0
      player2.setAttribute('src', 'assets/barbaro.png');
    };
    
     
      text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer2 + " de vida e está estunado" + '\n';
      document.getElementById("demo").innerHTML = text;
  }
  soma = 0

  if (turno == 1){

    document.getElementById('player1').className = 'aninPL1atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 600)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 600)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 600)
    }
    
    


        if (vidaplayer2 < 1){
          morreuplayer2();
        }
        return endturn();
  }

  soma = soma / 2;
  soma = Math.floor(soma, 1);  
  vidaplayer2 = vidaplayer2 - soma;
  atordoadoplayer2 = 1;
  document.getElementById("stunplayer2").style.visibility='visible';
  
  if(furiabarbaro2 > 1){
    furiabarbaro2 = 0
    player2.setAttribute('src', 'assets/barbaro.png');
  };
  
   
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer2 + " de vida e está estunado" + '\n';
    document.getElementById("demo").innerHTML = text;
  
    vidaplayer2show = document.getElementById('vidaplayer2show'); 
    vidaplayer2show.innerHTML = vidaplayer2
   
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 900)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 900)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 900)
    }
    
    document.getElementById("botaorolarmonge").style.visibility='hidden'; 
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialmonge2").style.visibility='hidden'; 
        document.getElementById("especialmonge4").style.visibility='hidden'; 
        document.getElementById("especialmonge6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';
  
        if (vidaplayer2 < 1){
          morreuplayer2();
        }
        //turno++;
        setTimeout(function() {
            //return turnos();
            return endturn();
            }, 900)
    
    }

    function especialmonge4(){

      if(escudoplayer4 > 0){
        soma = soma / 2;
        soma = Math.floor(soma, 1); 
        escudoplayer4 = escudoplayer4 - soma
        escudoplayer4show = document.getElementById('escudoplayer4show'); 
        escudoplayer4show.innerHTML = escudoplayer4
        text += "O inimigo resistiu dano por causa do escudo" + '\n';
        document.getElementById("demo").innerHTML = text;
      if(escudoplayer4 < 1){
        
        vidaplayer4 = vidaplayer4 + escudoplayer4;
        vidaplayer4show = document.getElementById('vidaplayer4show'); 
        vidaplayer4show.innerHTML = vidaplayer4
        escudoplayer4 = 0
        document.getElementById("escudoplayer4show").style.visibility='hidden';
        player4.setAttribute('src', 'assets/guerreiro.png');
    
        atordoadoplayer4 = 1;
        document.getElementById("stunplayer4").style.visibility='visible';
        
        if(furiabarbaro4 > 1){
          furiabarbaro4 = 0
          player4.setAttribute('src', 'assets/barbaro.png');
        };
        
         
          text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer4 + " de vida e está estunado" + '\n';
          document.getElementById("demo").innerHTML = text;
      }
      soma = 0
    
      if (turno == 1){
    
        document.getElementById('player1').className = 'aninPL1atkPL4'; //animação
        setTimeout(function() {
          document.getElementById('player1').className = 'none';
          }, 600)
        }
        if (turno == 3){
        document.getElementById('player3').className = 'aninPL3atkPL4'; //animação
        setTimeout(function() {
          document.getElementById('player3').className = 'none';
          }, 600)
        }
        if (turno == 5){
        document.getElementById('player5').className = 'aninPL5atkPL4'; //animação
        setTimeout(function() {
          document.getElementById('player5').className = 'none';
          }, 600)
        }
        
        
    
    
            if (vidaplayer4 < 1){
              morreuplayer4();
            }
            return endturn();
      }
  
  soma = soma / 2;
  soma = Math.floor(soma, 1);  
  vidaplayer4 = vidaplayer4 - soma;
  atordoadoplayer4 = 1;
  document.getElementById("stunplayer4").style.visibility='visible';
  
  if(furiabarbaro4 > 1){
    furiabarbaro4 = 0
    player4.setAttribute('src', 'assets/barbaro.png');
  };
  
   
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer4 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
  
    vidaplayer4show = document.getElementById('vidaplayer4show'); 
    vidaplayer4show.innerHTML = vidaplayer4
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 900)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 900)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 900)
    }
    
    document.getElementById("botaorolarmonge").style.visibility='hidden'; 
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialmonge2").style.visibility='hidden'; 
        document.getElementById("especialmonge4").style.visibility='hidden'; 
        document.getElementById("especialmonge6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';
  
        if (vidaplayer4 < 1){
          morreuplayer4();
        }
        //turno++;
        setTimeout(function() {
            //return turnos();
            return endturn();
            }, 900)
            
    }
    function especialmonge6(){

      if(escudoplayer6 > 0){
        soma = soma / 2;
        soma = Math.floor(soma, 1); 
        escudoplayer6 = escudoplayer6 - soma
        escudoplayer6show = document.getElementById('escudoplayer6show'); 
        escudoplayer6show.innerHTML = escudoplayer6
        text += "O inimigo resistiu dano por causa do escudo" + '\n';
        document.getElementById("demo").innerHTML = text;
      if(escudoplayer6 < 1){
        
        vidaplayer6 = vidaplayer6 + escudoplayer6;
        vidaplayer6show = document.getElementById('vidaplayer6show'); 
        vidaplayer6show.innerHTML = vidaplayer6
        escudoplayer6 = 0
        document.getElementById("escudoplayer6show").style.visibility='hidden';
        player6.setAttribute('src', 'assets/guerreiro.png');
    
        atordoadoplayer6 = 1;
        document.getElementById("stunplayer6").style.visibility='visible';
        
        if(furiabarbaro6 > 1){
          furiabarbaro6 = 0
          player6.setAttribute('src', 'assets/barbaro.png');
        };
        
         
          text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer6 + " de vida e está estunado" + '\n';
          document.getElementById("demo").innerHTML = text;
      }
      soma = 0
    
      if (turno == 1){
    
        document.getElementById('player1').className = 'aninPL1atkPL6'; //animação
        setTimeout(function() {
          document.getElementById('player1').className = 'none';
          }, 600)
        }
        if (turno == 3){
        document.getElementById('player3').className = 'aninPL3atkPL6'; //animação
        setTimeout(function() {
          document.getElementById('player3').className = 'none';
          }, 600)
        }
        if (turno == 5){
        document.getElementById('player5').className = 'aninPL5atkPL6'; //animação
        setTimeout(function() {
          document.getElementById('player5').className = 'none';
          }, 600)
        }
        
        
    
    
            if (vidaplayer6 < 1){
              morreuplayer6();
            }
            return endturn();
      }
  
  soma = soma / 2;
  soma = Math.floor(soma, 1);  
  vidaplayer6 = vidaplayer6 - soma;
  atordoadoplayer6 = 1;
  document.getElementById("stunplayer6").style.visibility='visible';
  
  if(furiabarbaro6 > 1){
    furiabarbaro6 = 0
    player6.setAttribute('src', 'assets/barbaro.png');
  };
  
    
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer6 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer6show = document.getElementById('vidaplayer6show'); 
    vidaplayer6show.innerHTML = vidaplayer6
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 900)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 900)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 900)
    }
    
        document.getElementById("botaorolarmonge").style.visibility='hidden'; 
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialmonge2").style.visibility='hidden'; 
        document.getElementById("especialmonge4").style.visibility='hidden'; 
        document.getElementById("especialmonge6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';
  
        if (vidaplayer6 < 1){
          morreuplayer6();
        }
  
        return endturn();
        turno++;
        setTimeout(function() {  
            return turnos();
            }, 900)
            
    }
    
  



/*
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████████████─██████──██████─██████████████─████████████████───████████████████───██████████████─██████████─████████████████───██████████████─
─██░░░░░░░░░░██─██░░██──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░░░██───██░░░░░░░░░░██─██░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░██─
─██░░██████████─██░░██──██░░██─██░░██████████─██░░████████░░██───██░░████████░░██───██░░██████████─████░░████─██░░████████░░██───██░░██████░░██─
─██░░██─────────██░░██──██░░██─██░░██─────────██░░██────██░░██───██░░██────██░░██───██░░██───────────██░░██───██░░██────██░░██───██░░██──██░░██─
─██░░██─────────██░░██──██░░██─██░░██████████─██░░████████░░██───██░░████████░░██───██░░██████████───██░░██───██░░████████░░██───██░░██──██░░██─
─██░░██──██████─██░░██──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░░░██───██░░░░░░░░░░░░██───██░░░░░░░░░░██───██░░██───██░░░░░░░░░░░░██───██░░██──██░░██─
─██░░██──██░░██─██░░██──██░░██─██░░██████████─██░░██████░░████───██░░██████░░████───██░░██████████───██░░██───██░░██████░░████───██░░██──██░░██─
─██░░██──██░░██─██░░██──██░░██─██░░██─────────██░░██──██░░██─────██░░██──██░░██─────██░░██───────────██░░██───██░░██──██░░██─────██░░██──██░░██─
─██░░██████░░██─██░░██████░░██─██░░██████████─██░░██──██░░██████─██░░██──██░░██████─██░░██████████─████░░████─██░░██──██░░██████─██░░██████░░██─
─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░░░░░██─██░░██──██░░░░░░██─██░░░░░░░░░░██─██░░░░░░██─██░░██──██░░░░░░██─██░░░░░░░░░░██─
─██████████████─██████████████─██████████████─██████──██████████─██████──██████████─██████████████─██████████─██████──██████████─██████████████─
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
*/


  function attackguerreiro() {

    document.getElementById("especialguerreiro2").style.visibility='hidden';
    document.getElementById("especialguerreiro4").style.visibility='hidden';
    document.getElementById("especialguerreiro6").style.visibility='hidden';
  
    
    danoenemy = 0
    var dado = Math.floor( 1 + 6*Math.random() );
     soma =  soma + dado
     text += "Guerreiro acumulou " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;
    quantodano =  soma;
     contadordano = document.getElementById('contadordano'); 
     contadordano.innerHTML = quantodano;


     if (soma > 1) {
     if (vidaplayer2 > 0){
     document.getElementById("danonoinimigo2").style.visibility='visible'; 
     }
      if (vidaplayer4 > 0){
      document.getElementById("danonoinimigo4").style.visibility='visible';
      }
      if (vidaplayer6 > 0){
      document.getElementById("danonoinimigo6").style.visibility='visible';
      }
      }
      //---------------------
      
  
if (dado == '1') {
  dadoroll.unshift('assets/dice1.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '2') {
  dadoroll.unshift('assets/dice2.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '3') {
  dadoroll.unshift('assets/dice3.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '4') {
  dadoroll.unshift('assets/dice4.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '5') {
  dadoroll.unshift('assets/dice5.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '6') {
  dadoroll.unshift('assets/dice6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
      


//--------------------
if (dado == 6) {
     
  if (turno == 1 && soma > escudoplayer1){
 document.getElementById("especialguerreiro2").style.visibility='visible'; 
 }
  if (turno == 3 && soma > escudoplayer3){
  document.getElementById("especialguerreiro4").style.visibility='visible';
  }
  if (turno == 5 && soma > escudoplayer5){
  document.getElementById("especialguerreiro6").style.visibility='visible';
  }

  }
     
    
        if (dado == 1) {
      soma = 0
      text += "o GUERREIRO NO SLOT 1 ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';
         
      document.getElementById("botaorolarladino").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';
      document.getElementById("demo").innerHTML = text;
      
      if (turno == 1){
  document.getElementById("missplayer1").style.visibility='visible';
  }
  if (turno == 3){
  document.getElementById("missplayer3").style.visibility='visible';
  }
  if (turno == 5){
  document.getElementById("missplayer5").style.visibility='visible';
  }
      //turno++;
      setTimeout(function() {
      document.getElementById("missplayer1").style.visibility='hidden';
      document.getElementById("missplayer3").style.visibility='hidden';
      document.getElementById("missplayer5").style.visibility='hidden';
      //return turnos();
      return endturn();
       }, 1000)
        }
  }
  function especialguerreiro2(){

    escudoplayer1 =  soma
    
    player1.setAttribute('src', 'assets/guerreiroescudo.png');
    
    
    
    document.getElementById("escudoplayer1show").style.visibility='visible'
    
    escudoplayer1show = document.getElementById('escudoplayer1show'); 
    escudoplayer1show.innerHTML = escudoplayer1
    
     
      text += "O Guerreiro colocou " + escudoplayer1 + " de escudo de proteção." + '\n';
      document.getElementById("demo").innerHTML = text;
     
      soma = 0
      
      if (turno == 1){
      document.getElementById('player1').className = 'aninshakePL1'; //animação
      setTimeout(function() {
        document.getElementById('player1').className = 'none';
        }, 900)
      }
      if (turno == 3){
      document.getElementById('player3').className = 'aninshakePL3'; //animação
      setTimeout(function() {
        document.getElementById('player3').className = 'none';
        }, 900)
      }
      if (turno == 5){
      document.getElementById('player5').className = 'aninshakePL5'; //animação
      setTimeout(function() {
        document.getElementById('player5').className = 'none';
        }, 900)
      }

      document.getElementById("botaorolarguerreiro").style.visibility='hidden'; 
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("especialguerreiro2").style.visibility='hidden'; 
      document.getElementById("especialguerreiro4").style.visibility='hidden'; 
      document.getElementById("especialguerreiro6").style.visibility='hidden'; 
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';
      
      return endturn();
          turno++;
          setTimeout(function() {
              return turnos();
              }, 900)
      
      };

      function especialguerreiro4(){

        escudoplayer3 =  soma
        
        player3.setAttribute('src', 'assets/guerreiroescudo.png');
        
        
        
        document.getElementById("escudoplayer3show").style.visibility='visible'
        
        escudoplayer3show = document.getElementById('escudoplayer3show'); 
        escudoplayer3show.innerHTML = escudoplayer3
        
         
          text += "O Guerreiro colocou " + escudoplayer3 + " de escudo de proteção." + '\n';
          document.getElementById("demo").innerHTML = text;
         
          soma = 0
          
          if (turno == 1){
          document.getElementById('player3').className = 'aninshakePL1'; //animação
          setTimeout(function() {
            document.getElementById('player3').className = 'none';
            }, 900)
          }
          if (turno == 3){
          document.getElementById('player3').className = 'aninshakePL3'; //animação
          setTimeout(function() {
            document.getElementById('player3').className = 'none';
            }, 900)
          }
          if (turno == 5){
          document.getElementById('player5').className = 'aninshakePL5'; //animação
          setTimeout(function() {
            document.getElementById('player5').className = 'none';
            }, 900)
          }
    
          document.getElementById("botaorolarguerreiro").style.visibility='hidden'; 
          document.getElementById("danonoinimigo2").style.visibility='hidden'; 
          document.getElementById("danonoinimigo4").style.visibility='hidden';
          document.getElementById("danonoinimigo6").style.visibility='hidden';
          document.getElementById("especialguerreiro2").style.visibility='hidden'; 
          document.getElementById("especialguerreiro4").style.visibility='hidden'; 
          document.getElementById("especialguerreiro6").style.visibility='hidden'; 
          document.getElementById("auraplayer3").style.visibility='hidden';
          document.getElementById("auraplayer3").style.visibility='hidden';
          document.getElementById("auraplayer5").style.visibility='hidden';
          
          return endturn();
              turno++;
              setTimeout(function() {
                  return turnos();
                  }, 900)
          
          };

          function especialguerreiro6(){

            escudoplayer5 =  soma
            
            player5.setAttribute('src', 'assets/guerreiroescudo.png');
            
            
            
            document.getElementById("escudoplayer5show").style.visibility='visible'
            
            escudoplayer5show = document.getElementById('escudoplayer5show'); 
            escudoplayer5show.innerHTML = escudoplayer5
            
             
              text += "O Guerreiro colocou " + escudoplayer5 + " de escudo de proteção." + '\n';
              document.getElementById("demo").innerHTML = text;
             
              soma = 0
              
              if (turno == 1){
              document.getElementById('player5').className = 'aninshakePL1'; //animação
              setTimeout(function() {
                document.getElementById('player5').className = 'none';
                }, 900)
              }
              if (turno == 3){
              document.getElementById('player5').className = 'aninshakePL3'; //animação
              setTimeout(function() {
                document.getElementById('player5').className = 'none';
                }, 900)
              }
              if (turno == 5){
              document.getElementById('player5').className = 'aninshakePL5'; //animação
              setTimeout(function() {
                document.getElementById('player5').className = 'none';
                }, 900)
              }
        
              document.getElementById("botaorolarguerreiro").style.visibility='hidden'; 
              document.getElementById("danonoinimigo2").style.visibility='hidden'; 
              document.getElementById("danonoinimigo4").style.visibility='hidden';
              document.getElementById("danonoinimigo6").style.visibility='hidden';
              document.getElementById("especialguerreiro2").style.visibility='hidden'; 
              document.getElementById("especialguerreiro4").style.visibility='hidden'; 
              document.getElementById("especialguerreiro6").style.visibility='hidden'; 
              document.getElementById("auraplayer1").style.visibility='hidden';
              document.getElementById("auraplayer3").style.visibility='hidden';
              document.getElementById("auraplayer5").style.visibility='hidden';
              
              return endturn();
                  turno++;
                  setTimeout(function() {
                      return turnos();
                      }, 900)
              
              };
  
  //====================================================================================================
 //                           https://fsymbols.com/generators/tarty/                          
//───────────────────────────────────────────────────────────────────────────────────────────────
//─██████─────────██████████████─████████████───██████████─██████──────────██████─██████████████─
//─██░░██─────────██░░░░░░░░░░██─██░░░░░░░░████─██░░░░░░██─██░░██████████──██░░██─██░░░░░░░░░░██─
//─██░░██─────────██░░██████░░██─██░░████░░░░██─████░░████─██░░░░░░░░░░██──██░░██─██░░██████░░██─
//─██░░██─────────██░░██──██░░██─██░░██──██░░██───██░░██───██░░██████░░██──██░░██─██░░██──██░░██─
//─██░░██─────────██░░██████░░██─██░░██──██░░██───██░░██───██░░██──██░░██──██░░██─██░░██──██░░██─
//─██░░██─────────██░░░░░░░░░░██─██░░██──██░░██───██░░██───██░░██──██░░██──██░░██─██░░██──██░░██─
//─██░░██─────────██░░██████░░██─██░░██──██░░██───██░░██───██░░██──██░░██──██░░██─██░░██──██░░██─
//─██░░██─────────██░░██──██░░██─██░░██──██░░██───██░░██───██░░██──██░░██████░░██─██░░██──██░░██─
//─██░░██████████─██░░██──██░░██─██░░████░░░░██─████░░████─██░░██──██░░░░░░░░░░██─██░░██████░░██─
//─██░░░░░░░░░░██─██░░██──██░░██─██░░░░░░░░████─██░░░░░░██─██░░██──██████████░░██─██░░░░░░░░░░██─
//─██████████████─██████──██████─████████████───██████████─██████──────────██████─██████████████─
//───────────────────────────────────────────────────────────────────────────────────────────────                                                                           
                                                                                                    


  function attackladino() {

    
    document.getElementById("especialladino2").style.visibility='hidden';
    document.getElementById("especialladino4").style.visibility='hidden';
    document.getElementById("especialladino6").style.visibility='hidden';
  
    danoenemy = 0
    var dado = Math.floor( 1 + 6*Math.random() );
     soma =  soma + dado
     text += "Ladino acumulou " + dado + " de dano somando " + soma + '\n';
     document.getElementById("demo").innerHTML = text;

    quantodano =  soma;
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;
     if (soma > 1) {
     if (vidaplayer2 > 0){
     document.getElementById("danonoinimigo2").style.visibility='visible'; 
     }
      if (vidaplayer4 > 0){
      document.getElementById("danonoinimigo4").style.visibility='visible';
      }
      if (vidaplayer6 > 0){
      document.getElementById("danonoinimigo6").style.visibility='visible';
      }
      }
//---------------------

  
if (dado == '1') {
  dadoroll.unshift('assets/dice1.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '2') {
  dadoroll.unshift('assets/dice2.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '3') {
  dadoroll.unshift('assets/dice3.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '4') {
  dadoroll.unshift('assets/dice4.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '5') {
  dadoroll.unshift('assets/dice5.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '6') {
  dadoroll.unshift('assets/dice6.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }



//--------------------

      if (dado == 6) {
      // especialladino
      if (vidaplayer2 > 0){
     document.getElementById("especialladino2").style.visibility='visible'; 
     document.getElementById("danonoinimigo2").style.visibility='hidden'; 
     }
      if (vidaplayer4 > 0){
      document.getElementById("especialladino4").style.visibility='visible';
      document.getElementById("danonoinimigo4").style.visibility='hidden'; 
      }
      if (vidaplayer6 > 0){
      document.getElementById("especialladino6").style.visibility='visible';
      document.getElementById("danonoinimigo6").style.visibility='hidden'; 
      }

      }
     
    
        if (dado == 1) {
      soma = 0
      text += "O LADINO ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';
         
      document.getElementById("botaorolarladino").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
      document.getElementById("danonoinimigo2").style.visibility='hidden'; 
      document.getElementById("danonoinimigo4").style.visibility='hidden';
      document.getElementById("danonoinimigo6").style.visibility='hidden';
      document.getElementById("especialladino2").style.visibility='hidden'; 
      document.getElementById("especialladino4").style.visibility='hidden'; 
      document.getElementById("especialladino6").style.visibility='hidden';  
      document.getElementById("auraplayer1").style.visibility='hidden';
      document.getElementById("auraplayer3").style.visibility='hidden';
      document.getElementById("auraplayer5").style.visibility='hidden';
      document.getElementById("demo").innerHTML = text;

 
      
      if (turno == 1){
  document.getElementById("missplayer1").style.visibility='visible';
  }
  if (turno == 3){
  document.getElementById("missplayer3").style.visibility='visible';
  }
  if (turno == 5){
  document.getElementById("missplayer5").style.visibility='visible';
  }



  
      //turno++;
      setTimeout(function() {
      document.getElementById("missplayer1").style.visibility='hidden';
      document.getElementById("missplayer3").style.visibility='hidden';
      document.getElementById("missplayer5").style.visibility='hidden';
      //return turnos();
      return endturn();
       }, 1000)
        }
  }

  // especial do ladino 
  
  function especialladino2(){

    sangramento2 = sangramento2 + soma;
            sangramento2show = document.getElementById('sangramento2show'); 
            document.getElementById('sangramento2show').style.visibility='visible';
            sangramento2show.innerHTML = sangramento2

   
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer2 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer2show = document.getElementById('vidaplayer2show'); 
    vidaplayer2show.innerHTML = vidaplayer2
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 600)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 600)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 600)
    }
    
    document.getElementById("botaorolarladino").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialladino2").style.visibility='hidden'; 
        document.getElementById("especialladino4").style.visibility='hidden'; 
        document.getElementById("especialladino6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';

        if (vidaplayer2 < 1){
          morreuplayer2();
         
        }
        //turno++;
        setTimeout(function() {

            document.getElementById('player1').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
            document.getElementById('player3').className = 'none';
            document.getElementById('player5').className = 'none';    
            return endturn();
            //return turnos();
            }, 900)
    
    }
    function especialladino4(){

      sangramento4 = sangramento4 + soma;
      sangramento4show = document.getElementById('sangramento4show'); 
      document.getElementById('sangramento4show').style.visibility='visible';
      sangramento4show.innerHTML = sangramento4

   
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer4 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer4show = document.getElementById('vidaplayer4show'); 
    vidaplayer4show.innerHTML = vidaplayer4
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 600)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 600)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 600)
    }
    
    document.getElementById("botaorolarladino").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialladino2").style.visibility='hidden'; 
        document.getElementById("especialladino4").style.visibility='hidden'; 
        document.getElementById("especialladino6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';

        if (vidaplayer4 < 1){
          morreuplayer4();
         
        }
        return endturn();
        turno++;
        setTimeout(function() {
            return turnos();
            }, 400)
            
    }
    function especialladino6(){

      sangramento6 = sangramento6 + soma;
      sangramento6show = document.getElementById('sangramento6show'); 
      document.getElementById('sangramento6show').style.visibility='visible';
      sangramento6show.innerHTML = sangramento6

    
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer6 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer6show = document.getElementById('vidaplayer6show'); 
    vidaplayer6show.innerHTML = vidaplayer6
    soma = 0
    
    if (turno == 1){
    document.getElementById('player1').className = 'aninPL1atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 600)
    }
    if (turno == 3){
    document.getElementById('player3').className = 'aninPL3atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 600)
    }
    if (turno == 5){
    document.getElementById('player5').className = 'aninPL5atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 600)
    }
    
    document.getElementById("botaorolarladino").style.visibility='hidden'; 
        document.getElementById("botaorolarmago").style.visibility='hidden'; 
        document.getElementById("botaorolarguerreiro").style.visibility='hidden';
        document.getElementById("danonoinimigo2").style.visibility='hidden'; 
        document.getElementById("danonoinimigo4").style.visibility='hidden';
        document.getElementById("danonoinimigo6").style.visibility='hidden';
        document.getElementById("especialladino2").style.visibility='hidden'; 
        document.getElementById("especialladino4").style.visibility='hidden'; 
        document.getElementById("especialladino6").style.visibility='hidden'; 
        document.getElementById("auraplayer1").style.visibility='hidden';
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("auraplayer5").style.visibility='hidden';

        if (vidaplayer6 < 1){
          morreuplayer6();
        }

        return endturn();
        turno++;
        setTimeout(function() {  
            return turnos();
            }, 900)
            
    }
    

  
  //====================================================================================================

   //                           https://fsymbols.com/generators/tarty/ 
//          ─────────────────────────────────────────────────────────────────────
//          ─██████──────────██████─██████████████─██████████████─██████████████─
//          ─██░░██████████████░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
//          ─██░░░░░░░░░░░░░░░░░░██─██░░██████░░██─██░░██████████─██░░██████░░██─
//          ─██░░██████░░██████░░██─██░░██──██░░██─██░░██─────────██░░██──██░░██─
//          ─██░░██──██░░██──██░░██─██░░██████░░██─██░░██─────────██░░██──██░░██─
//          ─██░░██──██░░██──██░░██─██░░░░░░░░░░██─██░░██──██████─██░░██──██░░██─
//          ─██░░██──██████──██░░██─██░░██████░░██─██░░██──██░░██─██░░██──██░░██─
//          ─██░░██──────────██░░██─██░░██──██░░██─██░░██──██░░██─██░░██──██░░██─
//          ─██░░██──────────██░░██─██░░██──██░░██─██░░██████░░██─██░░██████░░██─
//          ─██░░██──────────██░░██─██░░██──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
//          ─██████──────────██████─██████──██████─██████████████─██████████████─
//          ─────────────────────────────────────────────────────────────────────

function attackmago() {

  document.getElementById("especialmago").style.visibility='hidden';

  danoenemy = 0
  var dado = Math.floor( 1 + 6*Math.random() );
   soma =  soma + dado
   text += "mago acumulou " + dado + " de dano somando " + soma + '\n';
   document.getElementById("demo").innerHTML = text;

  quantodano =  soma;
   contadordano = document.getElementById('contadordano'); 
   contadordano.innerHTML = quantodano;

   if (soma > 1) {
   if (vidaplayer2 > 0){
   document.getElementById("danonoinimigo2").style.visibility='visible'; 
   }
    if (vidaplayer4 > 0){
    document.getElementById("danonoinimigo4").style.visibility='visible';
    }
    if (vidaplayer6 > 0){
    document.getElementById("danonoinimigo6").style.visibility='visible';
    }
    }

    
  
if (dado == '1') {
  dadoroll.unshift('assets/dice1.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '2') {
  dadoroll.unshift('assets/dice2.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '3') {
  dadoroll.unshift('assets/dice3.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '4') {
  dadoroll.unshift('assets/dice4.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }
  if (dado == '5') {
  dadoroll.unshift('assets/dice5.png');
  document.getElementById('dice1').src=dadoroll[0]; 
  document.getElementById('dice2').src=dadoroll[1]; 
  document.getElementById('dice3').src=dadoroll[2]; 
  document.getElementById('dice4').src=dadoroll[3]; 
  document.getElementById('dice5').src=dadoroll[4]; 
  document.getElementById('dice6').src=dadoroll[5]; 
  document.getElementById('dice7').src=dadoroll[6]; 
  document.getElementById('dice8').src=dadoroll[7]; 
  document.getElementById('dice9').src=dadoroll[8]; 
  document.getElementById('dice10').src=dadoroll[9]; 
  
  }

    if (dado == 6) {
      dadoroll.unshift('assets/dice6.png');
document.getElementById('dice1').src=dadoroll[0]; 
document.getElementById('dice2').src=dadoroll[1]; 
document.getElementById('dice3').src=dadoroll[2]; 
document.getElementById('dice4').src=dadoroll[3]; 
document.getElementById('dice5').src=dadoroll[4]; 
document.getElementById('dice6').src=dadoroll[5]; 
document.getElementById('dice7').src=dadoroll[6]; 
document.getElementById('dice8').src=dadoroll[7]; 
document.getElementById('dice9').src=dadoroll[8]; 
document.getElementById('dice10').src=dadoroll[9]; 
   
  
   document.getElementById("especialmago").style.visibility='visible'; 
   document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden'; 
    document.getElementById("danonoinimigo6").style.visibility='hidden'; 
    

    };
   
  
      if (dado == 1) {
    soma = 0
    text += "O mago ERROU PERDENDO " + soma + "  de dano acumulado " + '\n';
       
    document.getElementById("botaorolarladino").style.visibility='hidden'; 
      document.getElementById("botaorolarmago").style.visibility='hidden'; 
      document.getElementById("botaorolarguerreiro").style.visibility='hidden';
    document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden';
    document.getElementById("danonoinimigo6").style.visibility='hidden'; 
    document.getElementById("auraplayer1").style.visibility='hidden';
    document.getElementById("auraplayer3").style.visibility='hidden';
    document.getElementById("auraplayer5").style.visibility='hidden';
    document.getElementById("demo").innerHTML = text;


    
    if (turno == 1){
document.getElementById("missplayer1").style.visibility='visible';
}
if (turno == 3){
document.getElementById("missplayer3").style.visibility='visible';
}
if (turno == 5){
document.getElementById("missplayer5").style.visibility='visible';
}
    //turno++;
    setTimeout(function() {
    document.getElementById("missplayer1").style.visibility='hidden';
    document.getElementById("missplayer3").style.visibility='hidden';
    document.getElementById("missplayer5").style.visibility='hidden';
    //return turnos();
    return endturn();
     }, 1000)
      }
}

function especialmago(){
//  soma = soma / 2;
// soma = Math.floor(soma, 1);  isso faz o mago causar metade do dano, mas ta muito fraco

 vidaplayer2 = vidaplayer2 - soma;
 vidaplayer4 = vidaplayer4 - soma;
 vidaplayer6 = vidaplayer6 - soma;
text += "O todos os inimigos sofreram " + soma + " de dano!" + '\n';
document.getElementById("demo").innerHTML = text;
vidaplayer2show = document.getElementById('vidaplayer2show'); 
vidaplayer2show.innerHTML = vidaplayer2

vidaplayer4show = document.getElementById('vidaplayer4show'); 
vidaplayer4show.innerHTML = vidaplayer4

vidaplayer6show = document.getElementById('vidaplayer6show'); 
vidaplayer6show.innerHTML = vidaplayer6

soma = 0
      if (vidaplayer2 < 1){
      morreuplayer2();
      }
      if (vidaplayer4 < 1){
      morreuplayer4();
      }
      if (vidaplayer6 < 1){
      morreuplayer6();
      }

if (turno == 1){
document.getElementById('player1').className = 'aninPL1magespc'; //animação
setTimeout(function() {
  document.getElementById('player1').className = 'none';
  }, 900)
}
if (turno == 3){
document.getElementById('player3').className = 'aninPL3magespc'; //animação
setTimeout(function() {
  document.getElementById('player3').className = 'none';
  }, 900)
}
if (turno == 5){
document.getElementById('player5').className = 'aninPL5magespc'; //animação
setTimeout(function() {
  document.getElementById('player5').className = 'none';
  }, 900)
}

document.getElementById("especialmagohgif").style.visibility='visible';
setTimeout(function() {
  document.getElementById("especialmagohgif").style.visibility='hidden';
      }, 500)




document.getElementById("botaorolarladino").style.visibility='hidden'; 
    document.getElementById("botaorolarmago").style.visibility='hidden'; 
    document.getElementById("botaorolarguerreiro").style.visibility='hidden';
    document.getElementById("danonoinimigo2").style.visibility='hidden'; 
    document.getElementById("danonoinimigo4").style.visibility='hidden';
    document.getElementById("danonoinimigo6").style.visibility='hidden';
    document.getElementById("especialmago").style.visibility='hidden'; 
    document.getElementById("auraplayer1").style.visibility='hidden';
    document.getElementById("auraplayer3").style.visibility='hidden';
    document.getElementById("auraplayer5").style.visibility='hidden';

    return endturn();
    turno++;
    setTimeout(function() {    
    return turnos();
        }, 900)
        
}



//                                            ------------------------
//                                           ===========================
//                                         ---------------------------



  //===================================================== botão de dano nos inimigos 

  
  function danonoinimigo2(){


    if(escudoplayer2 > 0){
      escudoplayer2 = escudoplayer2 - soma
      escudoplayer2show = document.getElementById('escudoplayer2show'); 
      escudoplayer2show.innerHTML = escudoplayer2
      text += "O inimigo resistiu dano por causa do escudo" + '\n';
      document.getElementById("demo").innerHTML = text;
    if(escudoplayer2 < 1){
      
      vidaplayer2 = vidaplayer2 + escudoplayer2;
      vidaplayer2show = document.getElementById('vidaplayer2show'); 
      vidaplayer2show.innerHTML = vidaplayer2
      
      document.getElementById("escudoplayer2show").style.visibility='hidden';
      player2.setAttribute('src', 'assets/guerreiro.png');

      if (turno == 1 && slot1[4] == 'vampiro'){
        
          escudoplayer2 = escudoplayer2 * -1;
          escudoplayer2 = escudoplayer2 / 2;
          escudoplayer2 = Math.floor(escudoplayer2, 1);  
          vidaplayer1 = vidaplayer1 + escudoplayer2
          if (sangramento1 > 0){
            sangramento1 = 0
            document.getElementById('sangramento1show').style.visibility='hidden';
          };
  
      if (vidaplayer1 > slot1[3]){
        vidaplayer1 = slot1[3]
        };
        vidaplayer1show = document.getElementById('vidaplayer1show'); 
      vidaplayer1show.innerHTML = vidaplayer1
        document.getElementById("healplayer1").style.visibility='visible';
        setTimeout(function() {
          document.getElementById("healplayer1").style.visibility='hidden';
            }, 600)
  
          }
          if (turno == 3 && slot3[4] == 'vampiro'){
        
            escudoplayer2 = escudoplayer2 * -1;
            escudoplayer2 = escudoplayer2 / 2;
            escudoplayer2 = Math.floor(escudoplayer2, 1);  
            vidaplayer3 = vidaplayer3 + escudoplayer2
            if (sangramento3 > 0){
              sangramento3 = 0
              document.getElementById('sangramento3show').style.visibility='hidden';
            };
    
        if (vidaplayer3 > slot3[3]){
          vidaplayer3 = slot3[3]
          };
          vidaplayer3show = document.getElementById('vidaplayer3show'); 
        vidaplayer3show.innerHTML = vidaplayer3
          document.getElementById("healplayer3").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer3").style.visibility='hidden';
              }, 600)
    
            }
            if (turno == 5 && slot5[4] == 'vampiro'){
        
              escudoplayer2 = escudoplayer2 * -1;
              escudoplayer2 = escudoplayer2 / 2;
              escudoplayer2 = Math.floor(escudoplayer2, 1);  
              vidaplayer5 = vidaplayer5 + escudoplayer2
              if (sangramento5 > 0){
                sangramento5 = 0
                document.getElementById('sangramento5show').style.visibility='hidden';
              };
      
          if (vidaplayer5 > slot5[3]){
            vidaplayer5 = slot5[3]
            };
            vidaplayer5show = document.getElementById('vidaplayer5show'); 
          vidaplayer5show.innerHTML = vidaplayer5
            document.getElementById("healplayer5").style.visibility='visible';
            setTimeout(function() {
              document.getElementById("healplayer5").style.visibility='hidden';
                }, 600)
      
              }
              escudoplayer2 = 0
    }
    soma = 0

    if (turno == 1){
    

      document.getElementById('player1').className = 'aninPL1atkPL2'; //animação
      setTimeout(function() {
        document.getElementById('player1').className = 'none';
        }, 600)
      }
      if (turno == 3){
      document.getElementById('player3').className = 'aninPL3atkPL2'; //animação
      setTimeout(function() {
        document.getElementById('player3').className = 'none';
        }, 600)
      }
      if (turno == 5){
      document.getElementById('player5').className = 'aninPL5atkPL2'; //animação
      setTimeout(function() {
        document.getElementById('player5').className = 'none';
        }, 600)
      }
      
      
      
  
          if (vidaplayer2 < 1){
            morreuplayer2();
          }
          return endturn();
    }



    vidaplayer2 = vidaplayer2 - soma
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer2 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer2show = document.getElementById('vidaplayer2show'); 
    vidaplayer2show.innerHTML = vidaplayer2
   
    
    if (turno == 1){
      if (slot1[4] == 'vampiro'){

        soma = soma / 2;
        soma = Math.floor(soma, 1);  
        vidaplayer1 = vidaplayer1 + soma
        if (sangramento1 > 0){
          sangramento1 = 0
          document.getElementById('sangramento1show').style.visibility='hidden';
        };

    if (vidaplayer1 > slot1[3]){
      vidaplayer1 = slot1[3]
      };
      vidaplayer1show = document.getElementById('vidaplayer1show'); 
    vidaplayer1show.innerHTML = vidaplayer1
      document.getElementById("healplayer1").style.visibility='visible';
      setTimeout(function() {
        document.getElementById("healplayer1").style.visibility='hidden';
          }, 600)

      }      
    document.getElementById('player1').className = 'aninPL1atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 600)
    }
    if (turno == 3){
      if (slot3[4] == 'vampiro'){

        soma = soma / 2;
        soma = Math.floor(soma, 1);  
        vidaplayer3 = vidaplayer3 + soma
        if (sangramento3 > 0){
          sangramento3 = 0
          document.getElementById('sangramento3show').style.visibility='hidden';
        };

    if (vidaplayer3 > slot3[3]){
      vidaplayer3 = slot3[3]
      };
      vidaplayer3show = document.getElementById('vidaplayer3show'); 
    vidaplayer3show.innerHTML = vidaplayer3
      document.getElementById("healplayer3").style.visibility='visible';
      setTimeout(function() {
        document.getElementById("healplayer3").style.visibility='hidden';
          }, 600)

      } 
    document.getElementById('player3').className = 'aninPL3atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 600)
    }
    if (turno == 5){
      if (slot5[4] == 'vampiro'){

        soma = soma / 2;
        soma = Math.floor(soma, 1);  
        vidaplayer5 = vidaplayer5 + soma
        
        if (sangramento5 > 0){
          sangramento5 = 0
          document.getElementById('sangramento5show').style.visibility='hidden';
        };
    if (vidaplayer5 > slot5[3]){
      vidaplayer5 = slot5[3]
      };
      vidaplayer5show = document.getElementById('vidaplayer5show'); 
    vidaplayer5show.innerHTML = vidaplayer5
      document.getElementById("healplayer5").style.visibility='visible';
      setTimeout(function() {
        document.getElementById("healplayer5").style.visibility='hidden';
          }, 600)

      } 
    document.getElementById('player5').className = 'aninPL5atkPL2'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 600)
    }
    
    
    soma = 0


        if (vidaplayer2 < 1){
          morreuplayer2();
        }
        return endturn();

    }


    function danonoinimigo4(){

      
    if(escudoplayer4 > 0){
      escudoplayer4 = escudoplayer4 - soma
      escudoplayer4show = document.getElementById('escudoplayer4show'); 
      escudoplayer4show.innerHTML = escudoplayer4
      text += "O inimigo resistiu dano por causa do escudo" + '\n';
      document.getElementById("demo").innerHTML = text;
    if(escudoplayer4 < 1){
      
      vidaplayer4 = vidaplayer4 + escudoplayer4;
      vidaplayer4show = document.getElementById('vidaplayer4show'); 
      vidaplayer4show.innerHTML = vidaplayer4
      
      document.getElementById("escudoplayer4show").style.visibility='hidden';
      player4.setAttribute('src', 'assets/guerreiro.png');
      if (turno == 1 && slot1[4] == 'vampiro'){
        
        escudoplayer4 = escudoplayer4 * -1;
        escudoplayer4 = escudoplayer4 / 2;
        escudoplayer4 = Math.floor(escudoplayer4, 1);  
        vidaplayer1 = vidaplayer1 + escudoplayer4
        if (sangramento1 > 0){
          sangramento1 = 0
          document.getElementById('sangramento1show').style.visibility='hidden';
        };

    if (vidaplayer1 > slot1[3]){
      vidaplayer1 = slot1[3]
      };
      vidaplayer1show = document.getElementById('vidaplayer1show'); 
    vidaplayer1show.innerHTML = vidaplayer1
      document.getElementById("healplayer1").style.visibility='visible';
      setTimeout(function() {
        document.getElementById("healplayer1").style.visibility='hidden';
          }, 600)

        }
        if (turno == 3 && slot3[4] == 'vampiro'){
      
          escudoplayer4 = escudoplayer4 * -1;
          escudoplayer4 = escudoplayer4 / 2;
          escudoplayer4 = Math.floor(escudoplayer4, 1);  
          vidaplayer3 = vidaplayer3 + escudoplayer4
          if (sangramento3 > 0){
            sangramento3 = 0
            document.getElementById('sangramento3show').style.visibility='hidden';
          };
  
      if (vidaplayer3 > slot3[3]){
        vidaplayer3 = slot3[3]
        };
        vidaplayer3show = document.getElementById('vidaplayer3show'); 
      vidaplayer3show.innerHTML = vidaplayer3
        document.getElementById("healplayer3").style.visibility='visible';
        setTimeout(function() {
          document.getElementById("healplayer3").style.visibility='hidden';
            }, 600)
  
          }
          if (turno == 5 && slot5[4] == 'vampiro'){
      
            escudoplayer4 = escudoplayer4 * -1;
            escudoplayer4 = escudoplayer4 / 2;
            escudoplayer4 = Math.floor(escudoplayer4, 1);  
            vidaplayer5 = vidaplayer5 + escudoplayer4
            if (sangramento5 > 0){
              sangramento5 = 0
              document.getElementById('sangramento5show').style.visibility='hidden';
            };
    
        if (vidaplayer5 > slot5[3]){
          vidaplayer5 = slot5[3]
          };
          vidaplayer5show = document.getElementById('vidaplayer5show'); 
        vidaplayer5show.innerHTML = vidaplayer5
          document.getElementById("healplayer5").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer5").style.visibility='hidden';
              }, 600)
    
            }
            escudoplayer4 = 0
    }
  
   

    if (turno == 1){
      document.getElementById('player1').className = 'aninPL1atkPL4'; //animação
      setTimeout(function() {
        document.getElementById('player1').className = 'none';
        }, 600)
      }
      if (turno == 3){
      document.getElementById('player3').className = 'aninPL3atkPL4'; //animação
      setTimeout(function() {
        document.getElementById('player3').className = 'none';
        }, 600)
      }
      if (turno == 5){
      document.getElementById('player5').className = 'aninPL5atkPL4'; //animação
      setTimeout(function() {
        document.getElementById('player5').className = 'none';
        }, 600)
      }
      
      soma = 0
          if (vidaplayer4 < 1){
            morreuplayer4();
          }
          return endturn();

  }


    vidaplayer4 = vidaplayer4 - soma
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer4 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer4show = document.getElementById('vidaplayer4show'); 
    vidaplayer4show.innerHTML = vidaplayer4
    
    
    if (turno == 1){
      if (slot1[4] == 'vampiro'){

        soma = soma / 2;
        soma = Math.floor(soma, 1);  
        vidaplayer1 = vidaplayer1 + soma
        if (sangramento1 > 0){
          sangramento1 = 0
          document.getElementById('sangramento1show').style.visibility='hidden';
        };

    if (vidaplayer1 > slot1[3]){
      vidaplayer1 = slot1[3]
      };
      vidaplayer1show = document.getElementById('vidaplayer1show'); 
    vidaplayer1show.innerHTML = vidaplayer1
      document.getElementById("healplayer1").style.visibility='visible';
      setTimeout(function() {
        document.getElementById("healplayer1").style.visibility='hidden';
          }, 600)

      } 
    document.getElementById('player1').className = 'aninPL1atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 600)
    }
    if (turno == 3){
      if (slot3[4] == 'vampiro'){

        soma = soma / 2;
        soma = Math.floor(soma, 1);  
        vidaplayer3 = vidaplayer3 + soma
        if (sangramento3 > 0){
          sangramento3 = 0
          document.getElementById('sangramento3show').style.visibility='hidden';
        };

    if (vidaplayer3 > slot3[3]){
      vidaplayer3 = slot3[3]
      };
      vidaplayer3show = document.getElementById('vidaplayer3show'); 
    vidaplayer3show.innerHTML = vidaplayer3
      document.getElementById("healplayer3").style.visibility='visible';
      setTimeout(function() {
        document.getElementById("healplayer3").style.visibility='hidden';
          }, 600)

      } 
    document.getElementById('player3').className = 'aninPL3atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 600)
    }
    if (turno == 5){
      if (slot5[4] == 'vampiro'){

        soma = soma / 2;
        soma = Math.floor(soma, 1);  
        vidaplayer5 = vidaplayer5 + soma
        
        if (sangramento5 > 0){
          sangramento5 = 0
          document.getElementById('sangramento5show').style.visibility='hidden';
        };
    if (vidaplayer5 > slot5[3]){
      vidaplayer5 = slot5[3]
      };
      vidaplayer5show = document.getElementById('vidaplayer5show'); 
    vidaplayer5show.innerHTML = vidaplayer5
      document.getElementById("healplayer5").style.visibility='visible';
      setTimeout(function() {
        document.getElementById("healplayer5").style.visibility='hidden';
          }, 600)

      } 
    document.getElementById('player5').className = 'aninPL5atkPL4'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 600)
    }
    
    soma = 0
        if (vidaplayer4 < 1){
          morreuplayer4();
        }
        return endturn();
            
    }
    function danonoinimigo6(){

 
      if(escudoplayer6 > 0){
        escudoplayer6 = escudoplayer6 - soma
        escudoplayer6show = document.getElementById('escudoplayer6show'); 
        escudoplayer6show.innerHTML = escudoplayer6
        text += "O inimigo resistiu dano por causa do escudo" + '\n';
        document.getElementById("demo").innerHTML = text;
      if(escudoplayer6 < 1){
        
        vidaplayer6 = vidaplayer6 + escudoplayer6;
        vidaplayer6show = document.getElementById('vidaplayer6show'); 
        vidaplayer6show.innerHTML = vidaplayer6
        
        document.getElementById("escudoplayer6show").style.visibility='hidden';
        player6.setAttribute('src', 'assets/guerreiro.png');
        if (turno == 1 && slot1[4] == 'vampiro'){
        
          escudoplayer6 = escudoplayer6 * -1;
          escudoplayer6 = escudoplayer6 / 2;
          escudoplayer6 = Math.floor(escudoplayer6, 1);  
          vidaplayer1 = vidaplayer1 + escudoplayer6
          if (sangramento1 > 0){
            sangramento1 = 0
            document.getElementById('sangramento1show').style.visibility='hidden';
          };
  
      if (vidaplayer1 > slot1[3]){
        vidaplayer1 = slot1[3]
        };
        vidaplayer1show = document.getElementById('vidaplayer1show'); 
      vidaplayer1show.innerHTML = vidaplayer1
        document.getElementById("healplayer1").style.visibility='visible';
        setTimeout(function() {
          document.getElementById("healplayer1").style.visibility='hidden';
            }, 600)
  
          }
          if (turno == 3 && slot3[4] == 'vampiro'){
        
            escudoplayer6 = escudoplayer6 * -1;
            escudoplayer6 = escudoplayer6 / 2;
            escudoplayer6 = Math.floor(escudoplayer6, 1);  
            vidaplayer3 = vidaplayer3 + escudoplayer6
            if (sangramento3 > 0){
              sangramento3 = 0
              document.getElementById('sangramento3show').style.visibility='hidden';
            };
    
        if (vidaplayer3 > slot3[3]){
          vidaplayer3 = slot3[3]
          };
          vidaplayer3show = document.getElementById('vidaplayer3show'); 
        vidaplayer3show.innerHTML = vidaplayer3
          document.getElementById("healplayer3").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer3").style.visibility='hidden';
              }, 600)
    
            }
            if (turno == 5 && slot5[4] == 'vampiro'){
        
              escudoplayer6 = escudoplayer6 * -1;
              escudoplayer6 = escudoplayer6 / 2;
              escudoplayer6 = Math.floor(escudoplayer6, 1);  
              vidaplayer5 = vidaplayer5 + escudoplayer6
              
              if (sangramento5 > 0){
                sangramento5 = 0
                document.getElementById('sangramento5show').style.visibility='hidden';
              };
          if (vidaplayer5 > slot5[3]){
            vidaplayer5 = slot5[3]
            };
            vidaplayer5show = document.getElementById('vidaplayer5show'); 
          vidaplayer5show.innerHTML = vidaplayer5
            document.getElementById("healplayer5").style.visibility='visible';
            setTimeout(function() {
              document.getElementById("healplayer5").style.visibility='hidden';
                }, 600)
      
              }
              escudoplayer6 = 0
      }
      soma = 0
      
    if (turno == 1){
      document.getElementById('player1').className = 'aninPL1atkPL6'; //animação
      setTimeout(function() {
        document.getElementById('player1').className = 'none';
        }, 600)
      }
      if (turno == 3){
      document.getElementById('player3').className = 'aninPL3atkPL6'; //animação
      setTimeout(function() {
        document.getElementById('player3').className = 'none';
        }, 600)
      }
      if (turno == 5){
      document.getElementById('player5').className = 'aninPL5atkPL6'; //animação
      setTimeout(function() {
        document.getElementById('player5').className = 'none';
        }, 600)
      }
     
          if (vidaplayer6 < 1){
            morreuplayer6();
          }
        
              return endturn();
    }


    vidaplayer6 = vidaplayer6 - soma
    text += "O inimigo sofreu " + soma + " de dano restando " + vidaplayer6 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
    vidaplayer6show = document.getElementById('vidaplayer6show'); 
    vidaplayer6show.innerHTML = vidaplayer6
  
    
    if (turno == 1){
      if (slot1[4] == 'vampiro'){

        soma = soma / 2;
        soma = Math.floor(soma, 1);  
        vidaplayer1 = vidaplayer1 + soma
        if (sangramento1 > 0){
          sangramento1 = 0
          document.getElementById('sangramento1show').style.visibility='hidden';
        };

    if (vidaplayer1 > slot1[3]){
      vidaplayer1 = slot1[3]
      };
      vidaplayer1show = document.getElementById('vidaplayer1show'); 
    vidaplayer1show.innerHTML = vidaplayer1
      document.getElementById("healplayer1").style.visibility='visible';
      setTimeout(function() {
        document.getElementById("healplayer1").style.visibility='hidden';
          }, 600)

      } 
    document.getElementById('player1').className = 'aninPL1atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player1').className = 'none';
      }, 600)
    }
    if (turno == 3){
      if (slot3[4] == 'vampiro'){

        soma = soma / 2;
        soma = Math.floor(soma, 1);  
        vidaplayer3 = vidaplayer3 + soma
        if (sangramento3 > 0){
          sangramento3 = 0
          document.getElementById('sangramento3show').style.visibility='hidden';
        };

    if (vidaplayer3 > slot3[3]){
      vidaplayer3 = slot3[3]
      };
      vidaplayer3show = document.getElementById('vidaplayer3show'); 
    vidaplayer3show.innerHTML = vidaplayer3
      document.getElementById("healplayer3").style.visibility='visible';
      setTimeout(function() {
        document.getElementById("healplayer3").style.visibility='hidden';
          }, 600)

      } 
    document.getElementById('player3').className = 'aninPL3atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player3').className = 'none';
      }, 600)
    }
    if (turno == 5){
      if (slot5[4] == 'vampiro'){

        soma = soma / 2;
        soma = Math.floor(soma, 1);  
        vidaplayer5 = vidaplayer5 + soma
        if (sangramento5 > 0){
          sangramento5 = 0
          document.getElementById('sangramento5show').style.visibility='hidden';
        };

    if (vidaplayer5 > slot5[3]){
      vidaplayer5 = slot5[3]
      };
      vidaplayer5show = document.getElementById('vidaplayer5show'); 
    vidaplayer5show.innerHTML = vidaplayer5
      document.getElementById("healplayer5").style.visibility='visible';
      setTimeout(function() {
        document.getElementById("healplayer5").style.visibility='hidden';
          }, 600)

      } 
    document.getElementById('player5').className = 'aninPL5atkPL6'; //animação
    setTimeout(function() {
      document.getElementById('player5').className = 'none';
      }, 600)
    }
    soma = 0
        if (vidaplayer6 < 1){
          morreuplayer6();
        }
      
            return endturn();
            
    }
    