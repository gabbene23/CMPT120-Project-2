//
//      Greg Abbene
//    Final Project- Due: December 10th 2012
//    
    //****Item Prototype*****
      
      var inventory = [];
	/*  inventory[0] = "";
		inventory[1] = "";
		inventory[2] = "";
		inventory[3] = "";
		inventory[4] = "";
		inventory[5] = "";
		inventory[6] = "";
      
	function item(_id, _name, _descrip) {
		this.id		 =_id
		this.name	 =_name
		this.descrip =_decrip
		
		this.toString = function() {
			var retVal = "";
			retVal = "[Item]"                       + "\n"   + 
             "id:" + this.id                        + "\n"   +
             "name:" + this.name                    + "\n"   +
             "description:" + this.description      + "\n"   ;
	  
			return retVal;
		}
      }  

	  var descrip= "";
	
	  var items [];
	  	items[0]  = new item ( 0, "Sword!", descrip);
		items[0].descrip = "You obtained a SWORD!, just ignore the manure on it";
	  
	    items[1]  = new item ( 1, "Shield!", descrip);
		items[1].descrip = "You obtained a SHIELD!";
		
		items[2]  = new item ( 2, "Wine!" , descrip);
		items[2].descrip = "Sweet, WINE! Can't go home without it..literally";
		
		items[3]  = new item ( 3, "Helmet!" , descrip);
		items[3].descrip = "You obtained a HELMET!";
		
		items[4]  = new item ( 4, "Horse!" , descrip);
		item[4].descrip = "You successfully traded your HELMET for a much needed HORSE!";
		
		items[5]  = new item ( 5, "Coins!" , descrip);
		item[5].descrip = "Nice,you steal from a thief..and earn da loot of some COINS!";
		 
		items[6]  = new item ( 6, "Pride!" , descrip);
        items[6].descrip = "You successfully bribe the guard with your COINS and in return you get some PRIDE!";  
		 */
      function take() {
		if(locs[currentLocation].item != null) {
				if(inventory.indexOf(locs[currentLocation].item) === -1) {
					if(locs[currentLocation].item === "Horse!") {
						//if(inventory[3] = "Helmet!") {
						if(inventory.indexOf("Helmet!") !== -1) {
							//inventory[4] = item[3].name ??
							inventory.push(locs[currentLocation].item);
							updateDisplay("You successfully traded your HELMET for a "+ locs[currentLocation].item);
							//updateDisplay(item[3].desrip);
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
				else { //if (locs[currentLocation].item === "Shield!") {
					// if inventory[1]=item[1] shield
					// if inventory[2]=item[2] wine
					// if inventory[3]=item[3] helmet
					// if inventory[4]=item[4] horse
					// if inventory[5]=item[5] coin
					// if inventory[6]=item[6] pride
					inventory.push(locs[currentLocation].item);
					updateDisplay("You obtained "+ locs[currentLocation].item); //can get rid of once prototype works 
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
      