var fileNum = 0;
function init() {
	var pictures = new Array("./elements.jpg", "./fire.jpg", "./norway.jpg");
	var picsText = "";
	for(var i = 0; i < pictures.length; i++){
		picsText += "<img src=\"" + pictures[i] + "\" height=\"200px\" hspace=\"10\" vspace=\"10\" />"; 
	}
	fileNum = 3;
	document.getElementById("picture-output").innerHTML = picsText;
}

function addRandomFile() {
	var picsText = "";
	if(fileNum == 0){
		picsText += "<img src=\"./elements.jpg\" height=\"200px\" hspace=\"10\" vspace=\"10\" />";
	}
	else if(fileNum == 1){
		picsText += "<img src=\"./fire.jpg\" height=\"200px\" hspace=\"10\" vspace=\"10\" />";
	}
	else if(fileNum == 2){
		picsText += "<img src=\"./norway.jpg\" height=\"200px\" hspace=\"10\" vspace=\"10\" />";
	}
	else if(fileNum == 3){
		picsText += "<img src=\"./Protoss.jpg\" height=\"200px\" hspace=\"10\" vspace=\"10\" />";
	}
	else if(fileNum == 4){
		picsText += "<img src=\"./albumographer-logo.png\" height=\"200px\" hspace=\"10\" vspace=\"10\" />";
	}
	else {
		picsText += "<img src=\"./mistborn.jpg\" height=\"200px\" hspace=\"10\" vspace=\"10\" />";
	}
	fileNum++;
	document.getElementById("picture-output").innerHTML += picsText;

}

function addURLFile() {

}

function deleteFile() {

}

function clearFiles() {
	document.getElementById("picture-output").innerHTML = "";
}

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
  }
