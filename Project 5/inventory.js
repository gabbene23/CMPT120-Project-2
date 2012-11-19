//
//      Greg Abbene
//    Project 5- Due: November 28th 2012
//    
      var swordTaken  = false;
      var wineTaken   = false;
      var helmetTaken = false;
      var horseTaken  = false;
	  var shieldTaken = false;
      
      var inventory = [];
      
      function take() {
		if (currentLocation === 6) {
			if(inventory.indexOf("Sword!") === -1 && (!swordTaken)) {
				inventory.push("Sword!");
				updateDisplay("You now have a sword...just ignore the manure on it.");
				swordTaken = true;
				currentScore += 10;
				document.getElementById("score").innerHTML = currentScore;
			}
        }
        else if (currentLocation === 5) {
			if(inventory.indexOf("Wine Flask!") === -1 && (!wineTaken)) {
				inventory.push("Wine Flask!");
				updateDisplay("Thankfully you now have some wine for the road home...it may mean life or death later.");
				wineTaken = true;
				currentScore += 10;
				document.getElementById("score").innerHTML = currentScore;
			  }
        }
        else if (currentLocation === 11) {
			if(inventory.indexOf("Helmet!") === -1 && (!helmetTaken)) {
				inventory.push("Helmet!");
				updateDisplay("Woohoo, an alcohol drenched and filthy royal helmet...onto the head it goes.");
				helmetTaken = true;
				currentScore += 10;
				document.getElementById("score").innerHTML = currentScore;
			}
        }
		else if (currentLocation === 9) {
			if (inventory.indexOf("Shield!") === -1 && (!shieldTaken)) {
				inventory.push("Shield!");
				updateDisplay("You need to stop dropping things when you drink...this puny shield can only be fit for you.");
				shieldTaken = true;
				currentScore += 10;
				document.getElementById("score").innerHTML = currentScore;
		    }
		}	
        else if (currentLocation === 7) {
			if(inventory.indexOf("Horse!") === -1 && inventory.indexOf("Helmet!") === 1 && (!horseTaken)) { 
				inventory.pop("Helmet!");
				inventory.push("Horse!");
				updateDisplay("You trade your nasty helmet for a horse...thank god you didn't have to trade your wine.");
				horseTaken = true;
				currentScore += 10;
				document.getElementById("score").innerHTML = currentScore;

            }
			else if (inventory.indexOf("Helmet!") === -1) {
				updateDisplay("You have nothing worth you while to trade for the horse!HINT***FIND YOUR HELMET***HINT...Or you already traded for a horse.");
            }
        } 
        else {
            updateDisplay("There is nothing to take here...you fool."); 
        }
      } 
      
      function showInv() {
		var msg = "Inventory Contents: ";
        for(i = 0; i < inventory.length; i++)
          msg += inventory[i] + "\n";
          updateDisplay(msg);
      }
      