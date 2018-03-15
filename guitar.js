var postcount = 0;
const form3 = document.querySelector('form.post-update2');
const ul3 = document.querySelector('div.input_post2');
// const button2 = document.querySelector('button.button_submit2');
const input3 = document.getElementById('post3');
const inputtitle3 = document.getElementById('post3title');
let itemsArray3 = localStorage.getItem('post_item2') ? JSON.parse(localStorage.getItem('post_item2')) : [];

localStorage.setItem('post_item2', JSON.stringify(itemsArray3));
const data3 = JSON.parse(localStorage.getItem('post_item2'));

if (form3){
const liMaker3 = (text) => {
  const li3 = document.createElement('div');
  if (postcount==0){
  var str = '<div class="thumbnail"><div class="row"><div class="col-md-12"><h4><strong><a href="#">'+text[0]+'</a></strong></h4><hr></div></div><div class="row"><div class="col-md-2"><a href="#"><img src="images/jackson.jpg" width="260" height="180" class="img-thumbnail" alt=""></a></div><div class="col-md-10"><p>'+text[1]+'</p><p><a class="btn btn-primary" href="dancingpost.html" role="button">Read More</a></p></div></div><div class="row"><div class="col-md-2"><p></p><p><i class="glyphicon glyphicon-user"></i> by <a href="#">Chris</a> | <i class="glyphicon glyphicon-calendar"></i> Sept 16th, 2012</p></div><div class="col-md-4"><p></p><p><i class="glyphicon glyphicon-comment"></i> <a href="#">0 Comments</a> | <i class="glyphicon glyphicon-thumbs-up"></i> <a href="#">0 Likes</a></p></div></div></div><hr>';
}else{
    var str = '<div class="thumbnail"><div class="row"><div class="col-md-12"><h4><strong><a href="#">'+text[0]+'</a></strong></h4><hr></div></div><div class="row"><div class="col-md-2"><a href="#"><img src="images/jackson.jpg" width="260" height="180" class="img-thumbnail" alt=""></a></div><div class="col-md-10"><p>'+text[1]+'</p><p><a class="btn btn-primary" href="#" role="button">Read More</a></p></div></div><div class="row"><div class="col-md-2"><p></p><p><i class="glyphicon glyphicon-user"></i> by <a href="#">Chris</a> | <i class="glyphicon glyphicon-calendar"></i> Sept 16th, 2012</p></div><div class="col-md-4"><p></p><p><i class="glyphicon glyphicon-comment"></i> <a href="#">0 Comments</a> | <i class="glyphicon glyphicon-thumbs-up"></i> <a href="#">0 Likes</a></p></div></div></div><hr>';
}
  li3.insertAdjacentHTML('beforeend',str)
  ul3.prepend(li3);
  postcount++;
}


form3.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray3.push([inputtitle3.value,input3.value]);
  localStorage.setItem('post_item2', JSON.stringify(itemsArray3));
  liMaker3([inputtitle3.value,input3.value]);
  input3.value = "";
  $('#myModal2').modal('hide');
});

data3.forEach(item => {
  liMaker3(item);
});
}



const form2 = document.querySelector('form.post-update1');
const ul2 = document.querySelector('div.input_post');
// const button2 = document.querySelector('button.button_submit2');
const input2 = document.getElementById('post2');
const inputtitle2 = document.getElementById('post2title');
let itemsArray2 = localStorage.getItem('post_item') ? JSON.parse(localStorage.getItem('post_item')) : [];

localStorage.setItem('post_item', JSON.stringify(itemsArray2));
const data2 = JSON.parse(localStorage.getItem('post_item'));

if (form2){
const liMaker2 = (text) => {
  const li2 = document.createElement('div');
  var str = '<div class="thumbnail"><div class="row"><div class="col-md-12"><h4><strong><a href="#">'+text[0]+'</a></strong></h4><hr></div></div><div class="row"><div class="col-md-2"><a href="#"><img src="images/jackson.jpg" width="260" height="180" class="img-thumbnail" alt=""></a></div><div class="col-md-10"><p>'+text[1]+'</p><p><button type="button" class="btn btn-primary" href="#">Read more</button></p></div></div><div class="row"><div class="col-md-2"><p></p><p><i class="glyphicon glyphicon-user"></i> by <a href="#">Chris</a> | <i class="glyphicon glyphicon-calendar"></i> Sept 16th, 2012</p></div><div class="col-md-4"><p></p><p><i class="glyphicon glyphicon-comment"></i> <a href="#">0 Comments</a> | <i class="glyphicon glyphicon-thumbs-up"></i> <a href="#">0 Likes</a></p></div></div></div><hr>';
  li2.insertAdjacentHTML('beforeend',str)
  ul2.prepend(li2);
}


form2.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray2.push([inputtitle2.value,input2.value]);
  localStorage.setItem('post_item', JSON.stringify(itemsArray2));
  liMaker2([inputtitle2.value,input2.value]);
  input2.value = "";
  $('#myModal').modal('hide');
});

