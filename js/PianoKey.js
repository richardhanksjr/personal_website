console.log("ready");
document.addEventListener("ready", ()=> console.log("loaded"));

$(".key").hover(
    function(){
        console.log("here");
        // $(this).addClass('red');
        $(this).addClass('press');
        $(this).find("div").addClass("visible");
        $(this).find("div").removeClass('hidden');

    },
    function(){
        $(this).removeClass('red');
        $(this).find("div").addClass('hidden');
        $(this).removeClass("press");
    }
);
