const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('agregar-imagen')
const contenedorlight =document.querySelector('imagen-light')

imagenes.forEach(imagen =>{
  imagen.addEventlistener('click', ()=>{
      alert('auch, me dolio')
  })
})