data2.forEach(item => {
  liMaker2(item);
});
}



const form = document.querySelector('form.comment-update-form1');
const ul = document.querySelector('div.input_comment');
// const button = document.querySelector('#button_submit');
const input = document.getElementById('comment');
let itemsArray = localStorage.getItem('guitar_item') ? JSON.parse(localStorage.getItem('guitar_item')) : [];

localStorage.setItem('guitar_item', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('guitar_item'));
if (form){
const liMaker = (text) => {
  const li = document.createElement('div');
  var str = '<div class="row"><div class="col-md-1"><a href="#"><img src="images/jackson.jpg" class="img-thumbnail" alt=""></a></div><div class="col-md-11"><br><p>'+text+'</p></div></div><div class="row"><div class="col-md-4"><p></p><p><i class="glyphicon glyphicon-user"></i> by <a href="#">Chris</a> | <i class="glyphicon glyphicon-calendar"></i> Sept 16th, 2012</p></div></div><hr>';
  li.insertAdjacentHTML('beforeend',str)
  ul.prepend(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('guitar_item', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});
}
const form1 = document.querySelector('form.comment-update-form2');
const ul1 = document.querySelector('div.input_comment2');
// const button1 = document.querySelector('#button_submit2');
const input1 = document.getElementById('comment2');
let itemsArray1 = localStorage.getItem('dancing_item') ? JSON.parse(localStorage.getItem('dancing_item')) : [];

localStorage.setItem('dancing_item', JSON.stringify(itemsArray1));
const data1 = JSON.parse(localStorage.getItem('dancing_item'));

if (form1){
const liMaker1 = (text) => {
  const li1 = document.createElement('div');
  var str = '<div class="row"><div class="col-md-1"><a href="#"><img src="images/jackson.jpg" class="img-thumbnail" alt=""></a></div><div class="col-md-11"><br><p>'+text+'</p></div></div><div class="row"><div class="col-md-4"><p></p><p><i class="glyphicon glyphicon-user"></i> by <a href="#">Chris</a> | <i class="glyphicon glyphicon-calendar"></i> Sept 16th, 2012</p></div></div><hr>';
  li1.insertAdjacentHTML('beforeend',str)
  ul1.prepend(li1);
}


form1.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray1.push(input1.value);
  localStorage.setItem('dancing_item', JSON.stringify(itemsArray1));
  liMaker1(input1.value);
  input1.value = "";
});

data1.forEach(item => {
  liMaker1(item);
});
}

var interestCount = 0;
var likeCount = 0;

$(".subscribe-btn").click(function(){
    if($(this).text()=="Subscribe"){
        interestCount++;
        $(this).text("Subscribed");

    } else{
        interestCount--;
        $(this).text("Subscribe");
    }

    $(this).toggleClass("btn-primary");
    $(this).toggleClass("btn-default");
});

$(".like-btn").click(function(){
  $(this).html(function(i, text){
    return (text.indexOf("Liked") != -1) ? "<i class='glyphicon glyphicon-thumbs-up'></i> Like" : "<i class='glyphicon glyphicon-thumbs-up'></i> Liked"
  })
    if($(this).text()==" Liked"){
        $('.likes').html("5 Likes");
    } else{
        $('.likes').html("4 Likes");
    }

    $(this).toggleClass("btn-success");
    $(this).toggleClass("btn-default");
})

$(".like2-btn").click(function(){
  $(this).html(function(i, text){
    return (text.indexOf("Liked") != -1) ? "<i class='glyphicon glyphicon-thumbs-up'></i> Like" : "<i class='glyphicon glyphicon-thumbs-up'></i> Liked"
  })
    if($(this).text()==" Liked"){
        $('.likes2').html("1 Like");
    } else{
        $('.likes2').html("0 Likes");
    }

    $(this).toggleClass("btn-success");
    $(this).toggleClass("btn-default");
})

$(document).on('click', '#close-preview', function(){
    $('.image-preview').popover('hide');
    // Hover befor close the preview
    $('.image-preview').hover(
        function () {
           $('.image-preview').popover('show');
        },
         function () {
           $('.image-preview').popover('hide');
        }
    );
});

$(function() {
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","close pull-right");
    // Set the popover default content
    $('.image-preview').popover({
        trigger:'manual',
        html:true,
        title: "<strong>Preview</strong>"+$(closebtn)[0].outerHTML,
        content: "There's no image",
        placement:'bottom'
    });
    // Clear event
    $('.image-preview-clear').click(function(){
        $('.image-preview').attr("data-content","").popover('hide');
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Browse");
    });
    // Create the preview image
    $(".image-preview-input input:file").change(function (){
        var img = $('<img/>', {
            id: 'dynamic',
            width:250,
            height:200
        });
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            $(".image-preview-input-title").text("Change");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);
            img.attr('src', e.target.result);
            $(".image-preview").attr("data-content",$(img)[0].outerHTML).popover("show");
        }
        reader.readAsDataURL(file);
    });
});

$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
