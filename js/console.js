

// let consoleOutput = [
// //     "&nbsp;",
// //     ">>>&nbsp;",
// //     "for",
// //     "&nbsp;",
// //     "skill",
// //     "&nbsp;",
// //     "in",
// //     "&nbsp;",
// //     "skills:",
// //     "<br>",
// //     "&nbsp;",
// //     ">>>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
// //     "&nbsp;&nbsp;&nbsp;&nbsp;",
// //     "print",
// //     "(skill)",
// //     "<br>",
// //     "&nbsp;>>>&nbsp;Python",
// //     "<br>",
// //     "&nbsp;>>>&nbsp;Django",
// //     "<br>",
// //     "&nbsp;>>>&nbsp;JavaScript",
// //     "<br>",
// //     "&nbsp;>>>&nbsp;React",
// //     "<br>",
// //     "&nbsp;>>>&nbsp;Java",
// //     "<br>",
// //     "&nbsp;>>>&nbsp;Design Patterns",
// //     "<br>"
// // ];


let consoleOutput = [
    "&nbsp;",
    ">>>&nbsp;",
    "f",
    "o",
    "r",
    "&nbsp;",
    "s",
    "k",
    "i",
    "l",
    "l",
    "&nbsp;",
    "i",
    "n",
    "&nbsp;",
    "s",
    "k",
    "i",
    "l",
    "l",
    "s",
    ":",
    "<br>",
    "&nbsp;",
    ">>>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "&nbsp;&nbsp;&nbsp;&nbsp;",
    "p",
    "r",
    "i",
    "n",
    "t",
    "(",
    "s",
    "k",
    "i",
    "l",
    "l",
    ")",
    "<br>",
    "&nbsp;Python",
    "<br>",
    "&nbsp;Django",
    "<br>",
    "&nbsp;JavaScript",
    "<br>",
    "&nbsp;React",
    "<br>",
    "&nbsp;Java",
    "<br>",
    "&nbsp;Design Patterns",
    "<br>",
    "&nbsp;>>>"
];

$(document).ready(function(){
    consoleOutput.forEach((content, index, arr) => {
        let currentPaddingBottom = 0;
        setTimeout(() => {
            let fontSize = $("#console").css("font-size").match("^(\\d.*)px")[1];
            // if (arr[index+1] === "<br>"){
            //     // Get the current padding-bottom and extract the px value so we can update it below
            //     currentPaddingBottom = $("#console").css("padding-bottom").match("^(\\d.*)px")[1];
            //     let newPaddingBottom = `${currentPaddingBottom - fontSize}px`;
            //     console.log(newPaddingBottom);
            //     // console.log(currentPaddingBottom);
            //     // console.log(newPaddingBottom);
            //     // console.log(currentPaddingBottom);
            //     // console.log(newPaddingBottom);
            //     $("#console-content").append(content);
            //     $("#console").css({"padding-bottom": newPaddingBottom});
            //     console.log($("#console").css("padding-bottom"));
            //     // console.log($("#console").css("padding-bottom"))
            // }else{
                $("#console-content").append(content);
            // }
            // console.log($("console").css("padding-bottom"));




        }, 200 * (index + 1))

    })
});

