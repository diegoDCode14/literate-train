var overlay=document.getElementById('overlay');
var cerrar=document.getElementById('btn-cerrar-popup');
var popup=document.getElementById('popup');
var cuerpo=document.getElementById('cuerpo');
var titulo=document.getElementById('logo');
/*boton*/
cuerpo.onload=function(){
  titulo.classList.add('active');
}
var abrir=document.getElementById('btn-gallery');
abrir.addEventListener('click',function(){
  overlay.classList.add('active');
  popup.classList.add('active');
});
cerrar.addEventListener('click',function(){
  overlay.classList.remove('active');
  popup.classList.remove('active');
});
