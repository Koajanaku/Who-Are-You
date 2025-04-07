let input1 = document.querySelector (".questionOne");
let input2 = document.querySelector (".questionTwo");
let button = document.querySelector ("button");

    let answer1 = input1.value;
        console.log(answer1);

    let answer2 = input2.value;
        console.log(answer2);
    

button.onclick = function(){
    console.log("button check")

};


if(answer1 === "tall" && answer2 === "snack"){
    console.log("shagy");
}











console.log("check if js is working")