let username=document.querySelector("p");
let playPara=document.querySelector("h2");
let button=document.querySelector("#button");
let errorMsg=document.querySelector("h3");
let nextPrevBtn=document.querySelector(".buttons");
let qnNum=document.querySelector(".questionNumber");
// function for starting the game
button.addEventListener("click",function(){
    let input=document.querySelector("#form").username.value;
    let input1=document.querySelector("#input");
    // if the user doesnot enter anything 
    if(input==""){
    playPara.style.display="block";
    errorMsg.style.color="red";
    errorMsg.textContent="PLEASE ENTER YOUR NAME TO PLAY THE GAME";
    }
    // if the user enter the name
    else{
    username.textContent=input;
    playPara.style.display="none";
    button.style.display="none";
    input1.style.display="none";
    errorMsg.style.display="none";
    nextPrevBtn.style.display="block";
    qnNum.style.display="block";
    updateQn();
    }
})

let player=document.querySelectorAll(".players img");

let questions=document.querySelectorAll(".qn");

let prevBtn=document.querySelector("#prevBtn");
let nextBtn=document.querySelector("#nextBtn");
 
let indexes=[];

for(let i=0;i<questions.length;i++){
    indexes[i]=i;
}

indexes=shuffleQuestions(indexes);

let counter=0;
let indexAns=0;


let questionNumbers=document.querySelector(".qnIndex");

let message=document.querySelector("#player");
let msg=document.querySelector("#message");

let mountain;

 let images=document.querySelectorAll(".mountains img");
 let playerA=document.querySelectorAll(".players img");
 for(let i=0;i<images.length;i++){
    images[i].addEventListener("click",function(){
           // msg.textContent=this.dataset.mountain;
        mountain =this.dataset.mountain;
    })
    }

   let play;
   for(let i=0;i<playerA.length;i++){
        playerA[i].addEventListener("click",function(){
            // message.textContent=this.dataset.player;
            play=this.dataset.player;
        })
        }

let submitBtn=document.querySelector("#submit");
submitBtn.style.display="none";

nextBtn.addEventListener("click",function(){
    if(counter<questions.length-6){         
       counter++;           
    }
// let ta=document.querySelector("#t");
//     let turkey=document.Quiz.capital.value;
//    if(turkey==""){
//        ta.textContent="Please enter the form"; 
//       }
    if(counter==4){
      submitBtn.style.display="block";

      submitBtn.addEventListener("click",function(){

      var nepal=document.Quiz.city.value;
      var camp=document.querySelector("#ques").stadium;
    //   console.log(camp);
      var java1=document.Quiz.java.value;
      let googleQn=document.Quiz.founder.value;
      let champions=document.Quiz.champ.value;
      let prime=document.Quiz.pm.value;  
      let football=document.querySelector("#ques").score;
      let turkey=document.Quiz.capital.value;
      
    if(mountain=="Mt.Everest"){
        indexAns=indexAns+20;
    } 

    if(play=="Eden Hazard"){
        indexAns=indexAns+20;
    }
    
    for(let i=0;i<camp.length;i++){
           if(camp[i].checked==true){
             if(camp[i].value=="Stanford"){
                indexAns=indexAns+20;
             }
           }
           
       }

       if(turkey=="Ankara"){
        indexAns=indexAns+20;
       }
      
       for(let i=0;i<football.length;i++){
           if(football[i].checked==true){
               if(football[i].value=="Eden Hazard"){
            indexAns=indexAns+20;
               }
           }
       }

       if(prime=="Boris Johnson"){
        indexAns=indexAns+20;   
       }

       if(googleQn=="1998"){
        indexAns=indexAns+20;
       }

       if(nepal=="Kathmandu"){
        indexAns=indexAns+20;
       }

       if(java1==6){
        indexAns=indexAns+20;
       }

       if(champions=="Liverpool"){
        indexAns=indexAns+20;
       }

       let input=document.querySelector("#form").username.value;

        document.getElementById("correct").innerHTML="You got "+indexAns+" % "+" correct "+input;
        })
    }
    questionNumbers.innerHTML=counter+1;
    updateQn();
})



prevBtn.addEventListener("click",function(){
    if(counter>0){
        counter--;
        questionNumbers.innerHTML=questionNumbers.innerHTML-1;
    }
    updateQn();
})


 let correct=0;

function updateQn(){
    let currentIndex=indexes[counter];
    for(let i=0;i<questions.length;i++){
        if(i!=currentIndex){
            questions[i].classList.add("qn");
        }
        else{
            questions[i].classList.remove("qn");
        }
    }
}

function shuffleQuestions(array){
    for(var i=array.length-1;i>0;i--){
        var j=Math.floor(Math.random()*(i+1));
        var temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    return array;
}




