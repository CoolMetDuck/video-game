

let Square = document.querySelector(".Square");
let left = 10;
let top2 = 500;
let StarBucks = document.querySelector(".StarBucks");

let score = 0;
let SPIKE = 960;
let SPIKE2 = 550;

document.querySelector(".score").textContent = 'Score: ' + score;

function sqDELAY(){
    setTimeout(sqDEL2, 20);
    function sqDEL2(){
       
    const sqJUMP = setInterval(sqJumpUp, 1);

    setTimeout(stopJUMP,80);
    function stopJUMP(){

     

     clearInterval(sqJUMP);
     const sqDOWN  = setInterval(sqJumpDown,1);
     setTimeout(sqLAND, 80);

     function sqLAND(){

         clearInterval(sqDOWN);
         top2 = 505;
         Square.style.top = top2 + 'px';
         
         
     }
     }}
  ////////////////////////////////////
     
  }
  function sqMOVEF(){
    const SQUAREMVF = setInterval(sqMOVEFpp, 10);
    function sqMOVEFpp(){
        left++
        Square.style.left = left + 'px';
    }
    setTimeout(sqMOVEFppS, 100);
    function sqMOVEFppS(){
        clearInterval(SQUAREMVF);

    }

  }
  /////////////////////////////////////
  SQMOVE();
  SQJUMP();

  function sqMOVEB(){
    const SQUAREMVB = setInterval(sqMOVEBpp, 10);
    function sqMOVEBpp(){
        left--
        Square.style.left = left + 'px';
    }
    setTimeout(sqMOVEBppS, 100);
    function sqMOVEBppS(){
        clearInterval(SQUAREMVB);

    }

  }
  ////////////////////////////////
  // randomNumber();

  function randomNumber(min, max){

  
    return(Math.floor (Math.random() * (max + 1 - min) + min));
    
  
  }
 
  
  let StarBucksLeft = randomNumber(100, (window.innerWidth - 100 ));
  
  
  
  
  ///////////
  function ran() {
          StarBucks.style.left = randomNumber(1,innerWidth) + 'px';
  }
  
  ///////////
  
function  Spik(){
    
    score = 0;

    
    
 

        setInterval(()=> {

            SPIKE--;
            document.querySelector(".spike").style.left = SPIKE + 'px';
         
            if (SPIKE <= 400){
                
                SPIKE = 1802;
                document.querySelector(".spike").style.left = SPIKE + 'px';
        
            }
            if (SPIKE <= left && top2 >= 500){
               
                console.log("gameover");
                document.querySelector(".gameOver").style.display = 'flex';
                document.querySelector(".PauseButton").style.display = 'none';
                score = 0;
                document.querySelector(".score").textContent = 'Score: ' + score;
                top2 = 300;
                Square.style.top =  top2 + 'px';
                
        document.querySelector(".buttonBackward").outerHTML = '<img src="ControlButtonBackward.png" alt="button Backward" class="buttonBackward"/>';
        document.querySelector(".buttonFoward").outerHTML = '<img src="ControlButtonFoward.png" alt="button Foward" class="buttonFoward" />';
        document.querySelector(".Space").outerHTML = '<img src="Spacebtn.png" alt="spcae button" class="Space"/>';
       
                
                
            }
        },5)
      
        

    }



///////////

  Spik();





function play (){
    document.querySelector(".menuscene1").style.display = "none";

document.querySelector("body").style.backgroundColor = 
"#2432f0";
document.querySelector(".SelectLevelTitle").innerHTML = "Select a level"
document.querySelector(".SelectLevelScreen").style.display = "flex"

}



//  back to the menu screen button
function menubuttonClick() {
    document.querySelector(".SelectLevelScreen").style.display = "none";
    document.querySelector(".menuscene1").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "#d2871e";
    



}


//Youtube button


function YouTubeButtonClick(){
    window.open('https://www.youtube.com/channel/UCtbuOuewoBITuah1nB6fDeg/featured');


}

//Road Trip First level
function firstLevelClick(){

    document.querySelector(".RoadTripLevel").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".SelectLevelScreen").style.display = "none";
    document.querySelector(".gameOver").style.display = 'none';
    document.querySelector(".PauseButton").style.display = 'flex';



    
    document.querySelector(".buttonBackward").outerHTML = '<img src="ControlButtonBackward.png" alt="button Backward" class="buttonBackward"   onmousedown="characterButtonControlBackward()"/>';
    document.querySelector(".buttonFoward").outerHTML = '<img src="ControlButtonFoward.png" alt="button Foward" class="buttonFoward" onmousedown="characterButtonControlFoward()"/>';
    document.querySelector(".Space").outerHTML = '<img src="Spacebtn.png" alt="spcae button" class="Space" onmousedown="characterButtonUp()"/>';
    left = 10;
    top2 = 500;
    socre = 0;
    document.querySelector(".score").textContent = "Score: " + score;
  
    StarBucksLeft = randomNumber(100, (window.innerWidth - 100 ));
    Square.style.left = '10px';
    Square.style.top = '500px';
    

    document.querySelector(".score").textContent = "Score: " + score;
    
    SPIKE = 960
    document.querySelector(".spike").style.left = SPIKE + 'px';
}



