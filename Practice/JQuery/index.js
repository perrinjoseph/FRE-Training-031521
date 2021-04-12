//reason I put defer for the index.js file is because I want it to run after the html parser has completed executing the entire page. After that this JS file will exeute
//The script for Jquery will be executed in the sequence of the parser. That is why I have access to JQuery sintax.

$("input").focus(function(){
    $(this).css("width", "300px");
})
$("input").blur(function(){
    $(this).css("width","200px")
})

const element = $("input")

$("p").mouseenter(function(){
    $(this).fadeOut("slow");
})
$("p").on("click",function(){
    $(this).html("Whats up!")
})
$("p").mouseleave(function(){
    $(this).html("I left")
})



