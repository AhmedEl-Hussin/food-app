
$('#Ingredients').click( function () {

    $('#openNav').animate({ 'left': 0 }, 1000)
    $('#navbarList').animate({ 'left': -currentWidth }, 1000)
    $('.nav-category').animate({ paddingTop: "-20px" }, 1200)
    $('#btnOpenNav').removeClass('fa-align-justify fa-times').addClass('fa-align-justify')
    getIngredients()
    let cartona = `
    <section class=" w-100" >
 
           <div class="container"> 
           <div id="displayIngredients"  class="row ">
           </div>
           </div>
    </section>
    `
    
    $('#dispalyDetals').html(cartona)
 })

 async function getIngredients() {
    var apiData = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    var currentApi = await apiData.json();
    let Ingredients = currentApi.meals
    displayIngredients(Ingredients)
 }
 
 async function displayIngredients(meals){
    let cartona = "";
    for (let i = 0; i < meals.length; i++) {
       cartona += `
       <div class="col-md-6 col-lg-3 ">
           <div class="  m-3 meal-item ">
                   <div class="area">
                   <i class="fa-solid fa-bowl-food text-success text-center w-100 fa-3x"></i>
                   <h2 class=" text-white text-center name-meal text-center">${meals[i].strIngredient}</h2>
                   </div>
                   
               </div>
           </div>
       </div>`
       }
 $('#displayIngredients').html(cartona);
 
 $('.area').click(function () {
    let name = $(this).find('h2').text();
    getIngredientsMeals(name)
 }) }
 
 async function  getIngredientsMeals(name){
    var pMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
    var sMeals = await pMeals.json();
    let AreaMeals = sMeals.meals
    displayIngredientsMeals(AreaMeals)
 }
 async function displayIngredientsMeals(AreaMeals){
    let cartona = "";
    for (let i = 0; i < AreaMeals.length; i++) {
       cartona += `<div class="col-md-6 col-lg-3 ">
       <div class=" position-relative m-3 meal-item ">
               <img src="${AreaMeals[i].strMealThumb}" class="  w-100" alt="">
               <div class='shadow-img d-flex justify-content-center align-content-center '>
               <h2 class="text-black text-center name-meal">${AreaMeals[i].strMeal}</h2>
               </div>
           </div>
       </div>
   </div>`
   }
   
   $('#displayIngredients').html(cartona);
      $('.shadow-img').click(function () {
         let name = $(this).children().text();
        getInfo(name) 
      })
       }