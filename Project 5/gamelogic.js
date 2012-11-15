//
//          Greg Abbene
//    Project 5- Due: November 28th 2012
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
       