
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
function vampiroenemy(){
    
    //let halfdamage;
     for (;;) {
    if (danoenemy < 15) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "o vampiro tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;

    quantodano =  danoenemy;
    contadordano = document.getElementById('contadordano'); 
    contadordano.innerHTML = quantodano;
      
if (dadoenemy == '1') {
  dadoroll.unshift('assets/diceenemy1.png');
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
  if (dadoenemy == '2') {
  dadoroll.unshift('assets/diceenemy2.png');
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
  if (dadoenemy == '3') {
  dadoroll.unshift('assets/diceenemy3.png');
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
  if (dadoenemy == '4') {
  dadoroll.unshift('assets/diceenemy4.png');
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
  if (dadoenemy == '5') {
  dadoroll.unshift('assets/diceenemy5.png');
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

    if (dadoenemy == 6) {
      dadoroll.unshift('assets/diceenemy6.png');
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
     
    // if (dadoenemy == 6 && danoenemy > 7){
        
       
        

    //     if (turno == 2){
    //         halfdamage = danoenemy / 2;
    //         halfdamage = Math.floor(halfdamage, 1);  
    //         vidaplayer2 = vidaplayer2 + halfdamage
    //         if (vidaplayer2 > slot2[3]){
    //         vidaplayer2 = slot2[3]
    //         }
    //         vidaplayer2show = document.getElementById('vidaplayer2show'); 
    //         vidaplayer2show.innerHTML = vidaplayer2
    //         document.getElementById("healplayer2").style.visibility='visible'
    //         setTimeout(function() {
    //         document.getElementById("healplayer2").style.visibility='hidden'
    //          }, 900)
    //         halfdamage = 0;
    //         return danoaleatorioenemy1();
    //         }
    //     if (turno == 4){
    //             halfdamage = danoenemy / 2;
    //             halfdamage = Math.floor(halfdamage, 1);  
    //             vidaplayer4 = vidaplayer4 + halfdamage
    //             if (vidaplayer4 > slot4[3]){
    //             vidaplayer4 = slot4[3]
    //             }
    //             vidaplayer4show = document.getElementById('vidaplayer4show'); 
    //             vidaplayer4show.innerHTML = vidaplayer4
    //             document.getElementById("healplayer4").style.visibility='visible'
    //             setTimeout(function() {
    //              document.getElementById("healplayer4").style.visibility='hidden'
    //              }, 900)
    //               halfdamage = 0;
    //             return danoaleatorioenemy1();
    //             }
    //     if (turno == 6){
    //             halfdamage = danoenemy / 2;
    //             halfdamage = Math.floor(halfdamage, 1);  
    //             vidaplayer6 = vidaplayer6 + halfdamage
    //             if (vidaplayer6 > slot6[3]){
    //             vidaplayer6 = slot6[3]
    //             }
    //             vidaplayer6show = document.getElementById('vidaplayer6show'); 
    //             vidaplayer6show.innerHTML = vidaplayer6
    //             document.getElementById("healplayer6").style.visibility='visible'
    //             setTimeout(function() {
    //             document.getElementById("healplayer6").style.visibility='hidden'
    //             }, 900)
    //              halfdamage = 0;
    //             return danoaleatorioenemy1();
    //         }

            

    // }


    

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
       return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}





/* https://fsymbols.com/generators/tarty/
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
function barbaroenemy(){
    
    
    
    
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 25) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
	//var dado4enemy = Math.floor( 1 + 4*Math.random() );
    danoenemy = danoenemy + dadoenemy;
   

     if (turno == 2 && furiabarbaro2 > 1){
      danoenemy =  danoenemy + dadoenemy
      text += "barbaro acumulou " + dadoenemy + " e " + dadoenemy + " de dano danoenemyndo " + danoenemy + '\n';
     document.getElementById("demo").innerHTML = text;
     
     if (dadoenemy == '1') {
      dadoroll.unshift('assets/diceenemy1.png');
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
      if (dadoenemy == '2') {
      dadoroll.unshift('assets/diceenemy2.png');
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
      if (dadoenemy == '3') {
      dadoroll.unshift('assets/diceenemy3.png');
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
      if (dadoenemy == '4') {
      dadoroll.unshift('assets/diceenemy4.png');
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
      if (dadoenemy == '5') {
      dadoroll.unshift('assets/diceenemy5.png');
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
    
        if (dadoenemy == 6) {
          dadoroll.unshift('assets/diceenemy6.png');
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
       if (turno == 4 && furiabarbaro4 > 1){
        danoenemy =  danoenemy + dadoenemy
        text += "barbaro acumulou " + dadoenemy + " e " + dadoenemy + " de dano danoenemyndo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        
     if (dadoenemy == '1') {
      dadoroll.unshift('assets/diceenemy1.png');
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
      if (dadoenemy == '2') {
      dadoroll.unshift('assets/diceenemy2.png');
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
      if (dadoenemy == '3') {
      dadoroll.unshift('assets/diceenemy3.png');
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
      if (dadoenemy == '4') {
      dadoroll.unshift('assets/diceenemy4.png');
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
      if (dadoenemy == '5') {
      dadoroll.unshift('assets/diceenemy5.png');
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
    
        if (dadoenemy == 6) {
          dadoroll.unshift('assets/diceenemy6.png');
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
       if (turno == 6 && furiabarbaro6 > 1){
        danoenemy =  danoenemy + dadoenemy
        text += "barbaro acumulou " + dadoenemy + " e " + dadoenemy + " de dano danoenemyndo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        
     if (dadoenemy == '1') {
      dadoroll.unshift('assets/diceenemy1.png');
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
      if (dadoenemy == '2') {
      dadoroll.unshift('assets/diceenemy2.png');
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
      if (dadoenemy == '3') {
      dadoroll.unshift('assets/diceenemy3.png');
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
      if (dadoenemy == '4') {
      dadoroll.unshift('assets/diceenemy4.png');
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
      if (dadoenemy == '5') {
      dadoroll.unshift('assets/diceenemy5.png');
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
    
        if (dadoenemy == 6) {
          dadoroll.unshift('assets/diceenemy6.png');
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

       if (turno == 2 && furiabarbaro2 < 1){
        text += "barbaro acumulou " + dadoenemy + " de dano danoenemyndo " + danoenemy + '\n';
     document.getElementById("demo").innerHTML = text;
        }
         if (turno == 4 && furiabarbaro4 < 1){
          text += "barbaro acumulou " + dadoenemy + " de dano danoenemyndo " + danoenemy + '\n';
     document.getElementById("demo").innerHTML = text;
         }
         if (turno == 6 && furiabarbaro6 < 1){
          text += "barbaro acumulou " + dadoenemy + " de dano danoenemyndo " + danoenemy + '\n';
     document.getElementById("demo").innerHTML = text;
         }
	 
	 
         quantodano =  danoenemy;
         contadordano = document.getElementById('contadordano'); 
         contadordano.innerHTML = quantodano;
           
     if (dadoenemy == '1') {
       dadoroll.unshift('assets/diceenemy1.png');
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
       if (dadoenemy == '2') {
       dadoroll.unshift('assets/diceenemy2.png');
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
       if (dadoenemy == '3') {
       dadoroll.unshift('assets/diceenemy3.png');
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
       if (dadoenemy == '4') {
       dadoroll.unshift('assets/diceenemy4.png');
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
       if (dadoenemy == '5') {
       dadoroll.unshift('assets/diceenemy5.png');
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
     
         if (dadoenemy == 6) {
           dadoroll.unshift('assets/diceenemy6.png');
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
	 
	 
	 
	 
	 
	 
	 
	 
    if (dadoenemy == 6 && danoenemy < 15){
      
         if (turno == 2 && furiabarbaro2 < 1){
	 return especialbarbaroenemy2();
        }
         if (turno == 4 && furiabarbaro4 < 1){
	 return especialbarbaroenemy4();
         }
         if (turno == 6 && furiabarbaro6 < 1){
	 return especialbarbaroenemy6();
         }
    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}
function especialbarbaroenemy2(){

    furiabarbaro2 = 5;

    text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
    document.getElementById("demo").innerHTML = text;
    danoenemy = 0
    
    player2.setAttribute('src', 'https://i.imgur.com/3MDK5ke.png');
      document.getElementById('player2').className = 'aninshakePL2'; //animação
      setTimeout(function() {
        document.getElementById('player2').className = 'none';
        }, 600)

		return passarturno();

};
function especialbarbaroenemy4(){

    furiabarbaro4 = 5;

    text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
    document.getElementById("demo").innerHTML = text;
    danoenemy = 0
    
    player4.setAttribute('src', 'https://i.imgur.com/3MDK5ke.png');
      document.getElementById('player4').className = 'aninshakePL4'; //animação
      setTimeout(function() {
        document.getElementById('player4').className = 'none';
        }, 600)

		return passarturno();

};
function especialbarbaroenemy6(){

    furiabarbaro6 = 5;

    text += "O barbaro usou FURIA perdendo todo o dano" + '\n';
    document.getElementById("demo").innerHTML = text;
    danoenemy = 0
    
    player6.setAttribute('src', 'https://i.imgur.com/3MDK5ke.png');
      document.getElementById('player6').className = 'aninshakePL2'; //animação
      setTimeout(function() {
        document.getElementById('player6').className = 'none';
        }, 600)

		return passarturno();

};
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

function clerigoenemy(){
    
    
    
    
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 15) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "o Clerigo tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;


    quantodano =  danoenemy;
    contadordano = document.getElementById('contadordano'); 
    contadordano.innerHTML = quantodano;
      
if (dadoenemy == '1') {
  dadoroll.unshift('assets/diceenemy1.png');
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
  if (dadoenemy == '2') {
  dadoroll.unshift('assets/diceenemy2.png');
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
  if (dadoenemy == '3') {
  dadoroll.unshift('assets/diceenemy3.png');
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
  if (dadoenemy == '4') {
  dadoroll.unshift('assets/diceenemy4.png');
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
  if (dadoenemy == '5') {
  dadoroll.unshift('assets/diceenemy5.png');
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

    if (dadoenemy == 6) {
      dadoroll.unshift('assets/diceenemy6.png');
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
     
    if (dadoenemy == 6){

      if (sangramento2 > 5 && vidaplayer2 > 0){
        return especialclerigoenemy2();
    }
    if (sangramento4 > 5 && vidaplayer4 > 0){
        return especialclerigoenemy4();
    }
    if (sangramento6 > 5 && vidaplayer6 > 0){
        return especialclerigoenemy6();
    }
      
        if (vidaplayer2 > 0 && vidaplayer2 < slot2[3] &&  vidaplayer2 <= vidaplayer4 && vidaplayer2 <= vidaplayer6){
            return especialclerigoenemy2();
        }
        if (vidaplayer4 > 0 && vidaplayer4 < slot4[3] &&  vidaplayer4 <= vidaplayer2 && vidaplayer4 <= vidaplayer6){
            return especialclerigoenemy4();
        }
        if ( vidaplayer6 > 0 && vidaplayer6 < slot6[3] && vidaplayer6 <= vidaplayer2 && vidaplayer6 <= vidaplayer4){
            return especialclerigoenemy6();
        }


        if (vidaplayer2 > 0 && vidaplayer2 < slot2[3] && vidaplayer2 <= vidaplayer6){
          return especialclerigoenemy2();
      }
      if (vidaplayer4 > 0 && vidaplayer4 < slot4[3] && vidaplayer4 <= vidaplayer6){
          return especialclerigoenemy4();
      }
      if ( vidaplayer6 > 0 && vidaplayer6 < slot6[3] && vidaplayer6 <= vidaplayer4){
          return especialclerigoenemy6();
      }

      if (vidaplayer2 > 0 && vidaplayer2 < slot2[3] &&  vidaplayer2 <= vidaplayer4 ){
        return especialclerigoenemy2();
    }
    if (vidaplayer4 > 0 && vidaplayer4 < slot4[3] &&  vidaplayer4 <= vidaplayer2 ){
        return especialclerigoenemy4();
    }
    if ( vidaplayer6 > 0 && vidaplayer6 < slot6[3] && vidaplayer6 <= vidaplayer2 ){
        return especialclerigoenemy6();
    }
      

    if (vidaplayer2 > 0 && vidaplayer2 < slot2[3]){
      return especialclerigoenemy2();
  }
  if (vidaplayer4 > 0 && vidaplayer4 < slot4[3]){
      return especialclerigoenemy4();
  }
  if ( vidaplayer6 > 0 && vidaplayer6 < slot6[3]){
      return especialclerigoenemy6();
  }
        
    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}
function especialclerigoenemy2(){

    
    vidaplayer2 = vidaplayer2 + danoenemy;
    if (sangramento2 > 0){
        sangramento2 = 0
        document.getElementById('sangramento2show').style.visibility='hidden';
      };
    if (vidaplayer2 > slot2[3]){
    vidaplayer2 = slot2[3]
    };
    document.getElementById("healplayer2").style.visibility='visible';

    text += "O clerigo curou " + danoenemy + " de dano restando " + vidaplayer2 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
  
    vidaplayer2show = document.getElementById('vidaplayer2show'); 
    vidaplayer2show.innerHTML = vidaplayer2
   
    danoenemy = 0

    if (turno == 2){
        document.getElementById('player2').className = 'aninshakePL2'; //animação
        setTimeout(function() {
          document.getElementById('player2').className = 'none';
          }, 600)
        }
        if (turno == 4){
        document.getElementById('player4').className = 'aninshakePL4'; //animação
        setTimeout(function() {
          document.getElementById('player4').className = 'none';
          }, 600)
        }
        if (turno == 6){
        document.getElementById('player6').className = 'aninshakePL6'; //animação
        setTimeout(function() {
          document.getElementById('player6').className = 'none';
          }, 600)
        }

    setTimeout(function() {

        document.getElementById("healplayer2").style.visibility='hidden';

          return passarturno();
          
          }, 900)
};

function especialclerigoenemy4(){

    vidaplayer4 = vidaplayer4 + danoenemy;
    if (sangramento4 > 0){
        sangramento4 = 0
        document.getElementById('sangramento4show').style.visibility='hidden';
      };
    if (vidaplayer4 > slot4[3]){
    vidaplayer4 = slot4[3]
    };
    document.getElementById("healplayer4").style.visibility='visible';

    text += "O clerigo curou " + danoenemy + " de dano restando " + vidaplayer4 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
  
    vidaplayer4show = document.getElementById('vidaplayer4show'); 
    vidaplayer4show.innerHTML = vidaplayer4
   
    danoenemy = 0

    if (turno == 2){
        document.getElementById('player2').className = 'aninshakePL2'; //animação
        setTimeout(function() {
          document.getElementById('player2').className = 'none';
          }, 600)
        }
        if (turno == 4){
        document.getElementById('player4').className = 'aninshakePL4'; //animação
        setTimeout(function() {
          document.getElementById('player4').className = 'none';
          }, 600)
        }
        if (turno == 6){
        document.getElementById('player6').className = 'aninshakePL6'; //animação
        setTimeout(function() {
          document.getElementById('player6').className = 'none';
          }, 600)
        }

    setTimeout(function() {

        document.getElementById("healplayer4").style.visibility='hidden';


          return passarturno();
          
          }, 900)

};

function especialclerigoenemy6(){

    
    vidaplayer6 = vidaplayer6 + danoenemy;
    if (sangramento6 > 0){
        sangramento6 = 0
        document.getElementById('sangramento6show').style.visibility='hidden';
      };
    if (vidaplayer6 > slot6[3]){
    vidaplayer6 = slot6[3]
    };
    document.getElementById("healplayer6").style.visibility='visible';

    text += "O clerigo curou " + danoenemy + " de dano restando " + vidaplayer6 + " de vida" + '\n';
    document.getElementById("demo").innerHTML = text;
  
    vidaplayer6show = document.getElementById('vidaplayer6show'); 
    vidaplayer6show.innerHTML = vidaplayer6
   
    danoenemy = 0

    if (turno == 2){
        document.getElementById('player2').className = 'aninshakePL2'; //animação
        setTimeout(function() {
          document.getElementById('player2').className = 'none';
          }, 600)
        }
        if (turno == 4){
        document.getElementById('player4').className = 'aninshakePL4'; //animação
        setTimeout(function() {
          document.getElementById('player4').className = 'none';
          }, 600)
        }
        if (turno == 6){
        document.getElementById('player6').className = 'aninshakePL6'; //animação
        setTimeout(function() {
          document.getElementById('player6').className = 'none';
          }, 600)
        }

    setTimeout(function() {

        document.getElementById("healplayer6").style.visibility='hidden';


          return passarturno();
          
          }, 900)
};

/*          https://fsymbols.com/generators/tarty/
────────────────────────────────────────────────────────────────────────────────────────────
─██████──────────██████─██████████████─██████──────────██████─██████████████─██████████████─
─██░░██████████████░░██─██░░░░░░░░░░██─██░░██████████──██░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██░░░░░░░░░░░░░░░░░░██─██░░██████░░██─██░░░░░░░░░░██──██░░██─██░░██████████─██░░██████████─
─██░░██████░░██████░░██─██░░██──██░░██─██░░██████░░██──██░░██─██░░██─────────██░░██─────────
─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██─────────██░░██████████─
─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██──██████─██░░░░░░░░░░██─
─██░░██──██████──██░░██─██░░██──██░░██─██░░██──██░░██──██░░██─██░░██──██░░██─██░░██████████─
─██░░██──────────██░░██─██░░██──██░░██─██░░██──██░░██████░░██─██░░██──██░░██─██░░██─────────
─██░░██──────────██░░██─██░░██████░░██─██░░██──██░░░░░░░░░░██─██░░██████░░██─██░░██████████─
─██░░██──────────██░░██─██░░░░░░░░░░██─██░░██──██████████░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██████──────────██████─██████████████─██████──────────██████─██████████████─██████████████─
────────────────────────────────────────────────────────────────────────────────────────────
*/


//monge inimigo ----------------------------------------------------------------
function mongeenemy(){
    
    
    
    ////text = "";
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 15) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "o monge tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;

    quantodano =  danoenemy;
    contadordano = document.getElementById('contadordano'); 
    contadordano.innerHTML = quantodano;
      
if (dadoenemy == '1') {
  dadoroll.unshift('assets/diceenemy1.png');
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
  if (dadoenemy == '2') {
  dadoroll.unshift('assets/diceenemy2.png');
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
  if (dadoenemy == '3') {
  dadoroll.unshift('assets/diceenemy3.png');
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
  if (dadoenemy == '4') {
  dadoroll.unshift('assets/diceenemy4.png');
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
  if (dadoenemy == '5') {
  dadoroll.unshift('assets/diceenemy5.png');
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

    if (dadoenemy == 6) {
      dadoroll.unshift('assets/diceenemy6.png');
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
    
    if (dadoenemy == 6){
      
        text += "o monge tirou 6 no dado acumulado " + danoenemy + "de dano de e o alvo ta atordoado " + '\n';
        atordoamento = 1;
        document.getElementById("demo").innerHTML = text;
        return danoaleatorioenemy1();
        break; 


    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)

     
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
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

function guerreiroenemy(){
    
    
    
    ////text = "";
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 15) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "O inimigo tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;
     

    quantodano =  danoenemy;
    contadordano = document.getElementById('contadordano'); 
    contadordano.innerHTML = quantodano;
      
if (dadoenemy == '1') {
  dadoroll.unshift('assets/diceenemy1.png');
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
  if (dadoenemy == '2') {
  dadoroll.unshift('assets/diceenemy2.png');
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
  if (dadoenemy == '3') {
  dadoroll.unshift('assets/diceenemy3.png');
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
  if (dadoenemy == '4') {
  dadoroll.unshift('assets/diceenemy4.png');
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
  if (dadoenemy == '5') {
  dadoroll.unshift('assets/diceenemy5.png');
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

    if (dadoenemy == 6) {
      dadoroll.unshift('assets/diceenemy6.png');
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

    if (danoenemy > 10 && dadoenemy == 6){
        
       
       
     
        
        if (turno == 2 && dadoenemy > escudoplayer2){
            escudoplayer2 =  danoenemy
            text += "O Guerreiro Player 2 colocou " + danoenemy + " de escudo de proteção." + '\n';
            document.getElementById("demo").innerHTML = text;
            document.getElementById("escudoplayer2show").style.visibility='visible'
      escudoplayer2show = document.getElementById('escudoplayer2show'); 
      escudoplayer2show.innerHTML = escudoplayer2
           
        player2.setAttribute('src', 'assets/guerreiroescudo.png');
        document.getElementById('player2').className = 'aninshakePL2'; //animação
        setTimeout(function() {
          document.getElementById('player2').className = 'none';
          }, 900)
          danoenemy = 0
  
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
      
            return passarturno();
        }
        if (turno == 4 && dadoenemy > escudoplayer4){
            escudoplayer4 =  danoenemy
            text += "O Guerreiro Player 4 colocou " + danoenemy + " de escudo de proteção." + '\n';
            document.getElementById("demo").innerHTML = text;
            document.getElementById("escudoplayer4show").style.visibility='visible'
      escudoplayer4show = document.getElementById('escudoplayer4show'); 
      escudoplayer4show.innerHTML = escudoplayer4
        
       
        player4.setAttribute('src', 'assets/guerreiroescudo.png');
        document.getElementById('player4').className = 'aninshakePL4'; //animação
        setTimeout(function() {
          document.getElementById('player4').className = 'none';
          }, 900)
          danoenemy = 0
  
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
      
            return passarturno();
        }
        if (turno == 6 && dadoenemy > escudoplayer6){
            escudoplayer6 =  danoenemy
            text += "O Guerreiro Player 6 colocou " + danoenemy + " de escudo de proteção." + '\n';
            document.getElementById("demo").innerHTML = text;
        
            document.getElementById("escudoplayer6show").style.visibility='visible'
      escudoplayer6show = document.getElementById('escudoplayer6show'); 
      escudoplayer6show.innerHTML = escudoplayer6
        
        
        player6.setAttribute('src', 'assets/guerreiroescudo.png');
        document.getElementById('player6').className = 'aninshakePL6'; //animação
        setTimeout(function() {
          document.getElementById('player6').className = 'none';
          }, 900)
          danoenemy = 0
  
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
      
            return passarturno();
        }
  
  

    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
    
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}
  
  
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
   

//ladino inimigo ----------------------------------------------------------------
function ladinoenemy(){
    
    
    
    ////text = "";
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 15) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "o Ladino tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;

    quantodano =  danoenemy;
    contadordano = document.getElementById('contadordano'); 
    contadordano.innerHTML = quantodano;
      
if (dadoenemy == '1') {
  dadoroll.unshift('assets/diceenemy1.png');
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
  if (dadoenemy == '2') {
  dadoroll.unshift('assets/diceenemy2.png');
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
  if (dadoenemy == '3') {
  dadoroll.unshift('assets/diceenemy3.png');
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
  if (dadoenemy == '4') {
  dadoroll.unshift('assets/diceenemy4.png');
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
  if (dadoenemy == '5') {
  dadoroll.unshift('assets/diceenemy5.png');
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

    if (dadoenemy == 6) {
      dadoroll.unshift('assets/diceenemy6.png');
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
     
    if (dadoenemy == 6){
      
        text += "o Ladino tirou 6 no dado acumulado " + danoenemy + "de dano de sangramento " + '\n';
        danodesangramento = danoenemy;
        document.getElementById("demo").innerHTML = text;
        return danoaleatorioenemy1();
        break; 


    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
       
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}

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
function magoenemy(){
    
    
    
    ////text = "";
    document.getElementById("demo").innerHTML = text;

   
   
     for (;;) {
    if (danoenemy < 15) {
    dadoenemy = Math.floor(1 + 6*Math.random() );
    danoenemy = danoenemy + dadoenemy;
    text += "O inimigo tirou " + dadoenemy + "  no dado acumulando " + danoenemy + "  de dano. " + '\n';
    document.getElementById("demo").innerHTML = text;

    quantodano =  danoenemy;
    contadordano = document.getElementById('contadordano'); 
    contadordano.innerHTML = quantodano;
      
if (dadoenemy == '1') {
  dadoroll.unshift('assets/diceenemy1.png');
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
  if (dadoenemy == '2') {
  dadoroll.unshift('assets/diceenemy2.png');
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
  if (dadoenemy == '3') {
  dadoroll.unshift('assets/diceenemy3.png');
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
  if (dadoenemy == '4') {
  dadoroll.unshift('assets/diceenemy4.png');
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
  if (dadoenemy == '5') {
  dadoroll.unshift('assets/diceenemy5.png');
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

    if (dadoenemy == 6) {
      dadoroll.unshift('assets/diceenemy6.png');
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
     
    if (dadoenemy == 6 && danoenemy > 8){
        
        return especialmagoenemy();

    }

   if (dadoenemy == 1){
        
        text += "o inimigo tirou " + dadoenemy + "  perdendo " + danoenemy + '\n';
        document.getElementById("demo").innerHTML = text;
        danoenemy = 0

    if (turno == 2){
    document.getElementById("missplayer2").style.visibility='visible';
    }
    if (turno == 4){
    document.getElementById("missplayer4").style.visibility='visible';
    }
    if (turno == 6){
    document.getElementById("missplayer6").style.visibility='visible';
    }
        
        
        setTimeout(function() {
        document.getElementById("missplayer2").style.visibility='hidden';
        document.getElementById("auraplayer2").style.visibility='hidden';
        document.getElementById("missplayer4").style.visibility='hidden';
        document.getElementById("auraplayer4").style.visibility='hidden';
        document.getElementById("missplayer6").style.visibility='hidden';
        document.getElementById("auraplayer6").style.visibility='hidden';
        
        }, 800)
        
        return passarturno();
       break; 
    }
    
    
       
    }
    
    else {
    
    return danoaleatorioenemy1();
    break; 
    }
     }
 document.getElementById("demo").innerHTML = text;
}
    


/*
    
─────────────────────────────────────────────────────────────────────────────────────────────
─██████████████─██████████████─██████████████─██████████████─██████████████─██████──████████─
─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░░░░░░░░░██─██░░██──██░░░░██─
─██░░██████░░██─██████░░██████─██████░░██████─██░░██████░░██─██░░██████████─██░░██──██░░████─
─██░░██──██░░██─────██░░██─────────██░░██─────██░░██──██░░██─██░░██─────────██░░██──██░░██───
─██░░██████░░██─────██░░██─────────██░░██─────██░░██████░░██─██░░██─────────██░░██████░░██───
─██░░░░░░░░░░██─────██░░██─────────██░░██─────██░░░░░░░░░░██─██░░██─────────██░░░░░░░░░░██───
─██░░██████░░██─────██░░██─────────██░░██─────██░░██████░░██─██░░██─────────██░░██████░░██───
─██░░██──██░░██─────██░░██─────────██░░██─────██░░██──██░░██─██░░██─────────██░░██──██░░██───
─██░░██──██░░██─────██░░██─────────██░░██─────██░░██──██░░██─██░░██████████─██░░██──██░░████─
─██░░██──██░░██─────██░░██─────────██░░██─────██░░██──██░░██─██░░░░░░░░░░██─██░░██──██░░░░██─
─██████──██████─────██████─────────██████─────██████──██████─██████████████─██████──████████─
─────────────────────────────────────────────────────────────────────────────────────────────
    */
    //============================================================dano aleatorioplayer
    function danoaleatorioenemy1 (){ //novo metodo
    text += "------acionou o dano----- " + '\n';
        document.getElementById("demo").innerHTML = text;
    
    if (vidaplayer1 < 1 && vidaplayer3 < 1 && vidaplayer5 <1){
    
    return youlose()
    }
    
        aleatorioplayer = 0;
        aleatorioplayer = Math.floor(1 + 3*Math.random() );
        /*setTimeout(function() {
            document.getElementById("auraplayer2").style.visibility='hidden';
            document.getElementById("auraplayer4").style.visibility='hidden';
            document.getElementById("auraplayer6").style.visibility='hidden';
         }, 500)*/
         
         
        if (aleatorioplayer == 1 && vidaplayer1 > 0){


            if(danodesangramento > 0){

                sangramento1 = sangramento1 + danodesangramento;
                danodesangramento = 0;
                sangramento1show = document.getElementById('sangramento1show');
                document.getElementById('sangramento1show').style.visibility='visible'; 
                sangramento1show.innerHTML = sangramento1
                danoenemy = 0
            };

            if(escudoplayer1 > 0){
                escudoplayer1 = escudoplayer1 - danoenemy
                escudoplayer1show = document.getElementById('escudoplayer1show'); 
                escudoplayer1show.innerHTML = escudoplayer1
                text += "O player 1 resistiu dano por causa do escudo" + '\n';
                document.getElementById("demo").innerHTML = text;
              if(escudoplayer1 < 1){
                
                vidaplayer1 = vidaplayer1 + escudoplayer1;
                vidaplayer1show = document.getElementById('vidaplayer1show'); 
                vidaplayer1show.innerHTML = vidaplayer1
                escudoplayer1 = 0
                document.getElementById("escudoplayer1show").style.visibility='hidden';
                player1.setAttribute('src', 'assets/guerreiro.png');

                if (atordoamento == 1){
                    atordoamento = 0;
                    atordoadoplayer1 = 1;
                    
    
                    danoenemy = danoenemy / 2;
                    danoenemy = Math.floor(danoenemy, 1);  
                    document.getElementById("stunplayer1").style.visibility='visible';
                    if(furiabarbaro1 > 1){
                        furiabarbaro1 = 0
                        player1.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
                      };
          
                };
                if (turno == 2 && slot2[4] == 'vampiro'){
        
                  escudoplayer1 = escudoplayer1 * -1;
                  escudoplayer1 = escudoplayer1 / 2;
                  escudoplayer1 = Math.floor(escudoplayer1, 1);  
                  vidaplayer2 = vidaplayer2 + escudoplayer1
                  if (sangramento2 > 0){
                    sangramento2 = 0
                    document.getElementById('sangramento2show').style.visibility='hidden';
                  };
          
              if (vidaplayer2 > slot2[3]){
                vidaplayer2 = slot2[3]
                };
                vidaplayer2show = document.getElementById('vidaplayer2show'); 
              vidaplayer2show.innerHTML = vidaplayer2
                document.getElementById("healplayer2").style.visibility='visible';
                setTimeout(function() {
                  document.getElementById("healplayer2").style.visibility='hidden';
                    }, 600)
          
                  }
                  if (turno == 4 && slot4[4] == 'vampiro'){
                
                    escudoplayer1 = escudoplayer1 * -1;
                    escudoplayer1 = escudoplayer1 / 2;
                    escudoplayer1 = Math.floor(escudoplayer1, 1);  
                    vidaplayer4 = vidaplayer4 + escudoplayer1
                    
                    if (sangramento4 > 0){
                      sangramento4 = 0
                      document.getElementById('sangramento4show').style.visibility='hidden';
                    };
            
                if (vidaplayer4 > slot4[3]){
                  vidaplayer4 = slot4[3]
                  };
                  vidaplayer4show = document.getElementById('vidaplayer4show'); 
                vidaplayer4show.innerHTML = vidaplayer4
                  document.getElementById("healplayer4").style.visibility='visible';
                  setTimeout(function() {
                    document.getElementById("healplayer4").style.visibility='hidden';
                      }, 600)
            
                    }
                    if (turno == 6 && slot6[4] == 'vampiro'){
                
                      escudoplayer1 = escudoplayer1 * -1;
                      escudoplayer1 = escudoplayer1 / 2;
                      escudoplayer1 = Math.floor(escudoplayer1, 1);  
                      vidaplayer6 = vidaplayer6 + escudoplayer1
                      
                      if (sangramento6 > 0){
                        sangramento6 = 0
                        document.getElementById('sangramento6show').style.visibility='hidden';
                      };
              
                  if (vidaplayer6 > slot6[3]){
                    vidaplayer6 = slot6[3]
                    };
                    vidaplayer6show = document.getElementById('vidaplayer6show'); 
                  vidaplayer6show.innerHTML = vidaplayer6
                    document.getElementById("healplayer6").style.visibility='visible';
                    setTimeout(function() {
                      document.getElementById("healplayer6").style.visibility='hidden';
                        }, 600)
              
                      }
              }
              atordoamento = 0;
              danoenemy = 0
              
            }//fim do escudo

            if (atordoamento == 1){
                atordoamento = 0;
                atordoadoplayer1 = 1;
                

                danoenemy = danoenemy / 2;
                danoenemy = Math.floor(danoenemy, 1);  
                document.getElementById("stunplayer1").style.visibility='visible';
                if(furiabarbaro1 > 1){
                    furiabarbaro1 = 0
                    player1.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
                  };
      
            };

    
         text += "causou dano ao heroi 1<<<<<<<<"  + '\n';
       document.getElementById("demo").innerHTML = text;
       
    
       vidaplayer1 = vidaplayer1 - danoenemy
        text += " o heroi 1 perdeu " + danoenemy + " de dano "  + '\n';
       document.getElementById("demo").innerHTML = text;
       vidaplayer1show = document.getElementById('vidaplayer1show'); 
    vidaplayer1show.innerHTML = vidaplayer1
       
        

        
    
            
        
        if (turno == 2){
          if (slot2[4] == 'vampiro' &&  danoenemy > 0){

            danoenemy = danoenemy / 2;
            danoenemy = Math.floor(danoenemy, 1);  
            vidaplayer2 = vidaplayer2 + danoenemy
            if (sangramento2 > 0){
              sangramento2 = 0
              document.getElementById('sangramento2show').style.visibility='hidden';
            };
    
        if (vidaplayer2 > slot2[3]){
          vidaplayer2 = slot2[3]
          };
          vidaplayer2show = document.getElementById('vidaplayer2show'); 
        vidaplayer2show.innerHTML = vidaplayer2
          document.getElementById("healplayer2").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer2").style.visibility='hidden';
              }, 600)
    
          } 
        document.getElementById('player2').className = 'aninPL2atkPL1'; //animação
        setTimeout(function() {
        document.getElementById('player2').className = 'none';
        }, 600)
        }
        if (turno == 4){
          if (slot4[4] == 'vampiro' &&  danoenemy > 0){

            danoenemy = danoenemy / 2;
            danoenemy = Math.floor(danoenemy, 1);  
            vidaplayer4 = vidaplayer4 + danoenemy
            if (sangramento4 > 0){
              sangramento4 = 0
              document.getElementById('sangramento4show').style.visibility='hidden';
            };
    
        if (vidaplayer4 > slot4[3]){
          vidaplayer4 = slot4[3]
          };
          vidaplayer4show = document.getElementById('vidaplayer4show'); 
        vidaplayer4show.innerHTML = vidaplayer4
          document.getElementById("healplayer4").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer4").style.visibility='hidden';
              }, 600)
    
          } 
        document.getElementById('player4').className = 'aninPL4atkPL1'; //animação
        setTimeout(function() {
        document.getElementById('player4').className = 'none';
        }, 600)
        }
        if (turno == 6){
          if (slot6[4] == 'vampiro' &&  danoenemy > 0){

            danoenemy = danoenemy / 2;
            danoenemy = Math.floor(danoenemy, 1);  
            vidaplayer6 = vidaplayer6 + danoenemy
            if (sangramento6 > 0){
              sangramento6 = 0
              document.getElementById('sangramento6show').style.visibility='hidden';
            };
    
        if (vidaplayer6 > slot6[3]){
          vidaplayer6 = slot6[3]
          };
          vidaplayer6show = document.getElementById('vidaplayer6show'); 
        vidaplayer6show.innerHTML = vidaplayer6
          document.getElementById("healplayer6").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer6").style.visibility='hidden';
              }, 600)
    
          } 
        document.getElementById('player6').className = 'aninPL6atkPL1'; //animação
        setTimeout(function() {
        document.getElementById('player6').className = 'none';
        }, 600)
        }
        if(vidaplayer1 < 1){
          morreuplayer1();
     
          }
        danoenemy = 0
           return passarturno();
                
            



//fim do ataque ao player 1
           
    }
    
        if (aleatorioplayer == 2 && vidaplayer3 > 0){


            if(danodesangramento > 0){
                sangramento3 = sangramento3 + danodesangramento;
                danodesangramento = 0;
                sangramento3show = document.getElementById('sangramento3show'); 
                document.getElementById('sangramento3show').style.visibility='visible';
                sangramento3show.innerHTML = sangramento3
                danoenemy = 0
            };


            if(escudoplayer3 > 0){
                escudoplayer3 = escudoplayer3 - danoenemy
                escudoplayer3show = document.getElementById('escudoplayer3show'); 
                escudoplayer3show.innerHTML = escudoplayer3
                text += "O player 3 resistiu dano por causa do escudo" + '\n';
                document.getElementById("demo").innerHTML = text;
              if(escudoplayer3 < 1){
                
                vidaplayer3 = vidaplayer3 + escudoplayer3;
                vidaplayer3show = document.getElementById('vidaplayer3show'); 
                vidaplayer3show.innerHTML = vidaplayer3
                escudoplayer3 = 0
                document.getElementById("escudoplayer3show").style.visibility='hidden';
                player3.setAttribute('src', 'assets/guerreiro.png');

                if (atordoamento == 1){
                    atordoamento = 0;
                    atordoadoplayer3 = 1;
                    
    
                    danoenemy = danoenemy / 2;
                    danoenemy = Math.floor(danoenemy, 1);  
                    document.getElementById("stunplayer3").style.visibility='visible';
                    if(furiabarbaro3 > 1){
                        furiabarbaro3 = 0
                        player3.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
                      };
          
                };
                
 if (turno == 2 && slot2[4] == 'vampiro'){
        
  escudoplayer3 = escudoplayer3 * -1;
  escudoplayer3 = escudoplayer3 / 2;
  escudoplayer3 = Math.floor(escudoplayer3, 1);  
  vidaplayer2 = vidaplayer2 + escudoplayer3
  if (sangramento2 > 0){
    sangramento2 = 0
    document.getElementById('sangramento2show').style.visibility='hidden';
  };

if (vidaplayer2 > slot2[3]){
vidaplayer2 = slot2[3]
};
vidaplayer2show = document.getElementById('vidaplayer2show'); 
vidaplayer2show.innerHTML = vidaplayer2
document.getElementById("healplayer2").style.visibility='visible';
setTimeout(function() {
  document.getElementById("healplayer2").style.visibility='hidden';
    }, 600)

  }
  if (turno == 4 && slot4[4] == 'vampiro'){

    escudoplayer3 = escudoplayer3 * -1;
    escudoplayer3 = escudoplayer3 / 2;
    escudoplayer3 = Math.floor(escudoplayer3, 1);  
    vidaplayer4 = vidaplayer4 + escudoplayer3
    if (sangramento4 > 0){
      sangramento4 = 0
      document.getElementById('sangramento4show').style.visibility='hidden';
    };

if (vidaplayer4 > slot4[3]){
  vidaplayer4 = slot4[3]
  };
  vidaplayer4show = document.getElementById('vidaplayer4show'); 
vidaplayer4show.innerHTML = vidaplayer4
  document.getElementById("healplayer4").style.visibility='visible';
  setTimeout(function() {
    document.getElementById("healplayer4").style.visibility='hidden';
      }, 600)

    }
    if (turno == 6 && slot6[4] == 'vampiro'){

      escudoplayer3 = escudoplayer3 * -1;
      escudoplayer3 = escudoplayer3 / 2;
      escudoplayer3 = Math.floor(escudoplayer3, 1);  
      vidaplayer6 = vidaplayer6 + escudoplayer3
      if (sangramento6 > 0){
        sangramento6 = 0
        document.getElementById('sangramento6show').style.visibility='hidden';
      };

  if (vidaplayer6 > slot6[3]){
    vidaplayer6 = slot6[3]
    };
    vidaplayer6show = document.getElementById('vidaplayer6show'); 
  vidaplayer6show.innerHTML = vidaplayer6
    document.getElementById("healplayer6").style.visibility='visible';
    setTimeout(function() {
      document.getElementById("healplayer6").style.visibility='hidden';
        }, 600)

      }
              }
              atordoamento = 0;
              danoenemy = 0
              //fim do escudo
            }

            if (atordoamento == 1){
                atordoamento = 0;
                atordoadoplayer3 = 1;
                

                danoenemy = danoenemy / 2;
                danoenemy = Math.floor(danoenemy, 1);  
                document.getElementById("stunplayer3").style.visibility='visible';
                if(furiabarbaro3 > 1){
                    furiabarbaro3 = 0
                    player3.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
                  };
      
            };

        text += "causou dano ao heroi 3<<<<<<<<"  + '\n';
       document.getElementById("demo").innerHTML = text;
       
        
    
    
        
      
         vidaplayer3 = vidaplayer3 - danoenemy
        text += " o heroi 3 perdeu " + danoenemy + " de dano "  + '\n';
       document.getElementById("demo").innerHTML = text;
       vidaplayer3show = document.getElementById('vidaplayer3show'); 
    vidaplayer3show.innerHTML = vidaplayer3
       
        

       
 


   
        
          
            
        if (turno == 2){
          if (slot2[4] == 'vampiro' &&  danoenemy > 0){

            danoenemy = danoenemy / 2;
            danoenemy = Math.floor(danoenemy, 1);  
            vidaplayer2 = vidaplayer2 + danoenemy
            if (sangramento2 > 0){
              sangramento2 = 0
              document.getElementById('sangramento2show').style.visibility='hidden';
            };
    
        if (vidaplayer2 > slot2[3]){
          vidaplayer2 = slot2[3]
          };
          vidaplayer2show = document.getElementById('vidaplayer2show'); 
        vidaplayer2show.innerHTML = vidaplayer2
          document.getElementById("healplayer2").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer2").style.visibility='hidden';
              }, 600)
    
          } 
        document.getElementById('player2').className = 'aninPL2atkPL3'; //animação
        setTimeout(function() {
            document.getElementById('player2').className = 'none';
            }, 900)
        }
        if (turno == 4){
          if (slot4[4] == 'vampiro' &&  danoenemy > 0){

            danoenemy = danoenemy / 2;
            danoenemy = Math.floor(danoenemy, 1);  
            vidaplayer4 = vidaplayer4 + danoenemy
            if (sangramento4 > 0){
              sangramento4 = 0
              document.getElementById('sangramento4show').style.visibility='hidden';
            };
    
        if (vidaplayer4 > slot4[3]){
          vidaplayer4 = slot4[3]
          };
          vidaplayer4show = document.getElementById('vidaplayer4show'); 
        vidaplayer4show.innerHTML = vidaplayer4
          document.getElementById("healplayer4").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer4").style.visibility='hidden';
              }, 600)
    
          } 
        document.getElementById('player4').className = 'aninPL4atkPL3'; //animação
        setTimeout(function() {
            document.getElementById('player4').className = 'none';
      }, 600)
        }
        if (turno == 6){
          if (slot6[4] == 'vampiro' &&  danoenemy > 0){

            danoenemy = danoenemy / 2;
            danoenemy = Math.floor(danoenemy, 1);  
            vidaplayer6 = vidaplayer6 + danoenemy
            if (sangramento6 > 0){
              sangramento6 = 0
              document.getElementById('sangramento6show').style.visibility='hidden';
            };
    
        if (vidaplayer6 > slot6[3]){
          vidaplayer6 = slot6[3]
          };
          vidaplayer6show = document.getElementById('vidaplayer6show'); 
        vidaplayer6show.innerHTML = vidaplayer6
          document.getElementById("healplayer6").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer6").style.visibility='hidden';
              }, 600)
    
          } 
        document.getElementById('player6').className = 'aninPL6atkPL3'; //animação
        setTimeout(function() {
            document.getElementById('player6').className = 'none';
      }, 600)
        }
        if(vidaplayer3 < 1){
          morreuplayer3();
       
          }
        danoenemy = 0
            return passarturno();
        }
        
        if (aleatorioplayer == 3 && vidaplayer5 > 0){


            if(danodesangramento > 0){
                sangramento5 = sangramento5 + danodesangramento;
                danodesangramento = 0;
                sangramento5show = document.getElementById('sangramento5show'); 
                document.getElementById('sangramento5show').style.visibility='visible';
                sangramento5show.innerHTML = sangramento5
                danoenemy = 0
            };

            if(escudoplayer5 > 0){
                escudoplayer5 = escudoplayer5 - danoenemy
                escudoplayer5show = document.getElementById('escudoplayer5show'); 
                escudoplayer5show.innerHTML = escudoplayer5
                text += "O player 5 resistiu dano por causa do escudo" + '\n';
                document.getElementById("demo").innerHTML = text;
              if(escudoplayer5 < 1){
                
                vidaplayer5 = vidaplayer5 + escudoplayer5;
                vidaplayer5show = document.getElementById('vidaplayer5show'); 
                vidaplayer5show.innerHTML = vidaplayer5
                escudoplayer5 = 0
                document.getElementById("escudoplayer5show").style.visibility='hidden';
                player5.setAttribute('src', 'assets/guerreiro.png');

                if (atordoamento == 1){
                    atordoamento = 0;
                    atordoadoplayer5 = 1;
                    
    
                    danoenemy = danoenemy / 2;
                    danoenemy = Math.floor(danoenemy, 1);  
                    document.getElementById("stunplayer5").style.visibility='visible';
                    if(furiabarbaro5 > 1){
                        furiabarbaro5 = 0
                        player5.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
                      };
          
                };
                
 if (turno == 2 && slot2[4] == 'vampiro'){
        
  escudoplayer5 = escudoplayer5 * -1;
  escudoplayer5 = escudoplayer5 / 2;
  escudoplayer5 = Math.floor(escudoplayer5, 1);  
  vidaplayer2 = vidaplayer2 + escudoplayer5
  if (sangramento2 > 0){
    sangramento2 = 0
    document.getElementById('sangramento2show').style.visibility='hidden';
  };

if (vidaplayer2 > slot2[3]){
vidaplayer2 = slot2[3]
};
vidaplayer2show = document.getElementById('vidaplayer2show'); 
vidaplayer2show.innerHTML = vidaplayer2
document.getElementById("healplayer2").style.visibility='visible';
setTimeout(function() {
  document.getElementById("healplayer2").style.visibility='hidden';
    }, 600)

  }
  if (turno == 4 && slot4[4] == 'vampiro'){

    escudoplayer5 = escudoplayer5 * -1;
    escudoplayer5 = escudoplayer5 / 2;
    escudoplayer5 = Math.floor(escudoplayer5, 1);  
    vidaplayer4 = vidaplayer4 + escudoplayer5
    if (sangramento4 > 0){
      sangramento4 = 0
      document.getElementById('sangramento4show').style.visibility='hidden';
    };

if (vidaplayer4 > slot4[3]){
  vidaplayer4 = slot4[3]
  };
  vidaplayer4show = document.getElementById('vidaplayer4show'); 
vidaplayer4show.innerHTML = vidaplayer4
  document.getElementById("healplayer4").style.visibility='visible';
  setTimeout(function() {
    document.getElementById("healplayer4").style.visibility='hidden';
      }, 600)

    }
    if (turno == 6 && slot6[4] == 'vampiro'){

      escudoplayer5 = escudoplayer5 * -1;
      escudoplayer5 = escudoplayer5 / 2;
      escudoplayer5 = Math.floor(escudoplayer5, 1);  
      vidaplayer6 = vidaplayer6 + escudoplayer5
      if (sangramento6 > 0){
        sangramento6 = 0
        document.getElementById('sangramento6show').style.visibility='hidden';
      };

  if (vidaplayer6 > slot6[3]){
    vidaplayer6 = slot6[3]
    };
    vidaplayer6show = document.getElementById('vidaplayer6show'); 
  vidaplayer6show.innerHTML = vidaplayer6
    document.getElementById("healplayer6").style.visibility='visible';
    setTimeout(function() {
      document.getElementById("healplayer6").style.visibility='hidden';
        }, 600)

      }
              }
              atordoamento = 0;
              danoenemy = 0
              //fim do escudo
            }

    
            if (atordoamento == 1){
                atordoamento = 0;
                atordoadoplayer5 = 1;
                

                danoenemy = danoenemy / 2;
                danoenemy = Math.floor(danoenemy, 1);  
                document.getElementById("stunplayer5").style.visibility='visible';
                if(furiabarbaro5 > 1){
                    furiabarbaro5 = 0
                    player5.setAttribute('src', 'https://i.imgur.com/CdIuWmi.png');
                  };
      
            };

        text += "causou dano ao heroi 5<<<<<<<<"  + '\n';
       document.getElementById("demo").innerHTML = text;
       
       
         vidaplayer5 = vidaplayer5 - danoenemy
        text += " o heroi 5 perdeu " + danoenemy + " de dano "  + '\n';
       document.getElementById("demo").innerHTML = text;
    vidaplayer5show = document.getElementById('vidaplayer5show'); 
    vidaplayer5show.innerHTML = vidaplayer5
       
        

        


     
        
       
        
        if (turno == 2){
          if (slot2[4] == 'vampiro' &&  danoenemy > 0){

            danoenemy = danoenemy / 2;
            danoenemy = Math.floor(danoenemy, 1);  
            vidaplayer2 = vidaplayer2 + danoenemy
            if (sangramento2 > 0){
              sangramento2 = 0
              document.getElementById('sangramento2show').style.visibility='hidden';
            };
    
        if (vidaplayer2 > slot2[3]){
          vidaplayer2 = slot2[3]
          };
          vidaplayer2show = document.getElementById('vidaplayer2show'); 
        vidaplayer2show.innerHTML = vidaplayer2
          document.getElementById("healplayer2").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer2").style.visibility='hidden';
              }, 600)
    
          } 
        document.getElementById('player2').className = 'aninPL2atkPL5'; //animação
        setTimeout(function() {
            document.getElementById('player2').className = 'none';
      }, 600)
        }
        if (turno == 4){
          if (slot4[4] == 'vampiro' &&  danoenemy > 0){

            danoenemy = danoenemy / 2;
            danoenemy = Math.floor(danoenemy, 1);  
            vidaplayer4 = vidaplayer4 + danoenemy
            if (sangramento4 > 0){
              sangramento4 = 0
              document.getElementById('sangramento4show').style.visibility='hidden';
            };
    
        if (vidaplayer4 > slot4[3]){
          vidaplayer4 = slot4[3]
          };
          vidaplayer4show = document.getElementById('vidaplayer4show'); 
        vidaplayer4show.innerHTML = vidaplayer4
          document.getElementById("healplayer4").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer4").style.visibility='hidden';
              }, 600)
    
          } 
        document.getElementById('player4').className = 'aninPL4atkPL5'; //animação
        setTimeout(function() {
            document.getElementById('player4').className = 'none';
      }, 600)
        }
        if (turno == 6){
          if (slot6[4] == 'vampiro' &&  danoenemy > 0){

            danoenemy = danoenemy / 2;
            danoenemy = Math.floor(danoenemy, 1);  
            vidaplayer6 = vidaplayer6 + danoenemy
            if (sangramento6 > 0){
              sangramento6 = 0
              document.getElementById('sangramento6show').style.visibility='hidden';
            };
    
        if (vidaplayer6 > slot6[3]){
          vidaplayer6 = slot6[3]
          };
          vidaplayer6show = document.getElementById('vidaplayer6show'); 
        vidaplayer6show.innerHTML = vidaplayer6
          document.getElementById("healplayer6").style.visibility='visible';
          setTimeout(function() {
            document.getElementById("healplayer6").style.visibility='hidden';
              }, 600)
    
          } 
        document.getElementById('player6').className = 'aninPL6atkPL5'; //animação
        setTimeout(function() {
            document.getElementById('player6').className = 'none';
      }, 600)
        }
        if(vidaplayer5 < 1){
          morreuplayer5();
        
          }
        danoenemy = 0
           return passarturno();
        }
        
        else {
        setTimeout(function() {
        return danoaleatorioenemy1();
         }, 200)
        
        }
         
    }
    

    function especialmagoenemy (){ //novo metodo
        
           
        
        if (vidaplayer1 < 1 && vidaplayer3 < 1 && vidaplayer5 <1){
        
        return youlose();
}
//danoenemy = danoenemy / 2;
//danoenemy = Math.floor(danoenemy, 1); isso faz o mago causar metade do dano, mas ta muito fraco

vidaplayer1 = vidaplayer1 - danoenemy;
vidaplayer3 = vidaplayer3 - danoenemy;
vidaplayer5 = vidaplayer5 - danoenemy;
    
             
text += "O todos os inimigos sofreram " + danoenemy + " de dano!" + '\n';
document.getElementById("demo").innerHTML = text;
vidaplayer1show = document.getElementById('vidaplayer1show'); 
vidaplayer1show.innerHTML = vidaplayer1

vidaplayer3show = document.getElementById('vidaplayer3show'); 
vidaplayer3show.innerHTML = vidaplayer3

vidaplayer5show = document.getElementById('vidaplayer5show'); 
vidaplayer5show.innerHTML = vidaplayer5

danoenemy = 0;

if (vidaplayer1 < 1){
    morreuplayer1();
    
    }
    if (vidaplayer3 < 1){
        morreuplayer3();
        
      }
      if (vidaplayer5 < 1){
        morreuplayer5();
        
        }
        if (turno == 2){
            document.getElementById('player2').className = 'aninPL2magespc'; //animação
            setTimeout(function() {
            document.getElementById('player2').className = 'none';
            }, 600)
            }
            if (turno == 4){
            document.getElementById('player4').className = 'aninPL4magespc'; //animação
            setTimeout(function() {
            document.getElementById('player4').className = 'none';
            }, 600)
            }
            if (turno == 6){
            document.getElementById('player6').className = 'aninPL6magespc'; //animação
            setTimeout(function() {
            document.getElementById('player2').className = 'none';
            }, 600)
            }



            setTimeout(function() {
                document.getElementById('player2').className = 'none'; //serve pra resetar a animação, se não só faz uma vez
                document.getElementById('player4').className = 'none';
                document.getElementById('player6').className = 'none';     
                    }, 900)


 

            document.getElementById("especialmagoegif").style.visibility='visible';
            setTimeout(function() {
              document.getElementById("especialmagoegif").style.visibility='hidden';
                  }, 500)
            
                    return passarturno();
                    
                
        }
        
            