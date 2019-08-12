//API

var keyCode = 'b37ed9c772d940c2ace3d420fa4a72f3';
var key = '?apiKey='+keyCode;

function loadHeadlinesByCategory(category){
	var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&category='+category;
	fetch(articlesURL)
		.then( res=>res.json())
		.then((data)=>{
			var articles = data.articles;
			console.log(articles);
		})
}

function loadHeadlinesByTerm(term){
	var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&q='+term;
	fetch(articlesURL)
		.then( res=>res.json())
		.then((data)=>{
			var articles = data.articles;
			console.log(articles);
		})
}

// testing 
loadHeadlinesByCategory('business');
loadHeadlinesByTerm('oil');

















