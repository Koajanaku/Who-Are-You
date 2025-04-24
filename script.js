let input1 = document.querySelector (".questionOne");
let input2 = document.querySelector (".questionTwo");
let dad = document.querySelector(".dadstart");
let adad1 = document.querySelector(".dad1");
let adad2 = document.querySelector(".dad2");
let mom = document.querySelector(".momstart");
let amom1 = document.querySelector(".mom1");
let amom2 = document.querySelector(".mom2");
let button = document.querySelector ("button");
let block = document.querySelector (".block");
let momword = document.querySelector(".momword")
let dadword = document.querySelector(".dadword")


button.onclick = function(){
    console.log("button check");
    let answer1 = input1.value;
    console.log(answer1);

let answer2 = input2.value;
    console.log(answer2);

    dad.style.display = "none";
    mom.style.display = "none";
    block.style.display = "none";

if(answer1=== "dad" && answer2==="dad"){
    adad1.style.display = "block";
    dadword.style.display = "block";
console.log("did it");
} 
else if(answer1=== "mom" && answer2==="mom"){
    amom1.style.display = "block";
    momword.style.display = "block"
console.log("did it");
}
else if(answer1=== "mom" && answer2==="dad"){
    adad2.style.display = "block";
    dadword.style.display = "block"
console.log("did it");
}
else if(answer1=== "dad" && answer2==="mom"){
    amom2.style.display = "block";
    momword.style.display = "block"
console.log("did it");
}
}




console.log("check if js is working");









