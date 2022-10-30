/* navBar */
let currentWidth = $('#navbarList').outerWidth();
let meals = [];

let indexmeal = '';
$('#btnOpenNav').click(function () {
   if ($('#openNav').css('left') == '0px') {
      $('#openNav').animate({ 'left': currentWidth }, 1000)
      $('#navbarList').animate({ 'left': 0 }, 1000)
      $('.nav-category').animate({ paddingTop: "20px" }, 1200)
      $('#btnOpenNav').removeClass('fa-align-justify').addClass(' fa-align-justify fa-times')
   } else {
      $('#openNav').animate({ 'left': 0 }, 1000)
      $('#navbarList').animate({ 'left': -currentWidth }, 1000)
      $('.nav-category').animate({ paddingTop: "-20px" }, 1200)
      $('#btnOpenNav').removeClass('fa-align-justify fa-times').addClass('fa-align-justify')
   }
});



main()
async function main() {
   await getApi()
   await displayApi()
}

async function getApi() {
   var pMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
   var sMeals = await pMeals.json();
   meals = sMeals.meals
   console.log(meals)
}

async function displayApi() {
   let cartona = ""
   for (var i = 0; i < meals.length; i++) {
      cartona += `
   <div class="col-md-6 col-lg-3 ">
      <div class="   position-relative meal-item ">
               <img src="${meals[i].strMealThumb}" class="  w-100" alt="">
               <div class='shadow-img d-flex justify-content-center align-content-center'>
               <h2 class="text-black text-center name-meal">${meals[i].strMeal}</h2>
               </div>
         </div>
      </div>
   </div>`
   }

   $('#disPlay').html(cartona)
   $('.shadow-img').click(function () {
      let name = $(this).children().text();
      console.log(name)
      getInfo(name)
   }
   )
}
/* Info */
async function getInfo(i) {
   var apiData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${i}`)
   var currentApi = await apiData.json();
   console.log(currentApi.meals[0])
   let meals = currentApi.meals[0]

   displayClickMeal(i, meals.strInstructions, meals.strArea, meals.strCategory
      , meals.strMealThumb, meals.strTags, meals.strSource, meals.strYoutube)
}

async function displayClickMeal(name, strInstructions, Area, Category, image, tage, Sourse, Youtube) {

   let cartona = `
   <section class="container w-75">
      <div class=" row gy-4">
         <div class="img col-md-4">
         <img class="w-100" src="${image}" alt="">
         <br>
         <h2 class="text-white mt-3">${name}</h2>
      </div>
<div class="info text-white col-md-8">
<div class="w-100">
<h2>Instructions</h2>
<p>${strInstructions}</p></div>
<br>
<p>Area : <span>${Area}</span></p>
<p>Category : <span>${Category}</span></p>
<h2>Recipes :</h2>
<ul></ul>

<h2 class="my-3">Tags :</h2>
<p class="my-3 m-2 p-1 text-danger btn btn-light rounded">${tage}</p>
<br><br><br>
<button  type="button" class="btn btn-success"><a class="link-light text-decoration-none "href="${Sourse}">Sourse</a></button>
<buttontype="button" class="btn btn-danger"><a  class="link-light text-decoration-none" href="${Youtube}">Youtube</a></button>
</div>
</div>

   </div>
   </section>`

   $('#disPlay').html('')
   $('#dispalyDetals').html(cartona)
}
