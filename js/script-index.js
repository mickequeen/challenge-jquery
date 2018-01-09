$(document).ready( function(){
  $('.js-back').hide();

  $(function printNews(){
    $('#news').append('NUEVAS RECETAS');
  });
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);


/*
* Función que se encarga de tomar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
  function renderHighlightedRecipes(recipesArray) {
  	for(var i= 0; i<recipesArray.length;i++){
      if(recipesArray[i].highlighted==true){
        renderRecipe(recipesArray[i]);
        }
      }
    }

/*
* Función que se encarga de tomar UNA a una las recetas que tengan
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
  function renderRecipe(recipe) {
  	$("#contRecipes").append(
      "<a class='item-recipe' href='#''><span class='attribution'>" +
      "<span class='title-recipe'> "+ recipe.title + "</span>" +
      "<span class='metadata-recipe'>" +
      "<span class='author-recipe'> " + recipe.source.name + " </span>"+
      "<span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span>" +
      "<img src='img/recipes/640x480/" + recipe.name +".jpg'></a>"
    );
  }
  
  /*
* Función que se encarga de imprimir todas las actividades
*/
  renderActivities(activitiesArray);

  function renderActivities(activitiesArray) {
    console.log('Activities: ', activitiesArray);
    for (var i = 0 ; i< activitiesArray.length ; i++) {
    renderActivity(activitiesArray[i])
    if (activitiesArray.length > 0) {
      $('.wrapper-message').hide()
    }
    }
  }

/*
* Función que se encarga de imprimir una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
  function renderActivity(recipe) {
  
  }
});




