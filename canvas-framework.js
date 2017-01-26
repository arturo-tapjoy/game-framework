Rectangle = function(x, y, w, h) {


	if (x == null || y == null || w == null || h == null) {
		alert("You must pass in all the veriables for a rectange: (x, y, width, height)");
		
		var errorMsg = "The following are not provided:";
		if (x == null) {
			errorMsg += " 'x' ";
		}
		if (y == null) {
			errorMsg += " 'y' ";
		}
		if (w == null) {
			errorMsg += " 'width' ";
		}
		if (h == null) {
			errorMsg += " 'height'";
		}
		
		console.log(errorMsg);
		throw new Error(errorMsg);
	}	


};