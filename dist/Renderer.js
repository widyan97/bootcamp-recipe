class Renderer { 
    constructor(){
      this.source = $('#recipes-template').html();
      this.template = Handlebars.compile(this.source);
    }
    render(newRecipes){
      $('#recipes-container').empty()
      const newHTML = this.template({ newRecipes });
      $('#recipes-container').append(newHTML);  
    }
  }