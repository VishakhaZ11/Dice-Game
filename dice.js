var rn=Math.floor(Math.random()*6)+1;

var diceimg="dice" +rn+ ".png";

var randdiceimg="images/"+diceimg;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randdiceimg);

//for second dice

var rn1=Math.floor(Math.random()*6)+1;

var diceimg2="dice" +rn1+ ".png";

var imgsource="images/"+diceimg2;

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",imgsource);

if(rn>rn1)
    {
        document.querySelector("h1").innerHTML="PLAYER 1 WINS!!!";
    }
    else if(rn1>rn)
   {
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!!!";
    }

else{
    document.querySelector("h1").innerHTML="DRAW";
}