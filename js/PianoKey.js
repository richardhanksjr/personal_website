// import {Howl, Howler} from 'howler';
// import {Howl, Howler} from "howler";
// let globalState = {
//     soundOn: false
// }

let sound = null;
let playID = null;
// let context = null;
// window.onload = function(){
//     context = new AudioContext();
// };

// When the page loads the audio context is not initialized until the user clicks.  If there is no sound playing
// on user hover and the audioContextInitialized has not been set to true, this value will be upadated
let audioContextInitialized = false;

function setSoundToOff(){
    console.log("setting sound to off function");
    localStorage.setItem("soundOn", "false");
    $("#sound-button").attr("src", "icons/icons8-sound-off-50.png");
}

$(".key").hover(

    function(){
        $(this).addClass('press');
        $(this).find("div").addClass("visible");
        $(this).find("div").removeClass('hidden');
        // The note name for the audio file is stored as the id
        let noteName = $(this).find("div")[0].id;
        // Only play the sound if the user has pressed the button to change the state
        if(JSON.parse(localStorage.getItem("soundOn"))  && audioContextInitialized === true){
            console.log(JSON.parse(localStorage.getItem("soundOn")));
            sound = new Howl({
                src: [`../audio/${noteName}.wav`]
            });
            console.log(sound.ctx);

            playID = sound.play();
            // Because of the AudioContext browser issue, if the sound is not playing, we need to make sure the playing icon is off
            // and soundOn is set to false so the user needs to click on the page to initialize the AudioContext
            console.log("audioContextInitialized before: " + audioContextInitialized);
            //
            // if (!sound.playing(playID)){
            //     console.log("setting to false");
            //     //audioContextInitialized = true;
            //     setSoundToOff();
            //     console.log("audioContextInitialized: " + audioContextInitialized);
            // }
        }
    },
    function(){
        $(this).removeClass('red');
        $(this).find("div").addClass('hidden');
        $(this).removeClass("press");
        if (sound !== null){
            sound.fade(1, 0, 100, playID);
            playID = null;
        }
        sound = null;
    }
);

const noteToHTMLLookup = {
    "C": "index.html",
    "CS": "about.html"
};

$(".key").click(
    function(){
        // Stop any current sounds from playing before playing the "jingle"
        // if (sound !== null){
        //     sound.stop();
        // }
        let soundOn = JSON.parse(localStorage.getItem("soundOn"));
        console.log("sound on is: " + soundOn);
        let noteName = $(this).find("div")[0].id;
        if(soundOn){
            sound = new Howl({
                src: [`../audio/bach_sample_${noteName}.wav`]
            });
            playID = sound.play();
            setTimeout(()=> {
                sound.fade(1, 0, 500, playID);
                sound = null;
                window.location = noteToHTMLLookup[noteName];
            }, 750);
        }else{
            window.location = noteToHTMLLookup[noteName];
        }

    }
);

// There was an initial delay in being able to use this button.  Don't display until page has loaded.
$(document).ready(function(){
    if(!(JSON.parse(localStorage.getItem("soundOn"))  && audioContextInitialized === true)){
        setSoundToOff();
    }
    // If this is the first time, set the value to false.
    // localStorage only takes strings, so we will have to parse this value into a boolean later
    if (localStorage.getItem("soundOn") === null){
        localStorage.setItem("soundOn", "false");
    }
    let soundOn = JSON.parse(localStorage.getItem('soundOn'));
    // $("#sound-button").toggleClass("hidden");
    if (soundOn){
        $("#sound-button").attr("src", "icons/icons8-sound-50.png");
        // $("#sound-button").css("background-color", "red");
        // $("#sound-button").text("Turn off Sounds");
    }else{
        $("#sound-button").attr("src", "icons/icons8-sound-off-50.png");
        // $("#sound-button").css("background-color", "blue");
        // $("#sound-button").text("Turn on Sounds");
    }
});


// Toggle the sounds button on and off
$("#sound-button").click(function(){

    audioContextInitialized = true;
    localStorage.setItem("soundOn", !JSON.parse(localStorage.getItem("soundOn")));
    let soundOn = JSON.parse(localStorage.getItem("soundOn"));
    console.log(soundOn);
    if (soundOn){
        $("#sound-button").attr("src", "icons/icons8-sound-50.png");
        console.log("on");
        // $("#sound-button").css("background-color", "red");
        // $("#sound-button").text("Turn off Sounds");
    }else{
        $("#sound-button").attr("src", "icons/icons8-sound-off-50.png");
        console.log("off");
        // $("#sound-button").css("background-color", "blue");
        // $("#sound-button").text("Turn on Sounds");
    }
});

window.onerror = function(){
    console.log("error");
}

