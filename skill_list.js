var interestCount = 0;

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