function firstLevelDown() {
    document.querySelector(".RoadTrip").style.transform = "scale(2.2)";




}



function firstLevelUp() {

    document.querySelector(".RoadTrip").style.transform = "scale(2.0)";





}



function firstLevelLeave() {


 document.querySelector(".RoadTrip").style.transform = "scale(2.0)";
 


}

// Pause Button


//Spike

/////////////////









    
    //100
 
    
    


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// CharacterMove




function SQMOVE(){
    addEventListener('keydown',  function move(e){
        if (e.key == 'd' || e.key == 'D' || e.key == 'ArrowRight'){
            sqMOVEF()
            
   
            if (left>= 1802){
               left = 1792;
               
                
       
           }
    
           if (StarBucksLeft <= left)  {
            StarBucksLeft = randomNumber(100,(innerWidth - 150));
            StarBucks.style.left = StarBucksLeft + 'px';
            score++;
                document.querySelector(".score").textContent = "Score: " + score;
    
                

        }
        if (StarBucksLeft<=left  &&  e.key == 'd' || e.key == 'D' || e.key == 'ArrowRight'){
            score--;
            document.querySelector(".score").textContent = "Score: " + score;
            StarBucksLeft =innerWidth/2;
            StarBucks.style.left = StarBucksLeft + 'px';



        }
    
   
   
   
        
            
        }
   
        if (e.key == 'a' || e.key == 'A' || e.key == 'ArrowLeft'){
            sqMOVEB();
            if (left<=10){
                left = 20;}
        
            if (StarBucksLeft >= left){
                
                StarBucksLeft = randomNumber(100,(innerWidth - 150 ));
                StarBucks.style.left = StarBucksLeft + 'px';
                score++;
                document.querySelector(".score").textContent = "Score: " + score;

            }
            if (StarBucksLeft>=left  && e.key == 'a' || e.key == 'A' || e.key == 'ArrowLeft' ){
                score--;
                document.querySelector(".score").textContent = "Score: " + score;
                StarBucksLeft =innerWidth/2;
                StarBucks.style.left = StarBucksLeft + 'px';
    
    
    
            }
  
        


          
   
       }
       if (left >=300 && left <= 450 && top2 >= 500){  
        document.querySelector("#collision").style.backgroundColor = "#127522";
        document.querySelector(".NO").innerHTML = "TRUE!";
    }
    else{
        document.querySelector("#collision").style.backgroundColor = "black";
        document.querySelector(".NO").innerHTML = "FALSE!";

    }
     
    
    
  
    
    })}


   
function SQJUMP(){

addEventListener('keyup', function sqjump(e){
    if (e.key == " " || e.key == 'W' || e.key == 'w' || e.key == 'ArrowUp'){
        sqDELAY();
        
     }})}

  
    

// Square jumps //  
function spaceUp(){
    sqDELAY();
 }

function sqJumpUp(){

top2-=5;
Square.style.top = top2 + 'px';




}

function sqJumpDown(){

    top2+=5;
    Square.style.top = top2 + 'px';
    


    
}



//


//characterFreeze 



// && top2 >= 500
function characterF(){
    
        sqMOVEF();
        if (StarBucksLeft <= left )  {
            StarBucksLeft = randomNumber(100,(innerWidth - 150));
            StarBucks.style.left = StarBucksLeft + 'px';
            score++;
                document.querySelector(".score").textContent = "Score: " + score;
    
                

        }
        if (StarBucksLeft<=left){
            score--;
            document.querySelector(".score").textContent = "Score: " + score;
            StarBucksLeft =innerWidth/2;
            StarBucks.style.left = StarBucksLeft + 'px';



        }
        if (left>= 1802){
            left = 1792;
            
        }

     
        if (left >=300 && left <= 450){
            document.querySelector("#collision").style.backgroundColor = "#127522";
            document.querySelector(".NO").innerHTML = "TRUE!";
        }
        else{
            document.querySelector("#collision").style.backgroundColor = "black";
            document.querySelector(".NO").innerHTML = "FALSE!";
    
        }
    
}

