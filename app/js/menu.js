
$("li:has(ul)>p").append($("<span>+</span>"));

$(".menuBox").on("click","li:has(ul) p",function(){
    if($(this).find("span").text()=="+"){
        $(this).find("span").text("-");
    }else{
        $(this).find("span").text("+");
    }
    $(this).next().toggle();
});