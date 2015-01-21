function checkCheck(id, colour) {
	var img = id.src;
	if (img.indexOf(colour + '_checked.png')!=-1) {
		id.src = 'img/' + colour + '_unchecked.png'
	} else {
		id.src = 'img/' + colour + '_checked.png'
	}
}