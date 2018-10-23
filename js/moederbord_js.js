//Voor de dia show
//Het is in het engels, maar ik heb het wel zelf gemaakt. Niet van het internet gehaald.
//Bij javascript gebruik ik liever de imageCount notatie dan image_count
let imageCount = 1;

function nextImage(){
  imageCount++;
  if(imageCount >= 5){
    imageCount = 1;
  }
  newImage();
}
setInterval(nextImage, 2000);
function drawImage1(){
  imageCount = 1;
  newImage();
}
function drawImage2(){
  imageCount = 2;
  newImage();
}
function drawImage3(){
  imageCount = 3;
  newImage();
}
function drawImage4(){
  imageCount = 4;
  newImage();
}
function newImage(){
  switch(imageCount){
    case 1:
      document.getElementById("afb_dia").src = "afb/moederbord_1.png";
      document.getElementById("afb1_knop").style.backgroundColor = "white";
      document.getElementById("afb1_knop").style.color = "black";
      document.getElementById("afb2_knop").style.backgroundColor = "transparent";
      document.getElementById("afb2_knop").style.color = "white";
      document.getElementById("afb3_knop").style.backgroundColor = "transparent";
      document.getElementById("afb3_knop").style.color = "white";
      document.getElementById("afb4_knop").style.backgroundColor = "transparent";
      document.getElementById("afb4_knop").style.color = "white";
      break;
    case 2:
      document.getElementById("afb_dia").src = "afb/moederbord_2.png";
      document.getElementById("afb2_knop").style.backgroundColor = "white";
      document.getElementById("afb2_knop").style.color = "black";
      document.getElementById("afb1_knop").style.backgroundColor = "transparent";
      document.getElementById("afb1_knop").style.color = "white";
      document.getElementById("afb3_knop").style.backgroundColor = "transparent";
      document.getElementById("afb3_knop").style.color = "white";
      document.getElementById("afb4_knop").style.backgroundColor = "transparent";
      document.getElementById("afb4_knop").style.color = "white";
      break;
    case 3:
      document.getElementById("afb_dia").src = "afb/moederbord_3.png";
      document.getElementById("afb3_knop").style.backgroundColor = "white";
      document.getElementById("afb3_knop").style.color = "black";
      document.getElementById("afb2_knop").style.backgroundColor = "transparent";
      document.getElementById("afb2_knop").style.color = "white";
      document.getElementById("afb1_knop").style.backgroundColor = "transparent";
      document.getElementById("afb1_knop").style.color = "white";
      document.getElementById("afb4_knop").style.backgroundColor = "transparent";
      document.getElementById("afb4_knop").style.color = "white";
      break;
    case 4:
      document.getElementById("afb_dia").src = "afb/moederbord_4.png";
      document.getElementById("afb4_knop").style.backgroundColor = "white";
      document.getElementById("afb4_knop").style.color = "black";
      document.getElementById("afb2_knop").style.backgroundColor = "transparent";
      document.getElementById("afb2_knop").style.color = "white";
      document.getElementById("afb3_knop").style.backgroundColor = "transparent";
      document.getElementById("afb3_knop").style.color = "white";
      document.getElementById("afb1_knop").style.backgroundColor = "transparent";
      document.getElementById("afb1_knop").style.color = "white";
      break;
  }
}
newImage();
//Om de tesksten te laten zien
function drawText1(){
  console.log("Draw tekst 1");
  document.getElementById("tekst1").style.display="block";
  document.getElementById("tekst_schaduw").style.display="block";
}
function drawText2(){
  console.log("Draw tekst 2");
  document.getElementById("tekst2").style.display="block";
  document.getElementById("tekst_schaduw").style.display="block";
}
function drawText3(){
  console.log("Draw tekst 3");
  document.getElementById("tekst3").style.display="block";
  document.getElementById("tekst_schaduw").style.display="block";
}
function drawText4(){
  console.log("Draw tekst 4");
  document.getElementById("tekst4").style.display="block";
  document.getElementById("tekst_schaduw").style.display="block";
}
//Functie voor de terug knop
function backToMain(){
  document.getElementById("tekst1").style.display="none";
  document.getElementById("tekst2").style.display="none";
  document.getElementById("tekst3").style.display="none";
  document.getElementById("tekst4").style.display="none";
  document.getElementById("tekst_schaduw").style.display="none";
}
//Atomatisch herhalen
function reload(){
  document.location.reload();
}
//setInterval(reload, 2000);
