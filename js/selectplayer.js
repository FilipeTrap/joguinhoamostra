//const guerreiro = [attackguerreiro(),'Guerreiro', 25, 'twinattack', 'https://i.imgur.com/pwgPqEX.png'];




function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function removeNode(node) {
        node.parentNode.removeChild(node);
      }
      
	  //var isLeft = 'drag1' == data || "drag2" == data || "drag3" == data || "drag4" == data || "drag5" == data || "drag6" == data || "drag7" == data;
	  
      function drop01(ev) {
      ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var isLeft = 'drag1' == data || "drag2" == data || "drag3" == data || "drag4" == data || "drag5" == data || "drag6" == data || "drag7" == data;
        var nodeCopy = document.getElementById(data).cloneNode(true);
        nodeCopy.id = "img" + ev.target.id;
        // clean target space if needed
        if (isLeft) {
          if (ev.target.nodeName == 'IMG') {
            ev.target.parentNode.appendChild(nodeCopy);
            removeNode(ev.target);
          }
          else 
            ev.target.appendChild(nodeCopy);
        }
        else {
          if (ev.target.nodeName != 'IMG') {
            removeNode(document.getElementById(data));
            ev.target.appendChild(nodeCopy);
          }
        }
       
		
		
if (document.getElementById("divRight1").children[0].alt == 'guerreiro'){
	 
  console.log('✅ guerreio Slot 1');

  slot1 =[... guerreiro];
                text += "o personagem escolhido foi Guerreiro no slot 1" + '\n';                
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
    selectok1 = 1;
    if(selectok1 == 1 && selectok2 == 1 && selectok3 == 1 && fase == 1){
    document.getElementById("botaocomeçarfase1").style.visibility='visible';
};
                return guerreiroslot1();
            
  }
  if (document.getElementById("divRight1").children[0].alt == 'mago'){

  console.log('✅ mago Slot 1');
  slot1 =[... mago];
  text += "o personagem escolhido foi MAGO no slot 1" + '\n';
  selectok1 = 1;
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
if(selectok1 == 1 && selectok2 == 1 && selectok3 == 1 && fase == 1){
  document.getElementById("botaocomeçarfase1").style.visibility='visible';
};
return magoslot1();
}
if (document.getElementById("divRight1").children[0].alt == 'ladino'){

  console.log('✅ ladino Slot 1');

                slot1 =[... ladino];
                text += "o personagem escolhido foi LADINO no slot 1" + '\n';
                selectok1 = 1;
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
    if(selectok1 == 1 && selectok2 == 1 && selectok3 == 1 && fase == 1){
      document.getElementById("botaocomeçarfase1").style.visibility='visible';
  };
                return ladinoslot1();
} 

//------

if (document.getElementById("divRight1").children[0].alt == 'monge'){

  console.log('✅ monge Slot 1');

  slot1 =[... monge];
  text += "o personagem escolhido foi MONGE no slot 1" + '\n';
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
  return mongeslot1();
} 
if (document.getElementById("divRight1").children[0].alt == 'clerigo'){

  console.log('✅ clerigo Slot 1');
  slot1 =[... clerigo];
  text += "o personagem escolhido foi CLERIGO no slot 1" + '\n';
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
  return clerigoslot1();
} 
if (document.getElementById("divRight1").children[0].alt == 'barbaro'){

  console.log('✅ barbaro Slot 1');
  slot1 =[... barbaro];
  text += "o personagem escolhido foi BARBARO no slot 1" + '\n';
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
  return barbaroslot1();
} 

if (document.getElementById("divRight1").children[0].alt == 'vampiro'){

  console.log('✅ vampiro Slot 1');
  slot1 =[... vampiro];
  text += "o personagem escolhido foi VAMPIRO no slot 1" + '\n';
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
  return vampiroslot1();
} 

ev.stopPropagation();


        return false;
      }
	  
	  
	  
	    
      function drop02(ev) {
      ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var isLeft = 'drag1' == data || "drag2" == data || "drag3" == data || "drag4" == data || "drag5" == data || "drag6" == data || "drag7" == data;
        var nodeCopy = document.getElementById(data).cloneNode(true);
        nodeCopy.id = "img" + ev.target.id;
        // clean target space if needed
        if (isLeft) {
          if (ev.target.nodeName == 'IMG') {
            ev.target.parentNode.appendChild(nodeCopy);
            removeNode(ev.target);
          }
          else 
            ev.target.appendChild(nodeCopy);
        }
        else {
          if (ev.target.nodeName != 'IMG') {
            removeNode(document.getElementById(data));
            ev.target.appendChild(nodeCopy);
          }
        }
        
		
		
if (document.getElementById("divRight2").children[0].alt == 'guerreiro'){
	 
  console.log('✅ guerreiro Slot 3');
  slot3 =[... guerreiro];
  text += "o personagem escolhido foi Guerreiro no slot 3" + '\n';                
  selectok2 = 1;
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
if(selectok1 == 1 && selectok2 == 1 && selectok3 == 1 && fase == 1){
  document.getElementById("botaocomeçarfase1").style.visibility='visible';
};
  return guerreiroslot3();
  }
  if (document.getElementById("divRight2").children[0].alt == 'mago'){

  console.log('✅ mago Slot 3');

  slot3 =[... mago];
  text += "o personagem escolhido foi MAGO no slot 3" + '\n';
  selectok2 = 1;
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
if(selectok1 == 1 && selectok2 == 1 && selectok3 == 1 && fase == 1){
  document.getElementById("botaocomeçarfase1").style.visibility='visible';
};
return magoslot3();
}

 if (document.getElementById("divRight2").children[0].alt == 'ladino'){

  console.log('✅ ladino Slot 3');
  slot3 =[... ladino];
                text += "o personagem escolhido foi LADINO no slot 3" + '\n';
                selectok2 = 1;
    document.getElementById("botaocomeçar").disabled = false;
    document.getElementById("demo").innerHTML = text;
    if(selectok1 == 1 && selectok2 == 1 && selectok3 == 1 && fase == 1){
      document.getElementById("botaocomeçarfase1").style.visibility='visible';
  };
    return ladinoslot3();
}
if (document.getElementById("divRight2").children[0].alt == 'monge'){

  console.log('✅ monge Slot 3');
  slot3 =[... monge];
  text += "o personagem escolhido foi MONGE no slot 3" + '\n';
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
return mongeslot3();
} 
if (document.getElementById("divRight2").children[0].alt == 'clerigo'){

  console.log('✅ clerigo Slot 3');
  slot3 =[... clerigo];
  text += "o personagem escolhido foi CLERIGO no slot 3" + '\n';
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
return clerigoslot3();
} 
if (document.getElementById("divRight2").children[0].alt == 'barbaro'){

  console.log('✅ barbaro Slot 3');
  slot3 =[... barbaro];
  text += "o personagem escolhido foi BARBARO no slot 3" + '\n';

document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
return barbaroslot3();
} 
if (document.getElementById("divRight2").children[0].alt == 'vampiro'){

  console.log('✅ vampiro Slot 3');
  slot3 =[... vampiro];
  text += "o personagem escolhido foi VAMPIRO no slot 3" + '\n';

document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
return vampiroslot3();
} 
ev.stopPropagation();
        return false;
      }
	  
	  
	   function drop03(ev) {
      ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var isLeft = 'drag1' == data || "drag2" == data || "drag3" == data || "drag4" == data || "drag5" == data || "drag6" == data || "drag7" == data;
        var nodeCopy = document.getElementById(data).cloneNode(true);
        nodeCopy.id = "img" + ev.target.id;
        // clean target space if needed
        if (isLeft) {
          if (ev.target.nodeName == 'IMG') {
            ev.target.parentNode.appendChild(nodeCopy);
            removeNode(ev.target);
          }
          else 
            ev.target.appendChild(nodeCopy);
        }
        else {
          if (ev.target.nodeName != 'IMG') {
            removeNode(document.getElementById(data));
            ev.target.appendChild(nodeCopy);
          }
        }
        
		
		
if (document.getElementById("divRight3").children[0].alt == 'guerreiro'){
	 
  console.log('✅ guerreio Slot 5');
  slot5 =[... guerreiro];
  text += "o personagem escolhido foi Guerreiro no slot 5" + '\n';                
  selectok3 = 1;
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
if(selectok1 == 1 && selectok2 == 1 && selectok3 == 1 && fase == 1){
  document.getElementById("botaocomeçarfase1").style.visibility='visible';
};
  return guerreiroslot5();
  }
  if (document.getElementById("divRight3").children[0].alt == 'mago'){

  console.log('✅ mago Slot 5');

  slot5 =[... mago];
  text += "o personagem escolhido foi MAGO no slot 5" + '\n';
  
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
selectok3 = 1;
if(selectok1 == 1 && selectok2 == 1 && selectok3 == 1 && fase == 1){
  document.getElementById("botaocomeçarfase1").style.visibility='visible';
};
return magoslot5();
}
if (document.getElementById("divRight3").children[0].alt == 'ladino'){

  console.log('✅ ladino Slot 5');

  slot5 =[... ladino];
  text += "o personagem escolhido foi LADINO no slot 5" + '\n';
  
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;
selectok3 = 1;
if(selectok1 == 1 && selectok2 == 1 && selectok3 == 1 && fase == 1){
  document.getElementById("botaocomeçarfase1").style.visibility='visible';
};
return ladinoslot5();
}
if (document.getElementById("divRight3").children[0].alt == 'monge'){

  console.log('✅ monge Slot 5');
  slot5 =[... monge];
  text += "o personagem escolhido foi monge no slot 5" + '\n';
  
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;

return mongeslot5();
} 
if (document.getElementById("divRight3").children[0].alt == 'clerigo'){

  console.log('✅ clerigo Slot 5');
  slot5 =[... clerigo];
  text += "o personagem escolhido foi clerigo no slot 5" + '\n';
  
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;

return clerigoslot5();
} 
if (document.getElementById("divRight3").children[0].alt == 'barbaro'){

  console.log('✅ barbaro Slot 5');
  slot5 =[... barbaro];
  text += "o personagem escolhido foi barbaro no slot 5" + '\n';
  
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;

return barbaroslot5();
} 
if (document.getElementById("divRight3").children[0].alt == 'vampiro'){

  console.log('✅ vampiro Slot 5');
  slot5 =[... vampiro];
  text += "o personagem escolhido foi VAMPIRO no slot 5" + '\n';
  
document.getElementById("botaocomeçar").disabled = false;
document.getElementById("demo").innerHTML = text;

return vampiroslot5();
} 
ev.stopPropagation();
        return false;
      }



