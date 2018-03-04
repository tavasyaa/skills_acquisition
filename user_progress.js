const form = document.querySelector('form.comment-update-form1');
const ul = document.querySelector('p.input_comment');
// const button = document.querySelector('button');
const input = document.getElementById('comment');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('p');
  var str = '<b>Chris: </b>' + text;
  li.insertAdjacentHTML('beforeend',str)
  ul.prepend(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

// button.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }
// });

const form1 = document.querySelector('form.comment-update-form2');
const ul1 = document.querySelector('p.input_comment2');
// const button1 = document.querySelector('button');
const input1 = document.getElementById('comment2');
let itemsArray1 = localStorage.getItem('items1') ? JSON.parse(localStorage.getItem('items1')) : [];

localStorage.setItem('items1', JSON.stringify(itemsArray1));
const data1 = JSON.parse(localStorage.getItem('items1'));

const liMaker1 = (text) => {
  const li1 = document.createElement('p');
  var str = '<b>Chris: </b>' + text;
  li1.insertAdjacentHTML('beforeend',str)
  ul1.prepend(li1);
}

form1.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray1.push(input1.value);
  localStorage.setItem('items1', JSON.stringify(itemsArray1));
  liMaker1(input1.value);
  input1.value = "";
});

data1.forEach(item => {
  liMaker1(item);
});

// button1.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul1.firstChild) {
//     ul1.removeChild(ul1.firstChild);
//   }
// });
