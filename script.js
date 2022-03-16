var elContaier = document.querySelector(".container");
var elApple = document.querySelector(".apple");
var elKiwi = document.querySelector(".kiwi");
var elBanana = document.querySelector(".banana");
var elOrange = document.querySelector(".orange");
var elFruits = document.querySelector(".fruits");
var elBtnRec = document.querySelector(".btn");


var record = new webkitSpeechRecognition();

record.lang = "en-US"

record.onend = function(){
  console.log("===== Aloqa tugadi =====");
  elBtnRec.classList.remove("red");
}

record.onerror = function(){
  console.log("===== Xatolik yuz berdi =====");
  elBody.classList.add("error");
}

record.onresult = function(evt){

  var command = evt["results"][0][0]["transcript"];

  if(command.includes("Apple")){
    elApple.classList.add("apple-hiding");
  }

  if(command.includes("Kiwi")){
    elKiwi.classList.add("kiwi-hiding");
  }

  if(command.includes("Banana")){
    elBanana.classList.add("banana-hiding");
  }

  if(command.includes("Orange")){
   elOrange.classList.add("orange-hiding");
 }

  if(command.includes("Apple")){
   elFruits.classList.add("fruit-hiding");
  }

}


elBtnRec.addEventListener("click", function(){
  console.log("===== Aloqa boshlandi =====");
  record.start();
  elBtnRec.classList.add("red");
})