function barbaroslot1 () {
    player1.setAttribute('src', slot1[1]);
    miniplayer1.setAttribute('src', slot1[1]);
    vidaplayer1 = slot1[0]
    }
    
    function barbaroslot3 () {
    player3.setAttribute('src', slot3[1]);
    miniplayer3.setAttribute('src', slot3[1]);
    vidaplayer3 = slot3[0]
    }
    
    function barbaroslot5 () {
        player5.setAttribute('src', slot5[1]);
        miniplayer5.setAttribute('src', slot5[1]);
        vidaplayer5 = slot5[0]
    }




function clerigoslot1 () {
    player1.setAttribute('src', slot1[1]);
    miniplayer1.setAttribute('src', slot1[1]);
    vidaplayer1 = slot1[0]
    }
    
    function clerigoslot3 () {
    player3.setAttribute('src', slot3[1]);
    miniplayer3.setAttribute('src', slot3[1]);
    vidaplayer3 = slot3[0]
    }
    
    function clerigoslot5 () {
        player5.setAttribute('src', slot5[1]);
        miniplayer5.setAttribute('src', slot5[1]);
        vidaplayer5 = slot5[0]
    }



//imageslot1 monge[4]

function mongeslot1 () {
    //slot1 =[... guerreiro];
    player1.setAttribute('src', slot1[1]);
    miniplayer1.setAttribute('src', slot1[1]);
    vidaplayer1 = slot1[0]
    }
    
    function mongeslot3 () {
    player3.setAttribute('src', slot3[1]);
    miniplayer3.setAttribute('src', slot3[1]);
    vidaplayer3 = slot3[0]
    }
    
    function mongeslot5 () {
        player5.setAttribute('src', slot5[1]);
        miniplayer5.setAttribute('src', slot5[1]);
        vidaplayer5 = slot5[0]
    }





