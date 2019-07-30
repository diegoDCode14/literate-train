var buscador=document.getElementById('buscar');
var btnBuscar=document.getElementById('btnBuscador');
var popup2=document.getElementById('popup2');
var overlay2=document.getElementById('overlay2');
var cerrar2=document.getElementById('btn-cerrar-popup2');
var termin=document.getElementById('termino');
var label=document.getElementById('error');

btnBuscador.addEventListener('click',function(){
  if(buscador.value=="Muebles" || buscador.value=="muebles"){
      location.href="muebles.html";
  }else if(buscador.value=="Electrónicos" || buscador.value=="electrónicos" || buscador.value=="electronicos"
  || buscador.value=="Electronicos"){
      location.href="electro.html";
}else if (buscador.value=="Moda" || buscador.value=="moda"){
  location.href="moda.html";
}else if(buscador.value=="Lectura" || buscador.value=="lectura"){
  location.href="lectura.html"
}else{
    overlay2.classList.add('active');
    popup2.classList.add('active');
    label.innerHTML="["+buscador.value+"]";
}
});
cerrar2.addEventListener('click',function(){
  overlay2.classList.remove('active');
  popup2.classList.remove('active');
  buscador.value="";
});
