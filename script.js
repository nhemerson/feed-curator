var request = new XMLHttpRequest();

request.open('GET', 'https://raw.githubusercontent.com/nhemerson/feed-curator/main/data_model_MVP.json');

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
	

	for(item in parsedData) {
		
		//Display all the product names
		var url = parsedData[item].url;
		var articles = document.createElement('li');
		articles.innerHTML = url;
		document.body.appendChild(articles);

		//Display all the product images
		var imageUrl = parsedData[item].img_src;
		var images = document.createElement('img');
		images.setAttribute('src', imageUrl);
		document.body.appendChild(images);

	}

	
};

request.send();