//imageslot1 guerreiro[4]

function guerreiroslot1 () {
//slot1 =[... guerreiro];
player1.setAttribute('src', slot1[1]);
miniplayer1.setAttribute('src', slot1[1]);
vidaplayer1 = slot1[0]
}

function guerreiroslot3 () {
player3.setAttribute('src', slot3[1]);
miniplayer3.setAttribute('src', slot3[1]);
vidaplayer3 = slot3[0]
}

function guerreiroslot5 () {
    player5.setAttribute('src', slot5[1]);
    miniplayer5.setAttribute('src', slot5[1]);
    vidaplayer5 = slot5[0]
}



//-------------------------------------------------------------------------

function ladinoslot1 () {
    player1.setAttribute('src', slot1[1]);
    miniplayer1.setAttribute('src', slot1[1]);
    vidaplayer1 = slot1[0]
}

function ladinoslot3 () {
    player3.setAttribute('src', slot3[1]);
    miniplayer3.setAttribute('src', slot3[1]);
    vidaplayer3 = slot3[0]
}

function ladinoslot5 () {
    player5.setAttribute('src', slot5[1]);
    miniplayer5.setAttribute('src', slot5[1]);
    vidaplayer5 = slot5[0]
}
//----------------------------------------------------------------------------


function magoslot1 () {
    player1.setAttribute('src', slot1[1]);
    miniplayer1.setAttribute('src', slot1[1]);
    vidaplayer1 = slot1[0]
}

function magoslot3 () {
    player3.setAttribute('src', slot3[1]);
    miniplayer3.setAttribute('src', slot3[1]);
    vidaplayer3 = slot3[0]
}

function magoslot5 () {
    player5.setAttribute('src', slot5[1]);
    miniplayer5.setAttribute('src', slot5[1]);
    vidaplayer5 = slot5[0]
}


function vampiroslot1 () {
  player1.setAttribute('src', slot1[1]);
  miniplayer1.setAttribute('src', slot1[1]);
  vidaplayer1 = slot1[0]
}

function vampiroslot3 () {
  player3.setAttribute('src', slot3[1]);
  miniplayer3.setAttribute('src', slot3[1]);
  vidaplayer3 = slot3[0]
}

function vampiroslot5 () {
  player5.setAttribute('src', slot5[1]);
  miniplayer5.setAttribute('src', slot5[1]);
  vidaplayer5 = slot5[0]
}
