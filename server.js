
const express = require('express')
const path = require('path')
const app = express()
const urllib = require('urllib');




app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

 const recipes=[
    {
      ingredients: ['tomato', 'water'],
      title: 'Tomato Soup',
      thumbnail: 'sample.com/image.jpeg',
      href: 'youtube.com/movie'
    }
  ]

app.get('/recipes/:ingredient', function(request, response){
    urllib.request(' https://recipes-goodness.herokuapp.com/recipes/YOUR_INGREDIENT', function ( err, data, res) {
        let result=JSON.parse(data)
        const recipesIng =  recipes[request.params.ingredient]
        const newRecipes = []
        for(let index of result){
            if(index.ingredients == recipesIng){
                newRecipes.push(
                    {

                        title : index.title ,
                        thumbnail: 'sample.com/image.jpeg' ,
                        href :  'youtube.com/movie'
                      
                    })
              
    
            }
          }
          response.send({yourRecipes :  newRecipes })

        });

    })
        


const port = 8080
app.listen(port, function(){
    console.log(`Server is up and running smoothly ${port}`)
})