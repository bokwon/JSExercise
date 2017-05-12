// Pond Sizes: You have an integer matrix representing a plot of land, where the value at that location represents the height above sea level. A value of zero indicates water. A pond is a region of water connected vertically, horizontally, or diagonally. The size of the pond is the total number of connected water cells. Write a method to compute the sizes of all ponds in the matrix. 

// Result: [2, 4, 1];

(function() {
	var visitedIsland;
	var ponds;
	var pond;

	function insideInput(pond) {
		if (pond >= 0 && pond <= input.length-1) {
			return true;
		} else {
			return false;
		}
	}
	
	function findPond(row, column) {
		var rowOffset =  [-1, -1, -1, 0, 0, 1, 1, 1];
		var columnOffset = [-1, 0, 1, -1, 1, -1, 0, 1];

		for (var i=0; i<rowOffset.length; i++) {
			var left = row + rowOffset[i];
			var right = column + columnOffset[i];
			
			if (insideInput(left) && insideInput(right)) {
				if (visitedIsland[left][right] === false && input[left][right] === 0) {
					pond++;
					visitedIsland[left][right] = true;
					findPond(left, right);
				} else if (visitedIsland[left][right] === false && input[left][right] !== 0) {
					visitedIsland[left][right] = true;
				}
			}
		}
	}

	function pondSizes(input) {	
		visitedIsland = [];
		ponds = [];
		pond = 0;
		
		for (var i=0; i<input.length; i++) {
			var innerArr = [];
			for (var j=0; j<input.length; j++) {
				innerArr.push(false);
			}
			visitedIsland.push(innerArr);
		}

		for (var i=0; i<input.length; i++) {
			for (var j=0; j<input.length; j++) {
				if (visitedIsland[i][j] === false && input[i][j] === 0) {
					pond++;
					visitedIsland[i][j] = true;
					findPond(i, j);  // to check 8 neighbors.
					ponds.push(pond);
					pond = 0;
				} else if (visitedIsland[i][j] === false && input[i][j] !== 0) {
					visitedIsland[i][j] = true;
				}	
			}	
		}
		return ponds;
	}
	
	window.pondSizes = pondSizes;
	
})();

//var input = [
//		[0, 2, 1, 0],
//		[0, 1, 0, 1],
//		[1, 1, 0, 1],
//		[0, 1, 0, 1]
//];