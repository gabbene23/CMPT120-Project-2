//
//              Greg Abbene  
//      Final Project- Due: December 10th 2012
//

var NORTH = 0;
var SOUTH = 1;
var EAST  = 2;
var WEST  = 3;

var nav = new Array( // LOCDIR  N0  S1  E2  W3
					    /*0*/  [ 1,  4,  3,  2],
					    /*1*/  [10,  0, -1,  7],
					    /*2*/  [-1, -1,  0,  5],
					    /*3*/  [ 9,  8,  6,  0],
					    /*4*/  [ 0, -1, -1, -1],
					    /*5*/  [11, -1,  2, -1],
					    /*6*/  [-1, -1, -1,  3],
					    /*7*/  [-1, -1,  1, -1],
					    /*8*/  [ 3, -1, -1, -1],
					    /*9*/  [-1,  3, -1, -1],
					    /*10*/ [-1,  1, -1, 13],
					    /*11*/ [12,  5, -1, -1],
					    /*12*/ [-1, -1, -1, -1],
						/*13*/ [14, -1, 10, -1],
						/*14*/ [-1, 13, 15, -1],
						/*15*/ [-1, -1, -1, -1]
		  );
		   
function displayArray(array2display) {
  for (var i=0; i < array2display.length; i++) {
    updateDisplay(i + ":" + array2Display[i]);
  }
}

function move(direction) {		
	moveCount = moveCount + 1;

	var newLocation = nav[currentLocation][direction];
	if (newLocation === 13 && (inventory.indexOf(locs[newLocation].required) === -1 || inventory.indexOf(locs[newLocation].requiredToo) === -1)) {
		gameOver(); 
	} else if (newLocation !== -1 && (locs[newLocation].required === null || inventory.indexOf(locs[newLocation].required) !== -1)) { 
		currentLocation = newLocation;
		displayNewLocation();
		if(!locs[currentLocation].wasVisited) {
			currentScore += 5;
			document.getElementById("score").innerHTML = currentScore;		
			locs[currentLocation].wasVisited = true;
		}
	} 
		else {
		updateDisplay("You cannot go that way.");
		}
	if(nav[currentLocation][NORTH] !== -1) {
		document.getElementById("btnNorth").style.visibility="visible";
	}else {
		document.getElementById("btnNorth").style.visibility="hidden";
	 }
	if(nav[currentLocation][SOUTH] !== -1) {
		document.getElementById("btnSouth").style.visibility="visible";
	}else {
		document.getElementById("btnSouth").style.visibility="hidden";
	 }
	if(nav[currentLocation][EAST] !== -1) {
		document.getElementById("btnEast").style.visibility="visible";
	} else {
		document.getElementById("btnEast").style.visibility="hidden";	
	 }
	if(nav[currentLocation][WEST] !== -1) {
		document.getElementById("btnWest").style.visibility="visible";
	}else {
		document.getElementById("btnWest").style.visibility="hidden";

var noLocs  = true;
	for(i = 0; i < nav[currentLocation].length; i++) {
		if(nav[currentLocation][i] !== -1)
			noLocs = false;
   }
   
var noLocs2 = true;
	if((noLocs) && (newLocation !== 15)) {
		gameOver();
   }else if ((noLocs2) && (newLocation === 15)){
		victory();
   }
  }    
}

function displayNewLocation() {
		updateDisplay(locs[currentLocation].description);
}