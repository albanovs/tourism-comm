const addAnimal = document.getElementById('add')
const news = document.getElementById('new_animals')


// function addFlora(id, title, img, des) {
//     const newAnimal = {
//         id: id,
//         title: title,
//         img: img,
//         des: des,
//     };

//     database_animals.push(newAnimal);
//     localStorage.setItem('flora', JSON.stringify(database_animals));

//     // обновление списка на странице
//     updateList();
// }


addAnimal.addEventListener('click', () => {
    const newTitle = document.getElementById('animals_title').value
    const newImg = document.getElementById('animals_img').value
    const newDescr = document.getElementById('animals_des').value

    const newAnimal = {
        id: database_animals.length + 1,
        title: newTitle,
        img: newImg,
        des: newDescr,
        isAdded: true // добавленное свойство
    };
    database_animals.push(newAnimal);

    document.getElementById('animals_title').value = ''
    document.getElementById('animals_img').value = ''
    document.getElementById('animals_des').value = ''

    localStorage.setItem('animals', JSON.stringify(database_animals));
    updateAnimalList()

})


const storedAnimal = localStorage.getItem('animals');

const database_animall = storedAnimal ? JSON.parse(storedAnimal) : [];

// function deleteItem(id) {
//     const database = JSON.parse(localStorage.getItem('animals')) || [];
//     const index = database.findIndex(item => item.id === id);
//     if (index !== -1) {
//         database.splice(index, 1);
//         localStorage.setItem('animals', JSON.stringify(database));
//     }
// }

function deleteItem(id) {
    const database = JSON.parse(localStorage.getItem('animals')) || [];
    const index = database.findIndex(item => item.id === id);
    if (index !== -1) {
      const item = database[index];
      database.splice(index, 1);
      localStorage.setItem('animals', JSON.stringify(database));
      const list = document.getElementById('new_animals');
      const listItem = list.querySelector(`[key="${id}"]`);
      if (listItem) {
        list.removeChild(listItem);
      }
    }
  }
  

function updateAnimalList() {
    const storedData = JSON.parse(localStorage.getItem('animals')) || [];
    console.log(storedData);
    const dataID = storedData.filter(obj => obj.id > 6)
    console.log(dataID)

    news.innerHTML = '';

    dataID.forEach((flora) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('key', `${flora.id}`)
        listItem.innerHTML += `
            <img width="100px" src="${flora.img}" alt="${flora.title}">
            <h3>${flora.title}</h3>
            <button onclick="deleteItem(${flora.id})">Удалить</button>
          `;
        news.append(listItem);
    });
}

updateAnimalList()





