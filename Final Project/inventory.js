//
//      Greg Abbene
//    Final Project- Due: December 10th 2012
//    
      //Empty Inventory...when taken puts into first "not-occupied" index
      var inventory = [];

	  //Take and/or trade function
      function take() {
		if(locs[currentLocation].item != null) {
				if(inventory.indexOf(locs[currentLocation].item) === -1) {
					if(locs[currentLocation].item === "Horse!") {
						if(inventory.indexOf("Helmet!") !== -1) {
							inventory.push(locs[currentLocation].item);
							updateDisplay("You successfully traded your HELMET for a "+ locs[currentLocation].item);
							locs[currentLocation].item = null;					
							currentScore += 10;
							document.getElementById("score").innerHTML = currentScore;
							inventory.splice(inventory.indexOf("Helmet!"),1);
						}else
						updateDisplay("You need a HELMET to trade!");

					}
				else if (locs[currentLocation].item === "Pride!") {
						if(inventory.indexOf("Coins!") !== -1) {
							inventory.push(locs[currentLocation].item);
							updateDisplay("You successfully traded your COINS for some "+ locs[currentLocation].item);
							locs[currentLocation].item = null;					
							currentScore += 40;
							document.getElementById("score").innerHTML = currentScore;
							inventory.splice(inventory.indexOf("Coins!"),1);
						}else
						updateDisplay("You need COINS to trade!"); 
					}  
				else { 
					inventory.push(locs[currentLocation].item);
					updateDisplay("You obtained "+ locs[currentLocation].item); 
					locs[currentLocation].item = null;					
					currentScore += 10;
					document.getElementById("score").innerHTML = currentScore;
					}						
				}
		}else {
		updateDisplay("Theres no item here, or you already picked it up.");
		}
	  }
         
      function showInv() {
		var msg = "Inventory Contents:" + "\n";
        for(i = 0; i < inventory.length; i++)
          msg += inventory[i] + "\n";
          updateDisplay(msg);
      }
      