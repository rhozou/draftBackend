"use strict";

const allArticles = [
    {id:1, author:'Scott', text:'This is my first article', date: new Date(), img: "", comments: []}, 
    {id:2, author:'Max', text:'This is max article', date: new Date(), img: "", comments: []}, 
    {id:3, author:'Lee', text:'This is lee article', date: new Date(), img: "", comments: []}]

const addArticle = (req, res) => {
     const newId = allArticles.length + 1
     const newArticle = {id: newId, author:"Rho", text:req.body.text, date: new Date(), avatar: req.body.img, comments: []}
     allArticles.push(newArticle)
     res.send({articles: [newArticle]})
}

const updateArticle = (req, res) => {
    if (req.params.id){
        allArticles.forEach(function(article){
            if (article.id === req.params.id){
                article.text = req.body.text
            }
        })
    }
}

const getArticles = (req, res) => {
	if(req.params.id){
		res.send({articles: allArticles.filter((article) => {
			return article.id == req.params.id
        })})		
	} else {
		res.send({articles: allArticles})
	}
}

module.exports = app => {
     app.post('/article', addArticle)
     app.get('/articles/:id*?', getArticles)
     app.put('/article/:id', updateArticle)
}