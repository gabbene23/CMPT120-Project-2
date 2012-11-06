//
//              Greg Abbene  
//      Project 4 -Due: November 7th 2012
//
      var currentScore          = 0;
      var currentLocation       = 0;
      var northVisited          = false;  
      var eastVisited           = false;
      var westVisited           = false;
      var southVisited          = false;
      var barVisited            = false;
      var northBarVisited       = false;
      var secertMeetingVisited  = false;
      var stallVisited          = false;
      var girlVisited           = false;
      var towerVisited          = false;
      var farnorthVisited       = false;
      
      var inventory = [];
      
      function take() {
        if (currentLocation === 6) {
          if(inventory.indexOf("Sword!") === -1) {
            inventory.push("Sword!");
            var msg = "You now have a sword...just ignore the manure on it.";
            updateDisplay(msg);
          }
        }else if (currentLocation === 5) {
          if(inventory.indexOf("Wine Flask!") === -1) {
            inventory.push("Wine Flask!");
            var msg = "Thankfully you now have some wine for the road home...it may mean life or death later.";
            updateDisplay(msg);
          }
        }else if (currentLocation === 11) {
          if(inventory.indexOf("Helmet!") === -1) {
            inventory.push("Helmet!");
            var msg = "Woohoo, an alcohol drenched and filthy royal helmet...onto the head it goes.";
            updateDisplay(msg);
          }
        } else {
            var msg = "There is nothing to take here...you fool."
            updateDisplay(msg);
          }
      }
      
      function showInv() {
        var msg = "Inventory Contents: ";
        for(i = 0; i < inventory.length; i++)
          msg += inventory[i] + "\n";
          updateDisplay(msg);
      }

      function init() {
        updateDisplay( "Welcome to A Song of Ice and Fire: Tyrion's Adventure!" 
                       + "\n" 
                       + "\n" 
                       + "Alright Tyrion Lanister, you are hungover/still drunk in the middle of Townsquare covered in manure ...again."
                       + "\n"
                       + "\n" 
                       + "You seem to have lost a bunch of items."
                       + "\n"
                       + "\n"
                       + "Type in HELP for Commands List....now go home." )
      }
      
      
      function displayHelp() {
        updateDisplay( "Try commands such as:"
                       + "\n" 
                       + "DIRECTIONAL COMMANDS: n, s, e, w... N, S, E, W...NORTH, SOUTH, EAST, WEST....etc"
                       + "\n"
                       + "\n"  
                       + "TO TAKE AN ITEM: take, t, T"
                       + "\n" 
                       + "\n"
                       + "TO VIEW MAP: m, M, map"
                       + "\n" 
                       + "\n"  
                       + "TO VIEW INVENTORY: i, I, inventory" 
                       + "\n"
                       + "---------------------------------------------------------")
      }
      
      function displayMap() {
            updateDisplay("---------------------------------------------------------"
                         +"\n"
                         +"      Take a look at the game map!"
                         +"\n\n"
                         +"               [14?]- - [15?] - - [17??]"
                         +"\n"  
                         +"                 |        |"
                         +"\n"
                         +"                 |      [16?]"
                         +"\n"
                         +"                 |"
                         +"\n"
                         +"                [10]- - [13?]"
                         +"\n"  
                         +"                 |"
                         +"\n"
                         +"            [7]-[1]"
                         +"\n"
                         +"                 |"
                         +"\n"
                         +"         [12]    |  [9?]"
                         +"\n"
                         +"         [11]    |   |"
                         +"\n"
                         +"         [5][2]-[0]-[3][6]"
                         +"\n"
                         +"                 |   |"
                         +"\n"
                         +"                 |  [8]"
                         +"\n"
                         +"                [4]"
                         +"\n"  
                         +" ? INDICATE I STILL NEED TO MAKE LOCATIONS"
                         +"\n"
                         +"---------------------------------------------------------")
      }
          
      function location_switch (location) {
        switch(location) {
          
          //"townSquare" = Default Location
          
          case "townSquare" :
                             document.getElementById("btnNorth").style.visibility="visible";
                             document.getElementById("btnWest").style.visibility="visible";
                             document.getElementById("btnEast").style.visibility="visible";
                             document.getElementById("btnSouth").style.visibility="visible";
                             document.getElementById("location").innerHTML = currentLocation;
                             break;
                             
          case "leaveCastle" : 
                              document.getElementById("btnNorth").style.visibility="visible";
                              document.getElementById("btnWest").style.visibility="visible";
                              document.getElementById("btnEast").style.visibility="hidden";
                              document.getElementById("btnSouth").style.visibility="visible";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!northVisited){
                                  currentScore += 5;
                                  northVisited = true;
                                }                             
                              break;
                                
          case "barEntrance" : 
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
                               
          case "stallEntrance" : 
                                 document.getElementById("btnNorth").style.visibility="hidden";
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
                                  
                                  
           case "wall"        : 
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
                                         
                                  
           case "bar"         : 
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
                               
           case "northBar"   : 
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
                              
           case "secertMeeting" : 
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
                                                              
                              
           case "stall"      : 
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
                                
          case "girl"        : 
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
                                
          case "tower"       : 
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
          
          case "farnorth"    :
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
            currentLocation = 1;
            location_switch("leaveCastle");
            var msg = "You slowly wobble out of the castle, but you should explore the castle to make sure you get all the crucial items...To the WEST there is a tower with a pissed off soldier and a horse tied to it, Kings Landing(Home) is NORTH";
            updateDisplay(msg);
          } else if (currentLocation === 4) {
              currentLocation = 0;
              location_switch("townSquare");
              var msg = "You are back in the townsquare, the starting location.";                            
              updateDisplay(msg);
          } else if (currentLocation === 1) {
              if (inventory.indexOf("Horse!") !== -1) {
                currentLocation = 10;
                location_switch("farnorth");
                var msg = "NEED TO EDIT WHEN HORSE SEQUENCE IS ADDED!!!!"
                updateDisplay(msg);
            } else {
                var msg = "There is far too much ground to cover without a horse, you really really need one."
                updateDisplay(msg)
              }
          } else if (currentLocation === 5) {
              currentLocation = 11;
              location_switch("northBar");
              var msg = "You find a passed out townsman using your helmet as cup....o well it's better than nothing I suggest you take it back. Also, you find yourself curious as too what is through that slightly opened door NORTH of you.."
              updateDisplay(msg);
          } else if (currentLocation === 8) {
              currentLocation = 3;
              location_switch("stallEntrance");
              var msg = "You are back at the entrance to the stall...ADD NORTH LOCATION EVENTUALLY"
              updateDisplay(msg);
          } else if (currentLocation === 11) {
              currentLocation = 12;
              location_switch("secertMeeting");
              var msg= "INSERT DEATH SEQUENCE, BUT NEED TO FIGURE OUT HOW TO INITIATE GAMEOVER. For now you're Lucky....just go south."
              updateDisplay(msg);
          }     else updateDisplay(msg);
      }
      
      function btn_west() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            currentLocation = 2;
            location_switch("barEntrance");
            var msg = "You're at the opened-entrance of the town Bar (Stumble INN), you seriously need some wine...Go WEST to enter the bar.";   
            updateDisplay(msg);
          } else if (currentLocation === 1) {
              currentLocation =7;
              location_switch("tower");
              var msg = "You're commanded to stop as soon as you walk into the tower by an overly aggressive soldier/guard. You need that horse...!!ADD BRIBERY SEQUENCE!!"
              updateDisplay(msg);
          } else if (currentLocation === 2) {
              currentLocation = 5;
              location_switch("bar");
              var msg = "Ah back where you feel comfortable, the good ole' bar. You are greeted by the bar-keep who points you towards your full wine flask on the bar counter. Also, is that your helmet in the north end of the bar?";
              updateDisplay(msg);
          } else if (currentLocation === 3) {
              currentLocation = 0;
              location_switch("townSquare");
              var msg = "You're in the Townsquare!"
              updateDisplay(msg);
          } else if (currentLocation === 6) {
              currentLocation = 3;
              location_switch("stallEntrance");
              var msg= "You're back at the smelly stall entrance...something catches your eye SOUTH."
              updateDisplay(msg);
          }    else updateDisplay(msg);
      }

      function btn_east() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            currentLocation = 3;
            location_switch("stallEntrance");
            var msg = "You are at the opened and smelly entrance of a stall. Please go EAST to enter the stall.";
            updateDisplay(msg);
          } else if (currentLocation === 3) {
              currentLocation = 6;
              location_switch("stall");
              var msg = "You go back into your most recent resting place, the comfy (horse-free) horse stall, is there something shiny in that manure? Type take to get the item!";
              updateDisplay(msg);
          } else if (currentLocation === 2) {
              currentLocation = 0;
              location_switch("townSquare");
              var msg = "TOWNSQUARE!"
              updateDisplay(msg);
          } else if (currentLocation === 5) {
              currentLocation = 2;
              location_switch("barEntrance");
              var msg = "It's a sad hour, but you have just left the bar...at least you got some loots!"
              updateDisplay(msg);
          } else if (currentLocation === 7) {
              currentLocation = 1;
              location_switch("leaveCastle");
              var msg = "Back on the road again...but seriously you really need that horse to progress home to King's Landing..."
              updateDisplay(msg);
          }      else updateDisplay(msg);                                      
      }
      
      function btn_south() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            currentLocation = 4;
            location_switch("wall");
            var msg = "There appears to be a stone wall there, grow 25 feet then see if you can climb that. You'll get some points for the effort though...";
            updateDisplay(msg);            
          } else if (currentLocation === 1) {
              currentLocation = 0;
              location_switch("townSquare");
              var msg = "Good too see you are double checking if you have all the items, but be careful don't be too curious. You're in TOWNSQUARE!"
              updateDisplay(msg);
          } else if (currentLocation === 3) {
              currentLocation = 8;
              location_switch("girl");
              var msg = "You recognize that passed-out girl...O yeah you had a drinking contest with her last night, I guess you won. You get +10 points for being a noble visitor!!"
              updateDisplay(msg);
          } else if (currentLocation === 10) {
              currentLocation = 1;
              location_switch("leaveCastle");
              var msg = "Unless you forgot an item...you have no reason to go back to that grimy town."
              updateDisplay(msg);
          } else if (currentLocation === 11) {
              currentLocation = 5;
              location_switch("bar");
              var msg = "You nod at the bar keeper, but I think it is time to go."
              updateDisplay(msg);
          } else if (currentLocation === 12) {
              currentLocation = 11;
              location_switch("northBar");
              var msg = "You are back by the passed out townsperson. Go south again to go back to the bar counter."
              updateDisplay(msg);
          }     else updateDisplay(msg);
      }                     
      
      function btn_go_click() {
        var command = document.getElementById("txtCommand");
        switch(command.value){
          case "N"     : 
          case "n"     : 
          case "north" : 
          case "North" : 
          case "NORTH" : btn_north();
            break;
            
          case "S"     : 
          case "s"     : 
          case "south" : 
          case "South" : 
          case "SOUTH" : btn_south();
            break;
            
          case "E"     : 
          case "e"     : 
          case "east"  : 
          case "East"  : 
          case "EAST"  : btn_east();
            break;
            
          case "W"     : 
          case "w"     : 
          case "west"  : 
          case "West"  : 
          case "WEST"  : btn_west();
            break;
            
          case "help"  :
          case "HELP"  :
          case "Help"  :
          case "h"     :
          case "H"     : displayHelp(); 
            break;
            
          case "take"  : 
          case "t"     :
          case "T"     : take();
            break;
          
          
          case "i"        :
          case "I"        :
          case "inventory": showInv();
            break;
           
          
          case "m"      :
          case "M"      :
          case "map"    : displayMap();
            break;
                    
          
          default      : var msg = "Invalid Command...\"He doesn't like you\" (Luke Skywalker ignores) \"I don't like you.\" Luke responds \"I'm sorry.\" the fugitive responds \"You'll be dead.\"...theoretical lightsaber to the face for putting in the wrong command.... Enter the command \"help\" for some suggestions.";
                          updateDisplay(msg);
            break;
          }
     }       
                
      function updateDisplay(msg){                                   
        msg = msg 
        var ta = document.getElementById("Textarea");
        ta.value = msg + "\n" + "\n" + ta.value; 
       } 
       