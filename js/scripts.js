
    // * Author: YOUR  NAME
    // * Assignment: Minor Project – More Street
    // * Student ID: 
    // * Date  : 2015/10/23
    // * Ref: Bootstrap- http://getbootstrap.com/
    //       Font-awesome - http://fortawesome.github.io/Font-Awesome/
    //       j-Query - http://jquery.com/
    //       Google fonts - https://www.google.com/fonts
  



function checkCheck(id, colour) {
	var img = id.src;
	if (img.indexOf(colour + '_checked.png')!=-1) {
		id.src = 'img/' + colour + '_unchecked.png'
	} else {
		id.src = 'img/' + colour + '_checked.png'
	}
}