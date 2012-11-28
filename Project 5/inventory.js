//
//      Greg Abbene
//    Project 5- Due: November 28th 2012
//    

      
      var inventory = [];
      
      function take() {
		if(locs[currentLocation].item != null) {
				if(inventory.indexOf(locs[currentLocation].item) === -1) {
					if(locs[currentLocation].item === "Horse!") {
						if(inventory.indexOf("Helmet!") !== -1) {
							inventory.push(locs[currentLocation].item);
							updateDisplay("You obtained "+ locs[currentLocation].item);
							locs[currentLocation].item = null;					
							currentScore += 10;
							document.getElementById("score").innerHTML = currentScore;
							inventory.splice(inventory.indexOf("Helmet!"),1);
						} else
							updateDisplay("You need a HELMET to trade!");
					}
					else {
						inventory.push(locs[currentLocation].item);
						updateDisplay("You obtained "+ locs[currentLocation].item);
						locs[currentLocation].item = null;					
						currentScore += 10;
						document.getElementById("score").innerHTML = currentScore;
					}						
				}
		}
		else {
			updateDisplay("Theres no item here");
		}
	  }	
		
      
      
      function showInv() {
		var msg = "Inventory Contents: ";
        for(i = 0; i < inventory.length; i++)
          msg += inventory[i] + "\n";
          updateDisplay(msg);
      }
      