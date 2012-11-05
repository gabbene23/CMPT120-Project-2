//
//
//      Greg Abbene
//      
//
      var currentScore     = 0;
      var northVisited     = false;  
      var eastVisited      = false;
      var westVisited      = false;
      var southVisited     = false;
      var barVisited       = false;
      var stallVisited     = false;
      var farnorthVisited  = false;
      // var towerVisited  = false; NEED TO MAKE THIS LOCATION AFTER LEAVE CASTLE ****MAKE BUTTON VISIBLE*** GET HORSE AND CANT GET TO 10 UNLESS YOU STEAL HORSE!
      var currentLocation  = 0;
       
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
                                  
           case "bar"         : var msg = "NEED TO MAKE BAR TEXT WHEN I FIGURE OUT HOW TO ADD ITEMS! Please command east to leave.";
                               updateDisplay(msg);
                               document.getElementById("btnNorth").style.visibility="hidden";
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
                               
           case "stall"      : var msg = "You go back into your most recent resting place, the comfy (horse-free) horse stall, is there something in that manure? Go WEST to leave the stall";
                              updateDisplay(msg)
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
          
          case "farnorth"    : var msg = "NEED TO MAKE LOCATION TEXT! NEED TO STEAL HORSE/ NEED ITEM FOR GAME TO GO TO AREA FROM TOWER. UN-MADE LOCATION 7!";
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
          }   else if (currentLocation === 4) {
                currentLocation = 0;
                location_switch("townSquare");
              } else if (currentLocation === 1) {
                  currentLocation = 10;
                  location_switch("farnorth");
                }   else updateDisplay(msg);
      }
      
      function btn_west() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            currentLocation = 2;
            location_switch("barEntrance");
          }   else if (currentLocation === 2) {
                currentLocation = 5;
                location_switch("bar");
              }   else if (currentLocation === 3) {
                    currentLocation = 0;
                    location_switch("townSquare");
                  }   else if (currentLocation === 6) {
                        currentLocation = 3;
                        location_switch("stallEntrance");
                      }   else updateDisplay(msg);
      }

      function btn_east() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            currentLocation = 3;
            location_switch("stallEntrance");
          }   else if (currentLocation === 3) {
                currentLocation = 6;
                location_switch("stall");
               }  else if (currentLocation === 2) {
                    currentLocation = 0;
                    location_switch("townSquare");
                  }   else if (currentLocation === 5) {
                        currentLocation = 2;
                        location_switch("barEntrance");
                      }   else updateDisplay(msg);   
                      
                     
      }
      
      function btn_south() {
        var msg = "You cannot go that way.";
          if (currentLocation === 0) {
            currentLocation = 4;
            location_switch("wall");
          }   else if (currentLocation === 1) {
                currentLocation = 0;
                location_switch("townSquare");
              }   else if (currentLocation === 10) {
                    currentLocation = 1;
                    location_switch("leaveCastle");
                  }   else updateDisplay(msg);
      }                     
      
      
      // ***********NEED TO MAKE "HELP" FUNCTION ************     
      
      // ***********NEED TO MAKE "INIT" FUNCTION ************  
      
      
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
       
