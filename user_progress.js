const form3 = document.querySelector('form.comment-update-form3');
const ul3 = document.querySelector('p.input_comment3');
// const button = document.querySelector('#button_submit');
const input3 = document.getElementById('comment3');
let itemsArray3 = localStorage.getItem('items3') ? JSON.parse(localStorage.getItem('items3')) : [];
var objDiv = document.getElementById("chatbox3");

localStorage.setItem('items3', JSON.stringify(itemsArray3));
const data3 = JSON.parse(localStorage.getItem('items3'));

if (form3) {
const liMaker3 = (text) => {
  const li3 = document.createElement('p');
  var str = '<b>Chris: </b>' + text;
  li3.insertAdjacentHTML('beforeend',str)
  ul3.append(li3);
}

form3.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray3.push(input3.value);
  localStorage.setItem('items3', JSON.stringify(itemsArray3));
  liMaker3(input3.value);
  input3.value = "";
  objDiv.scrollTop = objDiv.scrollHeight;
});

data3.forEach(item => {
  liMaker3(item);
});
}


const form4 = document.querySelector('form.comment-update-form4');
const ul4 = document.querySelector('p.input_comment4');
// const button1 = document.querySelector('#button_submit2');
const input4 = document.getElementById('comment4');
let itemsArray4 = localStorage.getItem('items4') ? JSON.parse(localStorage.getItem('items4')) : [];
var objDiv2 = document.getElementById("chatbox4");

localStorage.setItem('items4', JSON.stringify(itemsArray4));
const data4 = JSON.parse(localStorage.getItem('items4'));

if (form4){
const liMaker4 = (text) => {
  const li4 = document.createElement('p');
  var str = '<b>Chris: </b>' + text;
  li4.insertAdjacentHTML('beforeend',str)
  ul4.append(li4);
}

form4.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray4.push(input4.value);
  localStorage.setItem('items4', JSON.stringify(itemsArray4));
  liMaker4(input4.value);
  input4.value = "";
  objDiv2.scrollTop = objDiv2.scrollHeight;
});

data4.forEach(item => {
  liMaker4(item);
});
}

