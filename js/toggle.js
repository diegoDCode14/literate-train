var s1=document.getElementById('s1');
var s2=document.getElementById('s2');
var s3=document.getElementById('s3');
var r1=document.getElementById('r1');
var r2=document.getElementById('r2');
var r3=document.getElementById('r3');
var l1=document.getElementById('l1');
var l2=document.getElementById('l2');
var l3=document.getElementById('l3');
var cuerpo=document.getElementById('cuerpo');
var cantidad=document.getElementById('toggle2');
var env1=document.getElementById('envio1');
var env2=document.getElementById('envio2');
var env3=document.getElementById('envio3');
var n1=0;
var n2=0;
var n3=0;
var num=0;
parseInt(num);
num=(n1+n2+n3);
parseInt(s1);
parseInt(s2);
parseInt(s3);
parseInt(r1);
parseInt(r2);
parseInt(r3);
cuerpo.onload=function(){
  cantidad.innerHTML=num;
}
r1.addEventListener('click',function(){
parseInt(n1=n1-1);
l1.innerHTML=n1;
});
s1.addEventListener('click',function(){
  parseInt(n1=n1+1);
  l1.innerHTML=n1;
});
r2.addEventListener('click',function(){
parseInt(n2=n2-1);
l2.innerHTML=n2;
});
s2.addEventListener('click',function(){
  parseInt(n2=n2+1);
  l2.innerHTML=n2;
});
r3.addEventListener('click',function(){

parseInt(n3=n3-1);
l3.innerHTML=n3;
});
s3.addEventListener('click',function(){
  parseInt(n3=n3+1);
  l3.innerHTML=n3;
});
env1.addEventListener('click',function(){
  cantidad.innerHTML=num;
});
env2.addEventListener('click',function(){
  cantidad.innerHTML=num;
});
env3.addEventListener('click',function(){
  cantidad.innerHTML=num;
});
