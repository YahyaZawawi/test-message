
//here we select every class using querySelector
let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
//this funtction well add a class called active on .click event
toggle.onclick = function(){

//.classList to add the class we want (active) to the elemnt
  toggle.classList.toggle('active');
  topbar.classList.toggle('active');
  navigation.classList.toggle('active');
  main.classList.toggle('active');
}
