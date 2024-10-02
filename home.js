// HOME.JS

// div-home
const divHome = document.createElement('div')
   divHome.classList.add('div-home')

const h1Home = document.createElement('h1')
   h1Home.classList.add('h1-home')
   h1Home.textContent = 'Restaurante Italiano "LAS MIL DELICIAS"'
   
const pHome = document.createElement('p')
   pHome.classList.add('p-home')
   pHome.textContent = 'Bienvenidos a nuetro reataurante donde probaras los platos más ricos !!!'

   divHome.append(h1Home, pHome)

// div-img-home
const divImgHome = document.createElement('div')
      divImgHome.classList.add('div-img-home')   
const imgHome = document.createElement('img')
      imgHome.src = './img/img-home.jpg'
      imgHome.classList.add ('img-home')

divImgHome.append(imgHome)
   

