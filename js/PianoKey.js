// import {Howl, Howler} from 'howler';
// import {Howl, Howler} from "howler";


console.log("ready");
document.addEventListener("ready", ()=> console.log("loaded"));
let sound = null;
let playID = null;

$(".key").hover(

    function(){
        // $(this).addClass('red');
        $(this).addClass('press');
        $(this).find("div").addClass("visible");
        $(this).find("div").removeClass('hidden');
        // The note name for the audio file is stored as the id
        let noteName = $(this).find("div")[0].id;
        sound = new Howl({
            src: [`../audio/${noteName}.wav`]
        });
        playID = sound.play();

    },
    function(){
        $(this).removeClass('red');
        $(this).find("div").addClass('hidden');
        $(this).removeClass("press");
        if (sound !== null){
            sound.fade(1, 0, 100, playID);
        }
    }
);


$(".key").click(
    function(){
        console.log("clicked");
        const sound = new Howl({
            src: ['../audio/piano_middle_c.mp3']
        });
        sound.play();
    }
)