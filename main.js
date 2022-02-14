let quiz=document.getElementById("quiz");
let ques= document.getElementById("question");
let opt1=document.getElementById("option1");
let opt2=document.getElementById("option2");
let opt3=document.getElementById("option3");
let opt4=document.getElementById("option4");
let opt5=document.getElementById("option5");
let opt6=document.getElementById("option6");
let res=document.getElementById("result");
let nextbutton= document.getElementById("next");
let q=document.getElementById('quit');

let allQuestions=questions.length;
let score=0;
let quesindex=0;

function displayQuestion(quesindex)
{
	ques.textContent=quesindex+1+". "+questions[quesindex][0];
	opt1.textContent=questions[quesindex][1];
	opt2.textContent=questions[quesindex][2];
	opt3.textContent=questions[quesindex][3];
	opt4.textContent=questions[quesindex][4];
	opt5.textContent=questions[quesindex][5];
	opt6.textContent=questions[quesindex][6];
	 return;// body...
};

displayQuestion(0);

function score10() {
	document.getElementById("result").innerHTML = score+=10;
}

function score20() {
	document.getElementById("result").innerHTML = score+=20;
}


function score30() {
	document.getElementById("result").innerHTML = score+=30;
}



function score40() {
	document.getElementById("result").innerHTML = score+=40;
}



function score50() {
	document.getElementById("result").innerHTML = score+=50;
}



function next()
{
	let selected_ans= document.querySelector('input[type=radio]:checked');
	selected_ans.checked=false;
	     quesindex++;

	     if(quesindex==allQuestions-1)
	     	nextbutton.textContent="Finish";
	 
	     if(quesindex==allQuestions)
	     {
	         quiz.style.display='none';
          result.style.display='block';
		  document.getElementById('result').innerHTML=score;
		  allresults.style.display='block';
             return;
	     }
        displayQuestion(quesindex);

}

function refresh(){
			 window.location.reload("Refresh")
		 }
