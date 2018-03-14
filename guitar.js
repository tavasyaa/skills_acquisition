
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

    $(this).toggleClass("btn-info");
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
