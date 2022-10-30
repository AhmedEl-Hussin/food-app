


$('#Area').click( function () {

    $('#openNav').animate({ 'left': 0 }, 1000)
    $('#navbarList').animate({ 'left': -currentWidth }, 1000)
    $('.nav-category').animate({ paddingTop: "-20px" }, 1200)
    $('#btnOpenNav').removeClass('fa-align-justify fa-times').addClass('fa-align-justify')
    getAreas()
    let cartona = `
    <section class=" w-100" >
 
           <div class="container"> 
           <div id="displayAreas"  class="row ">
           </div>
           </div>
 
 
    </section>
    `
    
    $('#dispalyDetals').html(cartona)
 })
 async function getAreas() {
    var apiData = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    var currentApi = await apiData.json();
    console.log(currentApi)
    let Area = currentApi.meals
    displayArea(Area)
 }
 async function displayArea(Area){
    let cartona = "";
    for (let i = 0; i < Area.length; i++) {
       cartona += `
       <div class="col-md-6 col-lg-3 ">
           <div class="  m-3 meal-item ">
                   <div class="area">
                   <i class="text-center fa-solid w-100 text-danger fa-city fa-3x"></i>
                   <h2 class=" text-white text-center name-meal text-center">${Area[i].strArea}</h2>
                   </div>
                   
               </div>
           </div>
       </div>`
       }
 $('#displayAreas').html(cartona);
 
 $('.area').click(function () {
    let name = $(this).find('h2').text();
    getAreaMeals(name)
 }) }
 
 async function getAreaMeals(name){
    var pMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
    var sMeals = await pMeals.json();
    let AreaMeals = sMeals.meals
    console.log(AreaMeals)
    displayAreaMeals(AreaMeals)
 }
 async function displayAreaMeals(AreaMeals){
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
   
   $('#displayAreas').html(cartona);
      $('.shadow-img').click(function () {
         let name = $(this).children().text();
        getInfo(name) 
      })
       }
 