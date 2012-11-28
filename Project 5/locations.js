//
//              Greg Abbene  
//      Project 5 -Due: November 28th 2012
//
      
// Location prototype
function locale(_id, _name, _description, _item) {
   this.id            = _id;
   this.name          = _name;
   this.description   = _description;
   this.item          = _item;   
   this.required      = null;
   this.wasVisited	  = false;
   
   this.toString = function() {
    var retVal = "";
    retVal = "[Location]"                           + "\n"   + 
             "id:" + this.id                        + "\n\n" +
             "name:" + this.name                    + "\n"   +
             "description:" + this.description      + "\n"   +
             "item:" + this.item                    + "\n"   ;
    return retVal;
   }
}   

var description = "";
var item = null;
var locs = [];
	locs[0]  = new locale ( 0, "Town Square", description, item);
	locs[0].description = "You are in the starting location, Town Square.";
	locs[0].wasVisited = true;
	
	locs[1]  = new locale ( 1, "North of Castle ", description, item);
	locs[1].description = "You slowly wobble NORTH of the castle, but you should explore the castle to make sure you get all the crucial items...To the WEST there is a tower with a pissed off soldier and a horse tied to it, Kings Landing(Home) is NORTH";
	
	locs[2]   = new locale ( 2, "Entrance of Stumble Inn", description, item);
	locs[2].description = "You're at the opened-entrance of the town Bar (Stumble INN), you seriously need some wine...Go WEST to enter the bar.";
	
	locs[3]   = new locale ( 3, "Entrance of Stall", description, item);
	locs[3].description = "You are at the opened and smelly entrance of a stall. Please go EAST to enter the stall.";
	
	locs[4]   = new locale ( 4, "South Wall", description, item);
	locs[4].description = "There appears to be a stone wall there, grow 25 feet then see if you can climb that. You'll get some points for the effort though...";
	
	locs[5]   = new locale ( 5, "BAR!", description, "Wine!");
	locs[5].description = "Ah back where you feel comfortable, the good ole' bar. Check if there is some leftover WINE on the counter. Also, is that your HELMET in the NORTH end of the bar?";
	
	locs[6]   = new locale ( 6, "Stall", description, "Sword!");
	locs[6].description = "You go back into your most recent resting place, the comfy (horse-free) horse stall, is there something shiny in that manure?";
	
	locs[7]   = new locale ( 7, "Tower", description, "Horse!");
	locs[7].description = "You're commanded to stop as soon as you walk into the tower by an overly aggressive soldier/guard. You need his HORSE to progress through the game...but you need to trade something valuable!!";
	
	locs[8]   = new locale ( 8, "Girl", description, item);
	locs[8].description = "You recognize that passed-out girl...O yeah you had a drinking contest with her last night, I guess you won. You get +5 points for being a noble visitor!!";
	
	locs[9]   = new locale ( 9, "North of Stall Entrance", description, "Shield!");
	locs[9].description = "You were everywhere last night, is that your SHIELD on the ground over there?";
	
	locs[10]  = new locale (10, "Far North", description, item);
	locs[10].required = "Horse!";
	locs[10].description = "You daze out, and ride north for a long-time...its boring stuff, but you feel like a genius for solving that puzzle.";
	
	locs[11]  = new locale (11, "North Table in Bar", description, "Helmet!");
	locs[11].description = "You find a passed out townsman using your HELMET as cup....Also, you find yourself curious as too what is through that slightly opened door NORTH of you..";
	
	locs[12]  = new locale (12, "Seceret Meeting", description, item);
	locs[12].description = "INSERT DEATH SEQUENCE, BUT NEED TO FIGURE OUT HOW TO INITIATE GAMEOVER. For now you're Lucky....just go south.";