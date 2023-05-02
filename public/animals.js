// const div2 = document.getElementById('animals')

// function renderAnimals(database_animals){
//    return `
//    <div class="flora-item">
//      <img width="200px" height="200px" class="flora-img" src="${database_animals.img}"/>
//       <h1 class='title-flora'>${database_animals.title}</h1>
//       <p class="flora-des">${database_animals.des}</p>
//    </div>
//    ` 
// }

// function ShowItemAnimal(database_animals) {
//    let items = []
//    database_animals.map((item)=>{
//       items.push(renderAnimals(item))
//    })
//    div2.innerHTML = items.join('')
// }

// ShowItemAnimal(database_animals)

const div2 = document.getElementById('animals')

function renderAnimals(database_animals) {
   return `
   <div class="flora-item">
     <img width="200px" height="200px" class="flora-img" src="${database_animals.img}"/>
      <h1 class='title-flora'>${database_animals.title}</h1>
      <p class="flora-des">${database_animals.des}</p>
   </div>
   `
}

function ShowItemAnimal() {
   let items = []
   // database_animals.map((item) => {
   //    items.push(renderAnimals(item))
   // })
   // div2.innerHTML = items.join('')
   const animalsData = JSON.parse(localStorage.getItem('animals'))
   animalsData.map((item)=> {
      items.push(renderAnimals(item))
   })
   div2.innerHTML = items.join('')
   console.log(animalsData);

}
ShowItemAnimal()