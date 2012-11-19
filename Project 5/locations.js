//
//              Greg Abbene  
//      Project 5 -Due: November 28th 2012
//
      function location_switch (location) {
        switch(location) {
          
          //"townSquare" = Default Location //no points awarded
          
          case "townSquare" : currentLocation = 0;
                             document.getElementById("btnNorth").style.visibility="visible";
                             document.getElementById("btnWest").style.visibility="visible";
                             document.getElementById("btnEast").style.visibility="visible";
                             document.getElementById("btnSouth").style.visibility="visible";
                             document.getElementById("location").innerHTML = currentLocation;
                             break;
                             
          case "leaveCastle" : currentLocation = 1;
                              document.getElementById("btnNorth").style.visibility="visible";
                              document.getElementById("btnWest").style.visibility="visible";
                              document.getElementById("btnEast").style.visibility="hidden";
                              document.getElementById("btnSouth").style.visibility="visible";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!northVisited){
                                  currentScore += 5;
                                  document.getElementById("score").innerHTML = currentScore;
                                  northVisited = true;
                                }                             
                              break;
                                
          case "barEntrance" : currentLocation = 2;
                              document.getElementById("btnNorth").style.visibility="hidden";
                              document.getElementById("btnWest").style.visibility="visible";
                              document.getElementById("btnEast").style.visibility="visible";
                              document.getElementById("btnSouth").style.visibility="hidden";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!westVisited){
                                  currentScore += 5;
                                  document.getElementById("score").innerHTML = currentScore;
                                  westVisited = true;
                                } 
                               break;
                               
          case "stallEntrance" : currentLocation = 3;
                                 document.getElementById("btnNorth").style.visibility="visible";
                                 document.getElementById("btnWest").style.visibility="visible";
                                 document.getElementById("btnEast").style.visibility="visible";
                                 document.getElementById("btnSouth").style.visibility="visible";
                                 document.getElementById("location").innerHTML = currentLocation;
                                  if(!eastVisited){
                                    currentScore += 5;
                                    document.getElementById("score").innerHTML = currentScore;
                                    eastVisited = true;
                                  }
                                  break;
                                  
                                  
           case "wall"        : currentLocation = 4;
                               document.getElementById("btnNorth").style.visibility="visible";
                               document.getElementById("btnWest").style.visibility="hidden";
                               document.getElementById("btnEast").style.visibility="hidden";
                               document.getElementById("btnSouth").style.visibility="hidden";
                               document.getElementById("location").innerHTML = currentLocation;
                                if(!southVisited){
                                  currentScore += 5;
                                  document.getElementById("score").innerHTML = currentScore;
                                  southVisited = true;
                                }
                               break; 
                                         
                                  
           case "bar"         : currentLocation = 5;
                               document.getElementById("btnNorth").style.visibility="visible";
                               document.getElementById("btnWest").style.visibility="hidden";
                               document.getElementById("btnEast").style.visibility="visible";
                               document.getElementById("btnSouth").style.visibility="hidden";
                               document.getElementById("location").innerHTML = currentLocation;
                                if(!barVisited){
                                  currentScore += 5;
                                  document.getElementById("score").innerHTML = currentScore;
                                  barVisited = true;
                                }
                               break;
                               
           case "northBar"   : currentLocation = 11;
                               document.getElementById("btnNorth").style.visibility="visible";
                               document.getElementById("btnWest").style.visibility="hidden";
                               document.getElementById("btnEast").style.visibility="hidden";
                               document.getElementById("btnSouth").style.visibility="visible";
                               document.getElementById("location").innerHTML = currentLocation;
                                if(!northBarVisited){
                                  currentScore += 5;
                                  document.getElementById("score").innerHTML = currentScore;
                                  norhtBarVisited = true;
                                }
                               break;
                              
           case "secertMeeting" : currentLocation = 12;
                               document.getElementById("btnNorth").style.visibility="hidden";
                               document.getElementById("btnWest").style.visibility="hidden";
                               document.getElementById("btnEast").style.visibility="hidden";
                               document.getElementById("btnSouth").style.visibility="visible";
                               document.getElementById("location").innerHTML = currentLocation;
                                if(!secertMeetingVisited){
                                  currentScore += 0;
                                  document.getElementById("score").innerHTML = currentScore;
                                  secertMeetingVisited = true;
                                }
                               break;
                                                              
                              
           case "stall"      : currentLocation = 6;
                              document.getElementById("btnNorth").style.visibility="hidden";
                              document.getElementById("btnWest").style.visibility="visible";
                              document.getElementById("btnEast").style.visibility="hidden";
                              document.getElementById("btnSouth").style.visibility="hidden";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!stallVisited){
                                  currentScore += 5;
                                  document.getElementById("score").innerHTML = currentScore;
                                  stallVisited = true;
                                }
                                break;
                                
          case "girl"        : currentLocation = 8;
                              document.getElementById("btnNorth").style.visibility="visible";
                              document.getElementById("btnWest").style.visibility="hidden";
                              document.getElementById("btnEast").style.visibility="hidden";
                              document.getElementById("btnSouth").style.visibility="hidden";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!girlVisited){
                                  currentScore += 10;
                                  document.getElementById("score").innerHTML = currentScore;
                                  girlVisited = true;
                                }
                                break;  
								
          case "northStall"  : currentLocation = 9;
                              document.getElementById("btnNorth").style.visibility="hidden";
                              document.getElementById("btnWest").style.visibility="hidden";
                              document.getElementById("btnEast").style.visibility="hidden";
                              document.getElementById("btnSouth").style.visibility="visible";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!northStallVisited){
                                  currentScore += 10;
                                  document.getElementById("score").innerHTML = currentScore;
                                  northStallVisited = true;
                                }
                                break;      
								
          case "tower"       : currentLocation = 7;
                              document.getElementById("btnNorth").style.visibility="hidden";
                              document.getElementById("btnWest").style.visibility="hidden";
                              document.getElementById("btnEast").style.visibility="visible";
                              document.getElementById("btnSouth").style.visibility="hidden";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!towerVisited){
                                  currentScore += 5;
                                  document.getElementById("score").innerHTML = currentScore;
                                  towerVisited = true;
                                }
                                break;
          
          case "farnorth"    : currentLocation = 10;
                              document.getElementById("btnNorth").style.visibility="hidden";
                              document.getElementById("btnWest").style.visibility="hidden";
                              document.getElementById("btnEast").style.visibility="hidden";
                              document.getElementById("btnSouth").style.visibility="visible";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!farnorthVisited){
                                  currentScore += 5;
                                  document.getElementById("score").innerHTML = currentScore;
                                  farnorthVisited = true;
                                }
                              break;                                
                                
          default            : var msg = "ERROR, ERROR, ERROR...REVERT CHANGES!!";
                              updateDisplay(msg);
                              break;      
        }                  
      }  
      
      function btn_north() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            location_switch("leaveCastle");
            var msg = "You slowly wobble out of the castle, but you should explore the castle to make sure you get all the crucial items...To the WEST there is a tower with a pissed off soldier and a horse tied to it, Kings Landing(Home) is NORTH";
            updateDisplay(msg);
          } else if (currentLocation === 4) {
              location_switch("townSquare");
              var msg = "You are back in the townsquare, the starting location.";                            
              updateDisplay(msg);
          } else if (currentLocation === 1) {
              if (inventory.indexOf("Horse!") !== -1) {
                location_switch("farnorth");
                var msg = "You daze out, and ride your north for a long-time...its boring stuff, but you feel like genius for solving that puzzle."
                updateDisplay(msg);
            } else {
                var msg = "There is far too much ground to cover without a horse, you really really need one."
                updateDisplay(msg)
              }
          } else if (currentLocation === 5) {
              location_switch("northBar");
              var msg = "You find a passed out townsman using your helmet as cup....o well it's better than nothing I suggest you take it back. Also, you find yourself curious as too what is through that slightly opened door NORTH of you.."
              updateDisplay(msg);
          } else if (currentLocation === 8) {
              location_switch("stallEntrance");
              var msg = "You are back at the entrance to the stall."
              updateDisplay(msg);
          } else if (currentLocation === 3) {
			  location_switch("northStall");
			  var msg = "You were everywhere last night, is that your SHIELD on the ground over there?";
			  updateDisplay(msg);
		  } else if (currentLocation === 11) {
              location_switch("secertMeeting");
              var msg= "INSERT DEATH SEQUENCE, BUT NEED TO FIGURE OUT HOW TO INITIATE GAMEOVER. For now you're Lucky....just go south."
              updateDisplay(msg);
          }     else updateDisplay(msg);
      }
      
      function btn_west() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            location_switch("barEntrance");
            var msg = "You're at the opened-entrance of the town Bar (Stumble INN), you seriously need some wine...Go WEST to enter the bar.";   
            updateDisplay(msg);
          } else if (currentLocation === 1) {
              location_switch("tower");
              var msg = "You're commanded to stop as soon as you walk into the tower by an overly aggressive soldier/guard. You need that horse!!"
              updateDisplay(msg);
          } else if (currentLocation === 2) {
              location_switch("bar");
              var msg = "Ah back where you feel comfortable, the good ole' bar. You are greeted by the bar-keep who points you towards your full wine flask on the bar counter. Also, is that your helmet in the north end of the bar?";
              updateDisplay(msg);
          } else if (currentLocation === 3) {
              location_switch("townSquare");
              var msg = "You're in the Townsquare!"
              updateDisplay(msg);
          } else if (currentLocation === 6) {
              location_switch("stallEntrance");
              var msg= "You're back at the smelly stall entrance...something catches your eye SOUTH."
              updateDisplay(msg);
          }    else updateDisplay(msg);
      }

      function btn_east() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            location_switch("stallEntrance");
            var msg = "You are at the opened and smelly entrance of a stall. Please go EAST to enter the stall.";
            updateDisplay(msg);
          } else if (currentLocation === 3) {
              location_switch("stall");
              var msg = "You go back into your most recent resting place, the comfy (horse-free) horse stall, is there something shiny in that manure? Type take to get the item!";
              updateDisplay(msg);
          } else if (currentLocation === 2) {
              location_switch("townSquare");
              var msg = "TOWNSQUARE!"
              updateDisplay(msg);
          } else if (currentLocation === 5) {
              location_switch("barEntrance");
              var msg = "It's a sad hour, but you have just left the bar...at least you got some loots!"
              updateDisplay(msg);
          } else if (currentLocation === 7) {
              location_switch("leaveCastle");
              var msg = "Back on the road again...but seriously you really need that horse to progress home to King's Landing..."
              updateDisplay(msg);
          }      else updateDisplay(msg);                                      
      }
      
      function btn_south() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            location_switch("wall");
            var msg = "There appears to be a stone wall there, grow 25 feet then see if you can climb that. You'll get some points for the effort though...";
            updateDisplay(msg);            
          } else if (currentLocation === 1) {
              location_switch("townSquare");
              var msg = "Good too see you are double checking if you have all the items, but be careful don't be too curious. You're in TOWNSQUARE!"
              updateDisplay(msg);
          } else if (currentLocation === 3) {
              location_switch("girl");
              var msg = "You recognize that passed-out girl...O yeah you had a drinking contest with her last night, I guess you won. You get +10 points for being a noble visitor!!"
              updateDisplay(msg);
          } else if (currentLocation === 9) {
			  location_switch("stallEntrance");
			  var msg = "You are back at the stall entrance...if you haven't been in there yet I suggest you go in there now.";
			  updateDisplay(msg);				  
		  } else if (currentLocation === 10) {
              location_switch("leaveCastle");
              var msg = "Unless you forgot an item...you have no reason to go back to that grimy town."
              updateDisplay(msg);
          } else if (currentLocation === 11) {
              location_switch("bar");
              var msg = "You nod at the bar keeper, but I think it is time to go."
              updateDisplay(msg);
          } else if (currentLocation === 12) {
              location_switch("northBar");
              var msg = "You are back by the passed out townsperson. Go south again to go back to the bar counter."
              updateDisplay(msg);
          }     else updateDisplay(msg);
      }                     