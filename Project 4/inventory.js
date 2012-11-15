//
//      Greg Abbene
//
//     
      var inventory = [];
      
      function take() {
        if (currentLocation === 6) {
          if(inventory.indexOf("Sword!") === -1) {
            inventory.push("Sword!");
            var msg = "You now have a sword...just ignore the manure on it.";
            updateDisplay(msg);
          }
        }else if (currentLocation === 5) {
          if(inventory.indexOf("Wine Flask!") === -1) {
            inventory.push("Wine Flask!");
            var msg = "Thankfully you now have some wine for the road home...it may mean life or death later.";
            updateDisplay(msg);
          }
        }else if (currentLocation === 11) {
          if(inventory.indexOf("Helmet!") === -1) {
            inventory.push("Helmet!");
            var msg = "Woohoo, an alcohol drenched and filthy royal helmet...onto the head it goes.";
            updateDisplay(msg);
          }
        } else {
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

