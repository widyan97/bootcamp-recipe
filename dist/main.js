const renderer = new Renderer()

const getRecipes= function () {
    let input = $("#ingredient-input").val()

    $.get(`/recipes/${input}`, function (newRecipes) {

        renderer.render(newRecipes.yourRecipes)
    })
}