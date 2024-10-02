// INDEX.JS

// html (por defecto)
document.querySelector('#content').append(divHome, divImgHome)
// btn-home
document.querySelector('#btn-home').addEventListener('click', ()=>{
    if (!document.querySelector('.div-img-home')) {
    document.querySelector('#content').append(divHome, divImgHome)
}
if (divMenu) divMenu.remove()
if (divPlato1) divPlato1.remove()
if (divPlato2) divPlato2.remove()
if (divPlato3) divPlato3.remove()
    if (divContacto) divContacto.remove()
})
// btn-menu
document.querySelector('#btn-menu').addEventListener('click', ()=>{
       if (!document.querySelector('.div-img-plato-1'))  {
    document.querySelector('#content').append(divMenu, divPlato1, divPlato2, divPlato3)
}
if (divHome) divHome.remove()
if (divImgHome) divImgHome.remove()
    if (divContacto) divContacto.remove()
})
// // btn-contacto
document.querySelector('#btn-contacto').addEventListener('click', ()=>{
    if (!document.querySelector('.div-contacto'))  {
    document.querySelector('#content').append(divContacto)
}
if (divHome) divHome.remove()
if (divImgHome) divImgHome.remove()
    if (divMenu) divMenu.remove()
    if (divPlato1) divPlato1.remove()
    if (divPlato2) divPlato2.remove()
    if (divPlato3) divPlato3.remove()
})

