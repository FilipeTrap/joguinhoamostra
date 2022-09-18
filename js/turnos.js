
  
  //=====================================================================TURNOS <<<<<<<<<<<<<<<<<<<<<<<
  function turnos (){
    if (turno > 6){
    turno = 1;
    return turnos();
    }
    
  /*  
████████╗██╗░░░██╗██████╗░███╗░░██╗░█████╗░  ░░███╗░░
╚══██╔══╝██║░░░██║██╔══██╗████╗░██║██╔══██╗  ░████║░░
░░░██║░░░██║░░░██║██████╔╝██╔██╗██║██║░░██║  ██╔██║░░
░░░██║░░░██║░░░██║██╔══██╗██║╚████║██║░░██║  ╚═╝██║░░
░░░██║░░░╚██████╔╝██║░░██║██║░╚███║╚█████╔╝  ███████╗
░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░  ╚══════╝
        */
    if (turno == 1){



     if ( vidaplayer1 < 1){
            turno++;
            return turnos();
            }


            document.getElementById("auraplayer1").style.visibility='hidden';
            document.getElementById("auraplayer2").style.visibility='hidden';
            document.getElementById("auraplayer3").style.visibility='hidden';
            document.getElementById("auraplayer4").style.visibility='hidden';
            document.getElementById("auraplayer5").style.visibility='hidden';
            document.getElementById("auraplayer6").style.visibility='hidden';



          text += "ENTROU NO TURNO 1" + '\n';

          dadoroll = [
            'assets/dice.png', //0
            'assets/dice.png', //1
            'assets/dice.png', //2
            'assets/dice.png', //3
            'assets/dice.png', //4
            'assets/dice.png', //5
            'assets/dice.png', //6
            'assets/dice.png', //7
            'assets/dice.png', //8
            'assets/dice.png'];//9
      
          
          
          if (sangramento1 > 0){
            document.getElementById('sangramento1show').style.visibility='visible';
            vidaplayer1 = vidaplayer1 - sangramento1;
            text += "Personagem do Slot 1 tomou " + sangramento1 + " de dano de sangramento " + '\n';
            vidaplayer1show = document.getElementById('vidaplayer1show'); 
    vidaplayer1show.innerHTML = vidaplayer1
            sangramento1 = sangramento1 / 2;
            sangramento1 = Math.floor(sangramento1, 1);
            text += "o personagem ainda tem " + sangramento1 + " de dano de sangramento " + '\n';
            sangramento1show = document.getElementById('sangramento1show'); 
            sangramento1show.innerHTML = sangramento1
            if (sangramento1 < 1){
              document.getElementById('sangramento1show').style.visibility='hidden';
            };
            if(vidaplayer1 < 1){
              morreuplayer1();

              
              turno++;
            return turnos();
              }

          }

          if (atordoadoplayer1 == 1){
            atordoadoplayer1 = 0;

         
            
            document.getElementById('stunplayer1').style.visibility='visible';
            

            document.getElementById("botaorolarladino").style.visibility='hidden'; 
            document.getElementById("botaorolarmago").style.visibility='hidden'; 
            document.getElementById("botaorolarguerreiro").style.visibility='hidden';
            document.getElementById("botaorolarmonge").style.visibility='hidden';
            document.getElementById("botaorolarclerigo").style.visibility='hidden';
            document.getElementById("botaorolarbarbaro").style.visibility='hidden';
            document.getElementById("botaorolarvampiro").style.visibility='hidden';
          document.getElementById("auraplayer1").style.visibility='hidden';
          document.getElementById("auraplayer3").style.visibility='hidden';
          document.getElementById("auraplayer5").style.visibility='hidden';


            return passarturno();

          
          };
          if (atordoadoplayer1 == 0){
            document.getElementById('stunplayer1').style.visibility='hidden';
          };
          
if (furiabarbaro1 > 1){
  furiabarbaro1--;
  if (furiabarbaro1 == 3){
    player1.setAttribute('src', 'assets/barbarofuria3.png');
  };
  if (furiabarbaro1 == 2){
    player1.setAttribute('src', 'assets/barbarofuria2.png');
  };
};
if (furiabarbaro1 == 1){
  furiabarbaro1 = 0;
  player1.setAttribute('src', 'assets/barbaro.png');
  document.getElementById('stunplayer1').style.visibility='visible';
  return passarturno();

};


    setTimeout(function() {
    document.getElementById("auraplayer1").style.visibility='visible';
        document.getElementById("auraplayer6").style.visibility='hidden';
         }, 1000)
          
                 var menu = document.getElementById("Selectchar1");
    
                
                if (slot1[4] == 'guerreiro') {
                    text += "turno 1 o guerreiro" + '\n';
                    document.getElementById("demo").innerHTML = text;
                    document.getElementById("botaorolarguerreiro").style.visibility='visible';
                }
                else if (slot1[4] == 'ladino') {
                    text += "turno 1 o ladino" + '\n';
                    document.getElementById("botaorolarladino").style.visibility='visible';
                }
                else if (slot1[4] == 'mago') {
                text += "turno 1 o mago" + '\n';
                document.getElementById("botaorolarmago").style.visibility='visible';
                }
                else if (slot1[4] == 'monge') {
                  text += "turno 1 o monge" + '\n';
                  document.getElementById("botaorolarmonge").style.visibility='visible';
                  }
                  
                  else if (slot1[4] == 'clerigo') {
                    text += "turno 1 o clerigo" + '\n';
                    document.getElementById("botaorolarclerigo").style.visibility='visible';
                    }
                  else if (slot1[4] == 'barbaro') {
                  text += "turno 1 o barbaro" + '\n';
                  document.getElementById("botaorolarbarbaro").style.visibility='visible';
                  }
                  else if (slot1[4] == 'vampiro') {
                    text += "turno 1 o vampiro" + '\n';
                    document.getElementById("botaorolarvampiro").style.visibility='visible';
                    }
           
            document.getElementById("demo").innerHTML = text;
    }

/*
    ████████╗██╗░░░██╗██████╗░███╗░░██╗░█████╗░  ██████╗░
    ╚══██╔══╝██║░░░██║██╔══██╗████╗░██║██╔══██╗  ╚════██╗
    ░░░██║░░░██║░░░██║██████╔╝██╔██╗██║██║░░██║  ░░███╔═╝
    ░░░██║░░░██║░░░██║██╔══██╗██║╚████║██║░░██║  ██╔══╝░░
    ░░░██║░░░╚██████╔╝██║░░██║██║░╚███║╚█████╔╝  ███████╗
    ░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░  ╚══════╝
*/

    if (turno == 2){
          text += "ENTROU NO TURNO 2" + '\n';
          
          if (vidaplayer2 < 1 && vidaplayer4 < 1 && vidaplayer6 <1 ){

            return youwin();
          };


            if ( vidaplayer2 < 1){
              turno++;
              return turnos();
              }

              document.getElementById("auraplayer1").style.visibility='hidden';
document.getElementById("auraplayer2").style.visibility='hidden';
document.getElementById("auraplayer3").style.visibility='hidden';
document.getElementById("auraplayer4").style.visibility='hidden';
document.getElementById("auraplayer5").style.visibility='hidden';
document.getElementById("auraplayer6").style.visibility='hidden';
              dadoroll = [
                'assets/dice.png', //0
                'assets/dice.png', //1
                'assets/dice.png', //2
                'assets/dice.png', //3
                'assets/dice.png', //4
                'assets/dice.png', //5
                'assets/dice.png', //6
                'assets/dice.png', //7
                'assets/dice.png', //8
                'assets/dice.png'];//9

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

              
          
    

            if (sangramento2 > 0){
              document.getElementById('sangramento2show').style.visibility='visible';
              vidaplayer2 = vidaplayer2 - sangramento2;
              text += "Personagem do Slot 2 tomou " + sangramento2 + " de dano de sangramento " + '\n';
              vidaplayer2show = document.getElementById('vidaplayer2show'); 
              vidaplayer2show.innerHTML = vidaplayer2
              sangramento2 = sangramento2 / 2;
              sangramento2 = Math.floor(sangramento2, 1);
              text += "o personagem ainda tem " + sangramento2 + " de dano de sangramento " + '\n';
              sangramento2show = document.getElementById('sangramento2show'); 
              sangramento2show.innerHTML = sangramento2
              if (sangramento2 < 1){
                document.getElementById('sangramento2show').style.visibility='hidden';
              };
              if(vidaplayer2 < 1){
                morreuplayer2();
                
                turno++;
            return turnos();
                }
  
            }

            if (atordoadoplayer2 == 1){
              atordoadoplayer2 = 0;
              
              
              document.getElementById('stunplayer2').style.visibility='visible';
              return passarturno();
              
            };
            if (atordoadoplayer2 == 0){
              document.getElementById('stunplayer2').style.visibility='hidden';
            };


            if (furiabarbaro2 > 1){
              furiabarbaro2--;
              if (furiabarbaro2 == 3){
                player2.setAttribute('src', 'assets/barbarofuria3.png');
              };
              if (furiabarbaro2 == 2){
                player2.setAttribute('src', 'assets/barbarofuria2.png');
              };
            };
            if (furiabarbaro2 == 1){
              furiabarbaro2 = 0;
              player2.setAttribute('src', 'assets/barbaro.png');
              document.getElementById('stunplayer2').style.visibility='visible';
              return passarturno();
            
            };


            
            document.getElementById("auraplayer2").style.visibility='visible';
            document.getElementById("auraplayer1").style.visibility='hidden';
            setTimeout(function() {
    
        document.getElementById("demo").innerHTML = text;
          
              return slot2[2]();

         }, 1000)
          
    
          
    }


/*


████████╗██╗░░░██╗██████╗░███╗░░██╗░█████╗░  ██████╗░
╚══██╔══╝██║░░░██║██╔══██╗████╗░██║██╔══██╗  ╚════██╗
░░░██║░░░██║░░░██║██████╔╝██╔██╗██║██║░░██║  ░█████╔╝
░░░██║░░░██║░░░██║██╔══██╗██║╚████║██║░░██║  ░╚═══██╗
░░░██║░░░╚██████╔╝██║░░██║██║░╚███║╚█████╔╝  ██████╔╝
░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░  ╚═════╝░
*/ 

          
    if (turno == 3){
          text += "ENTROU NO TURNO 3" + '\n';

          document.getElementById("auraplayer1").style.visibility='hidden';
document.getElementById("auraplayer2").style.visibility='hidden';
document.getElementById("auraplayer3").style.visibility='hidden';
document.getElementById("auraplayer4").style.visibility='hidden';
document.getElementById("auraplayer5").style.visibility='hidden';
document.getElementById("auraplayer6").style.visibility='hidden';

          dadoroll = [
            'assets/dice.png', //0
            'assets/dice.png', //1
            'assets/dice.png', //2
            'assets/dice.png', //3
            'assets/dice.png', //4
            'assets/dice.png', //5
            'assets/dice.png', //6
            'assets/dice.png', //7
            'assets/dice.png', //8
            'assets/dice.png'];//9
      


          if ( vidaplayer3 < 1){
            turno++;
            return turnos();
            }
            if (sangramento3 > 0){
              document.getElementById('sangramento3show').style.visibility='visible';
              vidaplayer3 = vidaplayer3 - sangramento3;
              text += "Personagem do Slot 3 tomou " + sangramento3 + " de dano de sangramento " + '\n';
              vidaplayer3show = document.getElementById('vidaplayer3show'); 
      vidaplayer3show.innerHTML = vidaplayer3
              sangramento3 = sangramento3 / 2;
              sangramento3 = Math.floor(sangramento3, 1);
              text += "o personagem ainda tem " + sangramento3 + " de dano de sangramento " + '\n';
              sangramento3show = document.getElementById('sangramento3show'); 
              sangramento3show.innerHTML = sangramento3
              if (sangramento3 < 1){
                document.getElementById('sangramento3show').style.visibility='hidden';
              };
              if(vidaplayer3 < 1){
                morreuplayer3();
               
                turno++;
            return turnos();
                }
            }

            if (atordoadoplayer3 == 1){
              atordoadoplayer3 = 0;
              document.getElementById("botaorolarladino").style.visibility='hidden'; 
              document.getElementById("botaorolarmago").style.visibility='hidden'; 
              document.getElementById("botaorolarguerreiro").style.visibility='hidden';
              document.getElementById("botaorolarmonge").style.visibility='hidden';
              document.getElementById("botaorolarclerigo").style.visibility='hidden';
              document.getElementById("botaorolarbarbaro").style.visibility='hidden';
              document.getElementById("botaorolarvampiro").style.visibility='hidden';
            document.getElementById("auraplayer1").style.visibility='hidden';
            document.getElementById("auraplayer3").style.visibility='hidden';
            document.getElementById("auraplayer5").style.visibility='hidden';
              
              document.getElementById('stunplayer3').style.visibility='visible';
              return passarturno();
              
            };
            if (atordoadoplayer3 == 0){
              document.getElementById('stunplayer3').style.visibility='hidden';
            };

            if (furiabarbaro3 > 1){
              furiabarbaro3--;
              if (furiabarbaro3 == 3){
                player3.setAttribute('src', 'assets/barbarofuria3.png');
              };
              if (furiabarbaro3 == 2){
                player3.setAttribute('src', 'assets/barbarofuria2.png');
              };
            };
            if (furiabarbaro3 == 1){
              furiabarbaro3 = 0;
              player3.setAttribute('src', 'assets/barbaro.png');
              document.getElementById('stunplayer3').style.visibility='visible';
              return passarturno();
            
            };


            document.getElementById("auraplayer3").style.visibility='visible';
            document.getElementById("auraplayer2").style.visibility='hidden';
         
    
                
    
                
                if (slot3[4] == 'guerreiro') {
                    text += "turno 3 o guerreiro" + '\n';
                    document.getElementById("demo").innerHTML = text;
                    document.getElementById("botaorolarguerreiro").style.visibility='visible';
                }
                else if (slot3[4] == 'ladino') {
                    text += "turno 3 o ladino" + '\n';
                    document.getElementById("botaorolarladino").style.visibility='visible';
                }
                else if (slot3[4] == 'mago') {
                text += "turno 3 o mago" + '\n';
                document.getElementById("botaorolarmago").style.visibility='visible';
                   
                }

                else if (slot3[4] == 'monge') {
                  text += "turno 3 o monge" + '\n';
                  document.getElementById("botaorolarmonge").style.visibility='visible';
                     
                  }
                  else if (slot3[4] == 'clerigo') {
                    text += "turno 3 o clerigo" + '\n';
                    document.getElementById("botaorolarclerigo").style.visibility='visible';
                    }
                    else if (slot3[4] == 'barbaro') {
                      text += "turno 3 o barbaro" + '\n';
                      document.getElementById("botaorolarbarbaro").style.visibility='visible';
                      }
                      else if (slot3[4] == 'vampiro') {
                        text += "turno 3 o vampiro" + '\n';
                        document.getElementById("botaorolarvampiro").style.visibility='visible';
                        }

            document.getElementById("demo").innerHTML = text;
          }

/*
████████╗██╗░░░██╗██████╗░███╗░░██╗░█████╗░  ░░██╗██╗
╚══██╔══╝██║░░░██║██╔══██╗████╗░██║██╔══██╗  ░██╔╝██║
░░░██║░░░██║░░░██║██████╔╝██╔██╗██║██║░░██║  ██╔╝░██║
░░░██║░░░██║░░░██║██╔══██╗██║╚████║██║░░██║  ███████║
░░░██║░░░╚██████╔╝██║░░██║██║░╚███║╚█████╔╝  ╚════██║
░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░  ░░░░░╚═╝
 */



    if (turno == 4){
          text += "ENTROU NO TURNO 4" + '\n';

          if (vidaplayer2 < 1 && vidaplayer4 < 1 && vidaplayer6 <1 ){

            return youwin();
          };
          
          if ( vidaplayer4 < 1){
            turno++;
            return turnos();
            }

            document.getElementById("auraplayer1").style.visibility='hidden';
document.getElementById("auraplayer2").style.visibility='hidden';
document.getElementById("auraplayer3").style.visibility='hidden';
document.getElementById("auraplayer4").style.visibility='hidden';
document.getElementById("auraplayer5").style.visibility='hidden';
document.getElementById("auraplayer6").style.visibility='hidden';

            dadoroll = [
              'assets/dice.png', //0
              'assets/dice.png', //1
              'assets/dice.png', //2
              'assets/dice.png', //3
              'assets/dice.png', //4
              'assets/dice.png', //5
              'assets/dice.png', //6
              'assets/dice.png', //7
              'assets/dice.png', //8
              'assets/dice.png'];//9
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
            
  
            if (sangramento4 > 0){
              document.getElementById('sangramento4show').style.visibility='visible';
              vidaplayer4 = vidaplayer4 - sangramento4;
              text += "Personagem do Slot 4 tomou " + sangramento4 + " de dano de sangramento " + '\n';
              vidaplayer4show = document.getElementById('vidaplayer4show'); 
      vidaplayer4show.innerHTML = vidaplayer4
              sangramento4 = sangramento4 / 2;
              sangramento4 = Math.floor(sangramento4, 1);
              text += "o personagem ainda tem " + sangramento4 + " de dano de sangramento " + '\n';
              sangramento4show = document.getElementById('sangramento4show'); 
              sangramento4show.innerHTML = sangramento4
              if (sangramento4 < 1){
                document.getElementById('sangramento4show').style.visibility='hidden';
              };
              if(vidaplayer4 < 1){
                morreuplayer4();
               
                turno++;
            return turnos();
                }
            }

            if (atordoadoplayer4 == 1){
              atordoadoplayer4 = 0;
            
             
              document.getElementById('stunplayer4').style.visibility='visible';
              return passarturno();
              
            };
            if (atordoadoplayer4 == 0){
              document.getElementById('stunplayer4').style.visibility='hidden';
            };


            if (furiabarbaro4 > 1){
              furiabarbaro4--;
              if (furiabarbaro4 == 3){
                player4.setAttribute('src', 'assets/barbarofuria3.png');
              };
              if (furiabarbaro4 == 2){
                player4.setAttribute('src', 'assets/barbarofuria2.png');
              };
            };
            if (furiabarbaro4 == 1){
              furiabarbaro4 = 0;
              player4.setAttribute('src', 'assets/barbaro.png');
              document.getElementById('stunplayer4').style.visibility='visible';
              return passarturno();
            
            };
            document.getElementById("auraplayer4").style.visibility='visible';
            setTimeout(function() {
    
        document.getElementById("auraplayer3").style.visibility='hidden';
        document.getElementById("demo").innerHTML = text;
          
          return slot4[2]();
         }, 1000)
          
    
          
    }
    
    /*
    
    
████████╗██╗░░░██╗██████╗░███╗░░██╗░█████╗░  ███████╗
╚══██╔══╝██║░░░██║██╔══██╗████╗░██║██╔══██╗  ██╔════╝
░░░██║░░░██║░░░██║██████╔╝██╔██╗██║██║░░██║  ██████╗░
░░░██║░░░██║░░░██║██╔══██╗██║╚████║██║░░██║  ╚════██╗
░░░██║░░░╚██████╔╝██║░░██║██║░╚███║╚█████╔╝  ██████╔╝
░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░  ╚═════╝░
    */


    if (turno == 5){
          text += "ENTROU NO TURNO 5" + '\n';

          document.getElementById("auraplayer1").style.visibility='hidden';
document.getElementById("auraplayer2").style.visibility='hidden';
document.getElementById("auraplayer3").style.visibility='hidden';
document.getElementById("auraplayer4").style.visibility='hidden';
document.getElementById("auraplayer5").style.visibility='hidden';
document.getElementById("auraplayer6").style.visibility='hidden';

          dadoroll = [
            'assets/dice.png', //0
            'assets/dice.png', //1
            'assets/dice.png', //2
            'assets/dice.png', //3
            'assets/dice.png', //4
            'assets/dice.png', //5
            'assets/dice.png', //6
            'assets/dice.png', //7
            'assets/dice.png', //8
            'assets/dice.png'];//9
      


          document.getElementById("demo").innerHTML = text;
          if ( vidaplayer5 < 1){
            turno++;
            return turnos();
            }
            if (sangramento5 > 0){
              document.getElementById('sangramento5show').style.visibility='visible';
              vidaplayer5 = vidaplayer5 - sangramento5;
              text += "Personagem do Slot 5 tomou " + sangramento5 + " de dano de sangramento " + '\n';
              vidaplayer5show = document.getElementById('vidaplayer5show'); 
      vidaplayer5show.innerHTML = vidaplayer5
              sangramento5 = sangramento5 / 2;
              sangramento5 = Math.floor(sangramento5, 1);
              text += "o personagem ainda tem " + sangramento5 + " de dano de sangramento " + '\n';
              sangramento5show = document.getElementById('sangramento5show'); 
              sangramento5show.innerHTML = sangramento5
              if (sangramento5 < 1){
                document.getElementById('sangramento5show').style.visibility='hidden';
              };
              if(vidaplayer5 < 1){
                morreuplayer5();
                
                turno++;
            return turnos();
                }
            }

            if (atordoadoplayer5 == 1){
              atordoadoplayer5 = 0;
              document.getElementById("botaorolarladino").style.visibility='hidden'; 
              document.getElementById("botaorolarmago").style.visibility='hidden'; 
              document.getElementById("botaorolarguerreiro").style.visibility='hidden';
              document.getElementById("botaorolarmonge").style.visibility='hidden';
              document.getElementById("botaorolarclerigo").style.visibility='hidden';
              document.getElementById("botaorolarbarbaro").style.visibility='hidden';
              document.getElementById("botaorolarvampiro").style.visibility='hidden';
            document.getElementById("auraplayer1").style.visibility='hidden';
            document.getElementById("auraplayer3").style.visibility='hidden';
            document.getElementById("auraplayer5").style.visibility='hidden';
              
              document.getElementById('stunplayer5').style.visibility='visible';
              return passarturno();
              
            };
            if (atordoadoplayer5 == 0){
              document.getElementById('stunplayer5').style.visibility='hidden';
            };



            if (furiabarbaro5 > 1){
              furiabarbaro5--;
              if (furiabarbaro5 == 3){
                player5.setAttribute('src', 'assets/barbarofuria3.png');
              };
              if (furiabarbaro5 == 2){
                player5.setAttribute('src', 'assets/barbarofuria2.png');
              };
            };
            if (furiabarbaro5 == 1){
              furiabarbaro5 = 0;
              player5.setAttribute('src', 'assets/barbaro.png');
              document.getElementById('stunplayer5').style.visibility='visible';
              return passarturno();
            
            };

            document.getElementById("auraplayer5").style.visibility='visible';
            document.getElementById("auraplayer4").style.visibility='hidden';
     
    
                 var menu = document.getElementById("Selectchar5");
    
                
                if (slot5[4] == 'guerreiro') {
                    text += "turno 5 o guerreiro" + '\n';
                    document.getElementById("demo").innerHTML = text;
                    document.getElementById("botaorolarguerreiro").style.visibility='visible';
                }
                else if (slot5[4] == 'ladino') {
                    text += "turno 5 o ladino" + '\n';
                    document.getElementById("botaorolarladino").style.visibility='visible';
                }
                else if (slot5[4] == 'mago') {
                text += "turno 5 o mago" + '\n';
                document.getElementById("botaorolarmago").style.visibility='visible';
                   
                }
                else if (slot5[4] == 'monge') {
                  text += "turno 5 o monge" + '\n';
                  document.getElementById("botaorolarmonge").style.visibility='visible';
                     
                  }

                  else if (slot5[4] == 'clerigo') {
                    text += "turno 5 o clerigo" + '\n';
                    document.getElementById("botaorolarclerigo").style.visibility='visible';
                    }
                    else if (slot5[4] == 'barbaro') {
                      text += "turno 5 o barbaro" + '\n';
                      document.getElementById("botaorolarbarbaro").style.visibility='visible';
                      }
                      else if (slot5[4] == 'vampiro') {
                        text += "turno 5 o vampiro" + '\n';
                        document.getElementById("botaorolarvampiro").style.visibility='visible';
                        }

            document.getElementById("demo").innerHTML = text;
          }	  

/* 
████████╗██╗░░░██╗██████╗░███╗░░██╗░█████╗░  ░█████╗░
╚══██╔══╝██║░░░██║██╔══██╗████╗░██║██╔══██╗  ██╔═══╝░
░░░██║░░░██║░░░██║██████╔╝██╔██╗██║██║░░██║  ██████╗░
░░░██║░░░██║░░░██║██╔══██╗██║╚████║██║░░██║  ██╔══██╗
░░░██║░░░╚██████╔╝██║░░██║██║░╚███║╚█████╔╝  ╚█████╔╝
░░░╚═╝░░░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░  ░╚════╝░
*/


    if (turno == 6){
          text += "ENTROU NO TURNO 6" + '\n';

          if (vidaplayer2 < 1 && vidaplayer4 < 1 && vidaplayer6 <1 ){

            return youwin();
          };

          if ( vidaplayer6 < 1){
            turno++;
            return turnos();
            }

            document.getElementById("auraplayer1").style.visibility='hidden';
document.getElementById("auraplayer2").style.visibility='hidden';
document.getElementById("auraplayer3").style.visibility='hidden';
document.getElementById("auraplayer4").style.visibility='hidden';
document.getElementById("auraplayer5").style.visibility='hidden';
document.getElementById("auraplayer6").style.visibility='hidden';

            dadoroll = [
              'assets/dice.png', //0
              'assets/dice.png', //1
              'assets/dice.png', //2
              'assets/dice.png', //3
              'assets/dice.png', //4
              'assets/dice.png', //5
              'assets/dice.png', //6
              'assets/dice.png', //7
              'assets/dice.png', //8
              'assets/dice.png'];//9

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
            
        
  
            if (sangramento6 > 0){
              document.getElementById('sangramento6show').style.visibility='visible';
              vidaplayer6 = vidaplayer6 - sangramento6;
              text += "Personagem do Slot 6 tomou " + sangramento6 + " de dano de sangramento " + '\n';
              vidaplayer6show = document.getElementById('vidaplayer6show'); 
              vidaplayer6show.innerHTML = vidaplayer6
              sangramento6 = sangramento6 / 2;
              sangramento6 = Math.floor(sangramento6, 1);
              text += "o personagem ainda tem " + sangramento6 + " de dano de sangramento " + '\n';
              sangramento6show = document.getElementById('sangramento6show'); 
              sangramento6show.innerHTML = sangramento6
              if (sangramento6 < 1){
                document.getElementById('sangramento6show').style.visibility='hidden';
              };
              if(vidaplayer6 < 1){
                morreuplayer6();
                
                turno++;
            return turnos();
                }
            }

            if (atordoadoplayer6 == 1){
              atordoadoplayer6 = 0;
              
              
              document.getElementById('stunplayer6').style.visibility='visible';
              return passarturno();
             
            };
            if (atordoadoplayer6 == 0){
              document.getElementById('stunplayer6').style.visibility='hidden';
            };

            if (furiabarbaro6 > 1){
              furiabarbaro6--;
              if (furiabarbaro6 == 3){
                player6.setAttribute('src', 'assets/barbarofuria3.png');
              };
              if (furiabarbaro6 == 2){
                player6.setAttribute('src', 'assets/barbarofuria2.png');
              };
            };
            if (furiabarbaro6 == 1){
              furiabarbaro6 = 0;
              player6.setAttribute('src', 'assets/barbaro.png');
              document.getElementById('stunplayer6').style.visibility='visible';
              return passarturno();
            
            };

            document.getElementById("auraplayer6").style.visibility='visible';
            setTimeout(function() {
    
        document.getElementById("auraplayer5").style.visibility='hidden';
        document.getElementById("demo").innerHTML = text;
          
          return slot6[2]();
         }, 1000)
    
          
          }
    
    }
    
