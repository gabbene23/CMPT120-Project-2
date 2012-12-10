//
//      Greg Abbene
//    Final Project- Due: December 10th 2012
//    
      //Empty Inventory...when taken puts into first "not-occupied" index
      var inventory = [];
 	    inventory[0] = "";
		inventory[1] = "";
		inventory[2] = "";
		inventory[3] = "";
		inventory[4] = "";
		inventory[5] = "";
		inventory[6] = "";
       
		function items(_id, _name, _descrip) {
			this.id		   =_id  //location
			this.name	   =_name
			this.descrip   =_descrip
			this.wasTaken  = false;
		
			this.toString = function items() {
				var retVal = "";
				retVal = "[Item]"                       + "\n"   + 
				"id:" + this.id                        + "\n"   +
				"name:" + this.name                    + "\n"   +
				"description:" + this.description      + "\n"   ;
	  			return retVal;
		}
      }
	var arrayItem	= new Array ();
		arrayItem[0] = new items (0, "Sword!"  , "You obtained a SWORD!..just ignore the manure on it");	  
		arrayItem[1] = new items (1, "Shield!" , "You obtained a SHIELD!"); 
		arrayItem[2] = new items (2, "Wine!"   , "Sweet, WINE! Can't go home without it..literally");
		arrayItem[3] = new items (3, "Helmet!" , "You obtained a HELMET!"); 
		arrayItem[4] = new items (4, "Horse!"  , "You successfully traded your HELMET for a much needed HORSE!");
		arrayItem[5] = new items (5, "Coins!"  , "Nice,you steal from a thief..and earn da loot of some COINS!");
		arrayItem[6] = new items (6, "Pride!"  , "You successfully bribe the guard with your COINS and in return you get some PRIDE!");

	  //Take and/or trade function
      function take() {
		if(locs[currentLocation].item !== null) {
				if(inventory.indexOf(locs[currentLocation].item) === -1) {
					if(locs[currentLocation].item === arrayItem[4]) {
						if(inventory[3] === arrayItem[3]) {
							inventory[4] = arrayItem[4];
							updateDisplay(inventory[4].descrip);
							locs[currentLocation].item = null;					
							currentScore += 10;
							document.getElementById("score").innerHTML = currentScore;
							inventory[3] = "";
						}else {
						updateDisplay("You need a HELMET to trade!");
						}
					}
				else if (locs[currentLocation].item === arrayItem[6]) {
						if(inventory[5] === arrayItem[5]) {
							inventory[6] = locs[currentLocation].item;
							updateDisplay(inventory[6].descrip);
							locs[currentLocation].item = null;					
							currentScore += 40;
							document.getElementById("score").innerHTML = currentScore;
							inventory[5] = "";
						}else
						updateDisplay("You need COINS to trade!"); 
					}  
				else { 
					loc = locs[currentLocation].item.id;
					inventory[loc] = locs[currentLocation].item;
					updateDisplay(locs[currentLocation].item.descrip); 
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
        for(i = 0; i < inventory.length; i++) {
			if(inventory[i] !== "") {
				msg += inventory[i].name + "\n";
			}
		}
		updateDisplay(msg);
	  } 