//
//      Greg Abbene
//    Project 5- Due: November 28th 2012
//    

      
      var inventory = [];
      
      function take() {
		if(locs[currentLocation].item != null) {
				if(inventory.indexOf(locs[currentLocation].item) === -1) {
					inventory.push(locs[currentLocation].item);
					locs[currentLocation].item = null;
					updateDisplay("You now have a " + locs[currentLocation].item + ".");
					currentScore += 10;
					document.getElementById("score").innerHTML = currentScore;
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
      