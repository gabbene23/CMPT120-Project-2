//
//          Greg Abbene
//    Final Project- Due: December 10th 2012
//
      var currentScore          = 0;  
      var currentLocation       = 0;
	  var moveCount             = 0;
	  
      function init() {	  
        updateDisplay( "Welcome to A Song of Ice and Fire: Tyrion's Adventure!" 
                       + "\n\n" 
                       + "Alright Tyrion Lanister, you are hungover/still drunk in the middle of Townsquare covered in manure ...again."
                       + "\n\n"
                       + "You seem to have lost a bunch of items."
                       + "\n\n"
                       + "Type in HELP for Commands List....now go home." );
      }
	  
	 function displaySkillRatio() {
		skillRatio = 1.5*currentScore/moveCount
		updateDisplay("Your Skill Ratio is: " + skillRatio.toFixed(4) + "  (A.K.A \"1.5*Score/moves\"). "  +"\n");
     }
	 
	function displayDeathRatio() {
		deathRatio = currentScore*.05/moveCount
		updateDisplay("Your Skill Ratio is: " + deathRatio.toFixed(4) + " (You have no skill since you died...)");
     }
	 
	 //GAME OVER!!!
	 function gameOver() { 
		document.getElementById("txtCommand").disabled="disabled";
		document.getElementById("btnGo").style.visibility = "hidden";
		document.getElementById("btnNorth").disabled="disabled";
		document.getElementById("btnSouth").disabled="disabled";
		document.getElementById("btnEast").disabled="disabled";
		document.getElementById("btnWest").disabled="disabled";
		updateDisplay("Your final score is: " + currentScore +"\n\n");
	    displayDeathRatio();
		updateDisplay("You get brutally murdered...GAMEOVER!!! " + "Please refresh the page to restart the game and if you cannot solve the puzzles I advise you clink the below link for GAME HINTS!!");
	  }	
	  
	  //MADE IT HOME!!!
	  function victory() { 
		document.getElementById("txtCommand").disabled="disabled";
		document.getElementById("btnGo").style.visibility = "hidden";
		document.getElementById("btnNorth").disabled="disabled";
		document.getElementById("btnSouth").disabled="disabled";
		document.getElementById("btnEast").disabled="disabled";
		document.getElementById("btnWest").disabled="disabled";
		var msg = "You made it back to King's Landing...VICTORY!!! " + "Your final score is: " + currentScore + "\n";
		updateDisplay("Please refresh the page to play again! " + "\n");
		displaySkillRatio();
		updateDisplay(msg);
	  }	
	  
      function displayHelp() {
        updateDisplay( "Try commands such as:" + "\n"
                       + "DIRECTIONAL COMMANDS: n, s, e, w... N, S, E, W...NORTH, SOUTH, EAST, WEST....etc"
                       + "\n\n"
                       + "TO TAKE AN ITEM: take, t, T"
                       + "\n\n" 
                       + "TO VIEW MAP: m, M, map"
                       + "\n\n" 
                       + "TO DANCE!!!: d, D, dance" 
                       + "\n\n" 
                       + "TO VIEW INVENTORY: i, I, inventory" 
                       + "\n"
                       + "FOR GAME HINTS CLICK THE LINK UNDER THE SCORE COUNTER!"
                       + "---------------------------------------------------------")
      }
	  
      var hasDanced = false;
	  function playerDances(){
		updateDisplay("You decided to start dancing randomly, cool!");
			if(!hasDanced) {
				currentScore += 2;
				document.getElementById("score").innerHTML = currentScore;		
				hasDanced = true;				
	        }	
	  }	  
	  
      function displayMap() {
            updateDisplay("          This is the Map!  "
                         +"\n"
						 +"     |-------------------------|"
                         +"\n"
                         +"     |     [14] -  - [15]      |"
                         +"\n"
                         +"     |      |                  |"
                         +"\n"
                         +"     |     [13] - [10]         |" 
                         +"\n"  
                         +"     |             |           |"
                         +"\n" 
						 +"     |             |           |"
                         +"\n"  
                         +"     |        [7]-[1]          |"
                         +"\n"
                         +"     |             |           |"
                         +"\n"
                         +"     |     [12]    |  [9]      |"
                         +"\n"
                         +"     |     [11]    |   |       |"
                         +"\n"
                         +"     |     [5][2]-[0]-[3][6]   |"
                         +"\n"
                         +"     |             |   |       |"
                         +"\n"
                         +"     |             |  [8]      |"
                         +"\n"
                         +"     |            [4]          |"
                         +"\n"   
                         +"     |-------------------------|")
      }

      function btn_go_click() {
        var command = document.getElementById("txtCommand");
        switch(command.value){
          case "N"     : 
          case "n"     : 
          case "north" : 
          case "North" : 
          case "NORTH" :move(0);
            break;
            
          case "S"     : 
          case "s"     : 
          case "south" : 
          case "South" : 
          case "SOUTH" : move(1);
            break;
            
          case "E"     : 
          case "e"     : 
          case "east"  : 
          case "East"  : 
          case "EAST"  : move(2);
            break;
            
          case "W"     : 
          case "w"     : 
          case "west"  : 
          case "West"  : 
          case "WEST"  : move(3);
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
          
          case "d"      :
	      case "D"      :
	      case "dance"  : playerDances();
			break;
          
          default      : var msg = "Invalid Command...\"He doesn't like you\" (Luke Skywalker ignores) \"I don't like you.\" Luke responds \"I'm sorry.\" the fugitive responds \"You'll be dead.\"...theoretical lightsaber to the face for putting in the wrong command.... Enter the  \"help\" command for some suggestions.";
                          updateDisplay(msg);
						  //Movement counter adds one if you do bad command..
						  moveCount = moveCount + 1;
            break;
          }
    }
        function updateDisplay(msg){                                   
		    var ta = document.getElementById("Textarea");
		    ta.value = msg + "\n" + "\n" + ta.value;			
        } 