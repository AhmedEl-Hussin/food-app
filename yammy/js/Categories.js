/* Categories */


// let meals = [];
// let mealsShN=[];
// let mealsShL=[];
// let Tags = [];




$('#Categories').click( function () {

    $('#openNav').animate({ 'left': 0 }, 1000)
    $('#navbarList').animate({ 'left': -currentWidth }, 1000)
    $('.nav-category').animate({ paddingTop: "-20px" }, 1200)
    $('#btnOpenNav').removeClass('fa-align-justify fa-times').addClass('fa-align-justify')
    getCategories()
    let cartona = `
    <section class=" w-100" >
 
          <div class="container"> 
          <div id="displayCategories"  class="row ">
          </div>
          </div>
 
    </section>
    `
    
    $('#dispalyDetals').html(cartona)
 })
 
 async function getCategories() {
    var apiData = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    var currentApi = await apiData.json();
    let categories = currentApi.categories
    displayCategories(categories)
 }
 
 async function displayCategories(meals){
    let cartona = "";
    for (let i = 0; i < meals.length; i++) {
       cartona += `
       <div class="col-md-6 col-lg-3 ">
          <div class=" position-relative m-3 meal-item ">
                   <img src="${meals[i].strCategoryThumb}" class="  w-100" alt="">
                   <div class='shadow-img '>
                   <div>
                   <h2 class="text-black text-center name-meal text-center">${meals[i].strCategory}</h2>
                   <p class="text-black text-center name-meal">${meals[i].strCategoryDescription}</p>
                   </div>
                   </div>
             </div>
          </div>
       </div>`
       }
 $('#displayCategories').html(cartona);
    
 $('.shadow-img').click(function () {
    let name = $(this).find('h2').text();
    getListCg(name)
 })}
 
 async function getListCg(i) {
    var pList = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${i}`)
    var sList = await pList.json();
    arraylist= sList.meals;
    choosedCategories(arraylist)
 }
 async function choosedCategories(arraylist) {
    let cartona =""
    for (let i = 0; i < arraylist.length; i++) {
    cartona += `
    <div class="col-md-6 col-lg-3 ">
       <div class=" position-relative m-3 meal-item ">
                <img src="${arraylist[i].strMealThumb}" class="  w-100" alt="">
                <div class='shadow-img d-flex justify-content-center align-content-center '>
                <h2 class="text-black text-center name-meal">${arraylist[i].strMeal}</h2>
                </div>
          </div>
       </div>
    </div>`
    }
    
     $('#displayCategories').html(cartona);
       $('.shadow-img').click(function () {
          let name = $(this).children().text();
          getInfo(name)
       }) 
 }