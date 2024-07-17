//Question bank
var questionBank=[
    {
        question:' What does HTML stand for?',
        option:['Hyperlinks and Text Markup Language','Home Tool Markup Language','Hyper Text Markup Language','Cascading Style Sheets'],
        answer:'Hyper Text Markup Language'
    },
    {
        question:'How do  you create a function in Javascript?',
        option:['function.myFunction()','function=myfunction()','function.myfunction{}',' function=myfunction{}'],
        answer:'function=myfunction()'
    },
    {
        question:'What does CSS stands for?',
        option:['Common Styles Sheets','Colorful Style Sheets','Computer Style Steets','Cascading Style Sheets'],
        answer:'Cascading Style Sheets'
    },
    {
        question:'What is the purpose of this. keyword in JavaScript?',
        option:['It refers to the current function','It refers to the current object','It refers to the parent object','It is used for comments'],
        answer:'It refers to the current function'
    },
    {
        question:'Javascript is an ______ language ',
        option:['Generic programming','Object oriented',' Machine independent','programming'],
        answer:'Object oriented'
    },
]
var question=document.getElementById('question');
var quizContainer=document.getElementById('quiz-container');
var scorecard=document.getElementById('scorecard');
var option0=document.getElementById('option0');
var option1=document.getElementById('option1');
var option2=document.getElementById('option2');
var option3=document.getElementById('option3');
var next=document.querySelector('.next');

var points=document.getElementById('score');
var span=document.querySelectorAll('span');
var i=0;
var score=0;

//function to display question
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML='Q.' +(i+1)+' '+questionBank[i].question;
    option0.innerHTML=questionBank[i].option[0];
    option1.innerHTML=questionBank[i].option[1];
    option2.innerHTML=questionBank[i].option[2];
    option3.innerHTML=questionBank[i].option[3];

    stat.innerHTML="Question"+''+(i+1)+' '+'of'+' '+questionBank.length;
     
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer&&score<questionBank.length)
    {
        score=score+1;
        document.getElementById(e.id).style.background="limegreen";
    }
    else{
        document.getElementById(e.id).style.background="tomato";
    }
    setTimeout(nextQuestion,300);
}
//to display nxt ques
function  nextQuestion(){
    if(i<questionBank.length-1){
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML=score+'/'+questionBank.length;
        quizContainer.style.display='none';
        scoreboard.style.display='block'
    }
}
//nxt  btn
next.addEventListener('click',nextQuestion);

//back
function backToQuiz(){
    location.reload();
}
//check ans
function checkAnswer(){
         var answerBank=document.getElementById('answerBank');
         var answers=document.getElementById('answers');
         answerBank.style.display='block';
         scoreboard.style.display='block';
         for(var a=0;a<questionBank.length;a++)
         {
            var list=document.createElement('li');
            list.innerHTML=questionBank[a].answer;
            answers.appendChild(list);
         }
}
displayQuestion();



















