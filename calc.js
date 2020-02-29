let num=Math.round( (Math.random() * 100));
let tries = 20;
console.log(num);

 function australia(userAnswer) {    
 
   userAnswer = Number(userAnswer)   
   if(tries === 0){
       window.alert("You lose. :(")
       stop();}
       else{     
  
   if(userAnswer != num){
      window.alert('Benji, my number is ' + ((num > userAnswer)?"bigger":"smaller") + '.');         
      tries = tries - 1;  
 
   } 
else{   
      window.alert('Good job Benji! YOU WIN!!! Click OK to listen to star wars theme.');
     class sound {
       constructor(src) {
         this.sound = document.createElement("audio");
         this.sound.src = src;
         this.sound.setAttribute("preload", "auto");
         this.sound.setAttribute("controls", "none");
         this.sound.style.display = "none";
         document.body.appendChild(this.sound);
         this.play = function () {
           this.sound.play();
         };
         this.stop = function () {
         };
       }
     }
     myMusic = new sound("Star Wars Theme  John Williams.mp3");
     myMusic.play();
 
     }
    }
 
  }
 