function characterB(){
    
  sqMOVEB();

  
    if (left<= 10){
        left = 20;
        console.log(left);
    }

    console.log(left);
    if (left >=300 && left <= 450){
        document.querySelector("#collision").style.backgroundColor = "#127522";
        document.querySelector(".NO").innerHTML = "TRUE!";
    }
    else{
        document.querySelector("#collision").style.backgroundColor = "black";
        document.querySelector(".NO").innerHTML = "FALSE!";

    }
    if (StarBucksLeft >= left){
                
        StarBucksLeft = randomNumber(100,(innerWidth - 150 ));
        StarBucks.style.left = StarBucksLeft + 'px';
        score++;
        document.querySelector(".score").textContent = "Score: " + score;

    }
    if (StarBucksLeft>=left){
        score--;
        document.querySelector(".score").textContent = "Score: " + score;
        StarBucksLeft =innerWidth/2;
        StarBucks.style.left = StarBucksLeft + 'px';
    
    
    
    }

}

    
    ////////////////////////////////////////////////////////////////////////////////////////////


    function gLeave(){

        document.querySelector(".RoadTripLevel").style.display = 'none';
        document.querySelector("body").style.backgroundColor = '#2432f0';
        document.querySelector(".SelectLevelScreen").style.display = 'flex';
        
        score = 0;
        document.querySelector(".score").textContent = "Score: " + score;
    
    }





   

    function PauseButtonClick(){
        

        document.querySelector(".PauseMenu").style.display = "flex";

      

        document.querySelector(".buttonBackward").outerHTML = '<img src="ControlButtonBackward.png" alt="button Backward" class="buttonBackward"/>';
        document.querySelector(".buttonFoward").outerHTML = '<img src="ControlButtonFoward.png" alt="button Foward" class="buttonFoward" />';
        document.querySelector(".Space").outerHTML = '<img src="Spacebtn.png" alt="spcae button" class="Space"/>';
        top2 = 300;
        Square.style.top = top2 + 'px';
       

        
   //  visibility: visible;
        
        

        


 


    }
    




        
    function pauseResume(){
        document.querySelector(".PauseMenu").style.display = "none";



        
        document.querySelector(".buttonBackward").outerHTML = '<img src="ControlButtonBackward.png" alt="button Backward" class="buttonBackward"   onmousedown="characterButtonControlBackward()"/>';
        document.querySelector(".buttonFoward").outerHTML = '<img src="ControlButtonFoward.png" alt="button Foward" class="buttonFoward" onmousedown="characterButtonControlFoward()"/>';
        document.querySelector(".Space").outerHTML = '<img src="Spacebtn.png" alt="spcae button" class="Space" onmousedown="characterButtonUp()"/>';
        top2 = 500;
        Square.style.top = top2 + 'px';
        
        
        
        
   }

   function pauseLeave() {
    document.querySelector(".PauseMenu").style.display = "none";
    document.querySelector(".RoadTripLevel").style.display = "none";
    document.querySelector(".SelectLevelScreen").style.display = "flex";
    document.querySelector("body").style.backgroundColor = "#2432f0";
    score = 0;
    document.querySelector(".score").textContent = "Score: " + score;
    
    
    
    
}


   function characterButtonControlFoward (){
    

    characterF();
    
    

   }

   function characterButtonControlBackward(){

     
       characterB();
   }
   function characterButtonUp(){
       spaceUp();

   }

   //Square ground
   document.querySelector(".ground").style.width = window.innerWidth + 'px';
   /////////
   function disableMobile(){
    
    document.querySelector(".buttonFoward").style.display = 'none';
    document.querySelector(".buttonBackward").style.display = 'none';
    document.querySelector(".Space").style.display = 'none';
    document.querySelector(".disableMobileControles").outerHTML = '<img src="mobileContrCheckBoxClick.png" alt="Check box" class="disableMobileControles" onclick="disableMobileClick()" />';
   }
   
   function disableMobileClick(){
    document.querySelector(".buttonFoward").style.display = 'flex';
    document.querySelector(".buttonBackward").style.display = 'flex';
    document.querySelector(".Space").style.display = 'flex';
    document.querySelector(".disableMobileControles").outerHTML = '<img src="mobileContrCheckBox.png" alt="Check box" class="disableMobileControles" onclick="disableMobile()" />';
   }




   function retry(){
    document.querySelector(".gameOver").style.display = 'none';
    score = 0;
    document.querySelector(".score").textContent = "Score: " + score;
    document.querySelector(".PauseButton").style.display = "flex";
    top2 = 500;
    Square.style.top = top2 + 'px';
    left = 10;
    
    Square.style.left = left + 'px';
    document.querySelector(".buttonBackward").outerHTML = '<img src="ControlButtonBackward.png" alt="button Backward" class="buttonBackward"   onmousedown="characterButtonControlBackward()"/>';
    document.querySelector(".buttonFoward").outerHTML = '<img src="ControlButtonFoward.png" alt="button Foward" class="buttonFoward" onmousedown="characterButtonControlFoward()"/>';
    document.querySelector(".Space").outerHTML = '<img src="Spacebtn.png" alt="spcae button" class="Space" onmousedown="characterButtonUp()"/>';






   }
//quit

function quit(){


    window.close('http://127.0.0.1:5500/'); 
    
}




//addEventListener("keypress", (e) => {console.log(e)});
//Enter key code: 32;
