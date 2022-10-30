

// let meals = [];
let mealsShN=[];
let mealsShL=[];
let Tags = [];


$('#Search').click(function () {

    $('#openNav').animate({ 'left': 0 }, 1000)
    $('#navbarList').animate({ 'left': -currentWidth }, 1000)
    $('.nav-category').animate({ paddingTop: "-20px" }, 1200)
    $('#btnOpenNav').removeClass('fa-align-justify fa-times').addClass('fa-align-justify')

    let cartona = `
    <section class=" w-100" >
        <div class=" d-flex justify-content-between">
            <div class="col-5">
            <input id="searchName" placeholder="Search By Name" type="text" class=" p-2 bg-black text-white inputSearh w-100 ">
        </div>

        <div class="col-5">
            <input id="searchFrtL" placeholder="Search By Frist Letter.." type="text" class=" p-2 bg-black text-white inputSearh w-100 ">
        </div>
        </div>

        <div class="container"> 
        <div id="displaySearch"  class="row ">
        </div>
        </div>

    </section>
    `
    $('#dispalyDetals').html(cartona)
    $('#searchName').keyup(function (a) {
        SearchN(a.target.value)
    })
    $('#searchFrtL').keyup(function (a) {
        SearchL(a.target.value)
    })

})

async function SearchL(i) {
    var apiData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${i}`)
    var currentApi = await apiData.json();
    let meals = currentApi.meals
    desplaySearchL(meals)
}

async function desplaySearchL(meals) {
    let cartona =""
    for (let i = 0; i < meals.length; i++) {
    console.log(meals[i].strMeal)
    cartona += `
    <div class="col-md-6 col-lg-3 ">
        <div class=" position-relative m-3 meal-item ">
                <img src="${meals[i].strMealThumb}" class="  w-100" alt="">
                <div class='shadow-img d-flex justify-content-center align-content-center '>
                <h2 class="text-black text-center name-meal">${meals[i].strMeal}</h2>
                </div>
            </div>
        </div>
    </div>`
    }
    
    $('#displaySearch').html(cartona);
    $('.shadow-img').click(function () {
        let name = $(this).children().text();
        getInfo(name)
    })
} 

async function SearchN(i) {
    var pMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${i}`)
    var sMeals = await pMeals.json();
    let meals = sMeals.meals
    desplaySearchN(meals)
}

async function desplaySearchN(meals) {
    let cartona =""
    for (let i = 0; i < meals.length; i++) {
    cartona += `
    <div class="col-md-6 col-lg-3 ">
        <div class=" position-relative m-3 meal-item ">
                <img src="${meals[i].strMealThumb}" class="  w-100" alt="">
                <div class='shadow-img d-flex justify-content-center align-content-center '>
                <h2 class="text-black text-center name-meal">${meals[i].strMeal}</h2>
                </div>
            </div>
        </div>
    </div>`
    }
    
    $('#displaySearch').html(cartona);
    $('.shadow-img').click(function () {
        let name = $(this).children().text();
        getInfo(name)
    })
}