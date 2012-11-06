//
//
//      Greg Abbene
//      
//
      var currentScore          = 0;
      var northVisited          = false;  
      var eastVisited           = false;
      var westVisited           = false;
      var southVisited          = false;
      var barVisited            = false;
      var northBarVisited       = false;
      var secertMeetingVisited  = false;
      var stallVisited          = false;
      var towerVisited          = false;
      //GET HORSE AND CANT GET TO 10 UNLESS YOU STEAL HORSE!
      var farnorthVisited       = false;

      var currentLocation       = 0;
          
      function location_switch (location) {
        switch(location) {
          
          //"townSquare" = Default Location
          
          case "townSquare" : var msg = "You are back in the townsquare, the starting location.";                            
                             updateDisplay(msg);
                             document.getElementById("btnNorth").style.visibility="visible";
                             document.getElementById("btnWest").style.visibility="visible";
                             document.getElementById("btnEast").style.visibility="visible";
                             document.getElementById("btnSouth").style.visibility="visible";
                             document.getElementById("location").innerHTML = currentLocation;
                             break;
                             
          case "leaveCastle" : var msg = "You slowly wobble out of the castle, but you should explore around a little bit. It's a small castle, who knows you could find some crucial items....To the West there is a small hut, Kings Landing is NORTH, and nothing is immediately to the EAST";
                              updateDisplay(msg);
                              document.getElementById("btnNorth").style.visibility="visible";
                              document.getElementById("btnWest").style.visibility="hidden";
                              document.getElementById("btnEast").style.visibility="hidden";
                              document.getElementById("btnSouth").style.visibility="visible";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!northVisited){
                                  currentScore += 5;
                                  northVisited = true;
                                }                             
                              break;
                                
          case "barEntrance" : var msg = "You are at the opened-entrance of the town Inn (Stumble INN), time for another drink. I guess the best way to remember where you left your stuff is to get into the same mindset as last night. Go WEST to enter the bar.";   
                              updateDisplay(msg);
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
                               
          case "stallEntrance" : var msg = "You are at the opened and smelly entrance of a stall. Please go EAST to enter the stall.";
                                 updateDisplay(msg);
                                 document.getElementById("btnNorth").style.visibility="hidden";
                                 document.getElementById("btnWest").style.visibility="visible";
                                 document.getElementById("btnEast").style.visibility="visible";
                                 document.getElementById("btnSouth").style.visibility="hidden";
                                 document.getElementById("location").innerHTML = currentLocation;
                                  if(!eastVisited){
                                    currentScore += 5;
                                    document.getElementById("score").innerHTML = currentScore;
                                    eastVisited = true;
                                  }
                                  break;
                                  
                                  
           case "wall"        : var msg = "There appears to be a stone wall there, grow 25 feet then see if you can climb that. You'll get some points for the effort though...";
                               updateDisplay(msg);
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
                                         
                                  
           case "bar"         : var msg = "Ah back where you feel comfortable, the good old bar. Grab a drink and is that your helmet in the north end of the bar?";
                               updateDisplay(msg);
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
                               
           case "northBar"   : var msg = "You find a passed out townsmen using your helmet as cup....o well it's better than nothing I suggest you take it. Also, you find yourself curious as too what is through that slightly opened door NORTH of you.."
                               updateDisplay(msg);
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
                              
           case "secertMeeting" : var msg= "INSERT DEATH SEQUENCE, BUT NEED TO FIGURE OUT HOW TO INITIATE GAMEOVER. Your Lucky....just go south."
                               updateDisplay(msg);
                               document.getElementById("btnNorth").style.visibility="hiddem";
                               document.getElementById("btnWest").style.visibility="hidden";
                               document.getElementById("btnEast").style.visibility="hidden";
                               document.getElementById("btnSouth").style.visibility="visible";
                               document.getElementById("location").innerHTML = currentLocation;
                                if(!northBarVisited){
                                  currentScore += 0;
                                  document.getElementById("score").innerHTML = currentScore;
                                  norhtBarVisited = true;
                                }
                               break;
                                                              
                               //PLACE ITEM IN STALL
           case "stall"      : var msg = "You go back into your most recent resting place, the comfy (horse-free) horse stall, is there something in that manure? Go WEST to leave the stall";
                              updateDisplay(msg);
                              document.getElementById("btnNorth").style.visibility="hidden";
                              document.getElementById("btnWest").style.visibility="visible";
                              document.getElementById("btnEast").style.visibility="visible";
                              document.getElementById("btnSouth").style.visibility="hidden";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!stallVisited){
                                  currentScore += 5;
                                  document.getElementById("score").innerHTML = currentScore;
                                  stallVisited = true;
                                }
                                break;
                                
          case "tower"       : var msg = "You aren't suppose to be in here...get out now before someone sees you."
                              updateDisplay(msg);
                              document.getElementById("btnNorth").style.visibility="hidden";
                              document.getElementById("btnWest").style.visibility="visible";
                              document.getElementById("btnEast").style.visibility="visible";
                              document.getElementById("btnSouth").style.visibility="hidden";
                              document.getElementById("location").innerHTML = currentLocation;
                                if(!towerVisited){
                                  currentScore += 5;
                                  document.getElementById("score").innerHTML = currentScore;
                                  towerVisited = true;
                                }
                                break;
          
          case "farnorth"    : var msg = "NEED TO MAKE LOCATION TEXT! NEED TO STEAL HORSE or NEED ITEM FOR GAME TO GO TO AREA FROM TOWER. UN-MADE LOCATION 7!";
                              updateDisplay(msg)
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
          } else if (currentLocation === 4) {
              currentLocation = 0;
              location_switch("townSquare");
          } else if (currentLocation === 1) {
              currentLocation = 10;
              location_switch("farnorth");
          } else if (currentLocation === 5) {
              currentLocation = 11;
              location_switch("northBar");
          } else if (currentLocation === 11) {
              currentLocation = 12;
              location_switch("seceretMeeting");
          }     else updateDisplay(msg);
      }
      
      function btn_west() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            currentLocation = 2;
            location_switch("barEntrance");
          } else if (currentLocation === 1) {
              currentLocation =7;
              location_switch("tower");
          } else if (currentLocation === 2) {
              currentLocation = 5;
              location_switch("bar");
          } else if (currentLocation === 3) {
              currentLocation = 0;
              location_switch("townSquare");
          } else if (currentLocation === 6) {
              currentLocation = 3;
              location_switch("stallEntrance");
          }    else updateDisplay(msg);
      }

      function btn_east() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            currentLocation = 3;
            location_switch("stallEntrance");
          } else if (currentLocation === 3) {
              currentLocation = 6;
              location_switch("stall");
          } else if (currentLocation === 2) {
              currentLocation = 0;
              location_switch("townSquare");
          } else if (currentLocation === 5) {
              currentLocation = 2;
              location_switch("barEntrance");
          } else if (currentLocation === 7) {
              currentLocation = 1;
              location_switch("leaveCastle");
          }      else updateDisplay(msg);                                      
      }
      
      function btn_south() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            currentLocation = 4;
            location_switch("wall");
          } else if (currentLocation === 1) {
              currentLocation = 0;
              location_switch("townSquare");
          } else if (currentLocation === 10) {
              currentLocation = 1;
              location_switch("leaveCastle");
          } else if (currentLocation === 11) {
              currentLocation = 5;
              location_switch("bar");
          } else if (currentLocation === 12) {
              currentLocation = 11;
              location_switch("northBar");
          }     else updateDisplay(msg);
      }                     
      
      
      // ***********NEED TO MAKE "HELP" FUNCTION ************     
      
      // ***********NEED TO MAKE "INIT" FUNCTION ************  
      
      // *************** CURRENT INVENTORY!!!!!!!!!!!!!!!!!
      
      function init() {
        updateDisplay( "Welcome to A Song of Ice and Fire: Tyrion's Adventure!" 
                       + "\n" 
                       + "\n" 
                       + "Alright Tyrion Lanister, you are hungover/still drunk in the middle of townsquare covered in manure ...again."
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
                         +"\n"
                         +"\n"
                         +"               [14?]- - [15?] - - [17??]"
                         +"\n"  
                         +"                 |        |"
                         +"\n"
                         +"                 |      [16?]"
                         +"\n"
                         +"                 |"
                         +"\n"
                         +"                [10] - - [13?]"
                         +"\n"  
                         +"                 |"
                         +"\n"
                         +"            [7]-[1]"
                         +"\n"
                         +"                 |"
                         +"\n"
                         +"         [12]    |     [8?]"
                         +"\n"
                         +"         [11]    |      |"
                         +"\n"
                         +"         [5][2]-[0]-[3][6]"
                         +"\n"
                         +"                 |      |"
                         +"\n"
                         +"                 |     [9?]"
                         +"\n"
                         +"                [4]"
                         +"\n"  
                         +" ? INDICATE I STILL NEED TO MAKE LOCATIONS"
                         +"\n"
                         +"---------------------------------------------------------")
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
            
 /*       case "take"  : 
          case "t"     :
          case "T"     :
            break;
          */
          
    /*    case "i"
          case "I"
          case "inventory"
            break;
          */ 
          
          case "m"      :
          case "M"      :
          case "map"    : displayMap();
            break;
                    
          
          default      : var msg = "Invalid Command...\"He doesn't like you\" (Luke ignores) \"I don't like you.\" Luke responds \"I'm sorry.\" the fugitive responds \"You'll be dead.\"...theoretical lightsaber to the face for putting in the wrong command.... Enter the command \"help\" for some suggestions.";
                          updateDisplay(msg);
            break;
          }
     }       
                
      function updateDisplay(msg){                                   
        msg = msg 
        var ta = document.getElementById("Textarea");
        ta.value = msg + "\n" + "\n" + ta.value; 
       } 
       