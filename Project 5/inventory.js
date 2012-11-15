//
//      Greg Abbene
//    Project 5- Due: November 28th 2012
//    
      var swordTaken  = false;
      var wineTaken   = false;
      var helmetTaken = false;
      var horseTaken  = false;
      
      var inventory = [];
      
      function take() {
        if (currentLocation === 6) {
          if(inventory.indexOf("Sword!") === -1 && (!swordTaken)) {
            inventory.push("Sword!");
            var msg = "You now have a sword...just ignore the manure on it.";
            updateDisplay(msg);
            swordTaken = true;
            currentScore += 10;
            document.getElementById("score").innerHTML = currentScore;
          }
        }
        else if (currentLocation === 5) {
          if(inventory.indexOf("Wine Flask!") === -1 && (!wineTaken)) {
            inventory.push("Wine Flask!");
            var msg = "Thankfully you now have some wine for the road home...it may mean life or death later.";
            updateDisplay(msg);
            wineTaken = true;
            currentScore += 10;
            document.getElementById("score").innerHTML = currentScore;
          }
        }
        else if (currentLocation === 11) {
          if(inventory.indexOf("Helmet!") === -1 && (!helmetTaken)) {
            inventory.push("Helmet!");
            var msg = "Woohoo, an alcohol drenched and filthy royal helmet...onto the head it goes.";
            updateDisplay(msg);
            helmetTaken = true;
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
              updateDisplay("You have nothing worth you while to trade for the horse! Or you already traded for a horse.");
          }
        } 
        else {
            var msg = "There is nothing to take here...you fool."
            updateDisplay(msg); 
        }
      } 
      
      function showInv() {
        var msg = "Inventory Contents: ";
        for(i = 0; i < inventory.length; i++)
          msg += inventory[i] + "\n";
          updateDisplay(msg);
      }
      