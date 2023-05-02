const div = document.getElementById('flora')

function renderFlora(database_flora){
   return `
   <div class="flora-item">
     <img class="flora-img" src="${database_flora.img}"/>
      <h1 class='title-flora'>${database_flora.title}</h1>
      <p class="flora-des">${database_flora.description}</p>
   </div>
   ` 
}

function ShowItem(database_flora) {
   let items = []
   database_flora.map((item)=>{
      items.push(renderFlora(item))
   })
   div.innerHTML = items.join('')
}

ShowItem(database_flora)