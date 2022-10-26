var myQuestions = [
	{
		question: "Är Jorden platt?",
		answers: {
			a: 'Ja',
			b: 'Nej',
		},
		correctAnswer: 'b'
	},
	{
		question: "Är Iphone bättre än Android?",
		answers: {
			a: 'Ja',
			b: 'Nej',
		},
		correctAnswer: 'a'
	},
	{
		question: "Är pizza gott?",
		answers: {
			a: 'Ja',
			b: 'Nej',
			
		},
		correctAnswer: 'a'
	},
	{
		question: "Har en rektangel 6 hörn?",
		answers: {
			a: 'Ja',
			b: 'Nej',
			
		},
		correctAnswer: 'b'
	},
	{
		question: "Har en triangel 3 hörn?",
		answers: {
			a: 'Ja',
			b: 'Nej',
			
		},
		correctAnswer: 'a'
	},
	{
		question: "Är jordens omloppsbana runt Pluto?",
		answers: {
			a: 'Ja',
			b: 'Nej',
		},
		correctAnswer: 'b'
	},
	{
		question: "Är solen den största planeten?",
		answers: {
			a: 'Ja',
			b: 'Nej',
		},
		correctAnswer: 'b'
	},
	{
		question: "Är Lionel Messi bättre än Cristiano Ronaldo?",
		answers: {
			a: 'Ja',
			b: 'Nej',
		},
		correctAnswer: 'a'
	},
	{
		question: "Är Ankademin en bra skola?",
		answers: {
			a: 'Ja',
			b: 'Nej',
		},
		correctAnswer: 'a'
	},
	{
		question: "Är kodning roligt?",
		answers: {
			a: 'Ja',
			b: 'Nej',
		},
		correctAnswer: 'a'
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var restartButton = document.getElementById('restart');
const darkmodeButton = document.getElementById('dark-mode')

darkmodeButton.addEventListener('click', toggelDarkMode)


function toggelDarkMode() {
    var element = document.body;
  
    element.classList.toggle('dark-mode');
    element.classList.toggle('container-dark')
  }

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton, restartButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton, restartButton){

	function showQuestions(questions, quizContainer){
		// vi behöver en plats för att lagra output och svarsalternativ
		var output = [];
		var answers;

		// för varje fråga...
		for(var i=0; i<questions.length; i++){
			
			// återställ först listan med svar
			answers = [];

			// för varje tillgängligt svar...
			for(letter in questions[i].answers){

				// ...lägg till en html-radioknapp
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// lägg till denna fråga och dess svar till utdata
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// kombinera slutligen vår utdatalista till en sträng av html och lägg den på sidan
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// samla svarsbehållare från vårt frågesport
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// hålla reda på användarens svar
		var userAnswer = '';
		var numCorrect = 0;
		
		// för varje fråga...
		for(var i=0; i<questions.length; i++){

			// hitta valt svar
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// om svaret är rätt
			if(userAnswer===questions[i].correctAnswer)
			{
				// lägg till antalet korrekta svar
				numCorrect++;				
				// färga svaren gröna
				answerContainers[i].style.color = 'lightgreen';
			}
			// om svaret är fel eller tomt
			else
			{
				// färga svaren röda
				answerContainers[i].style.color = 'red';
			}
			
		}

		// visa antalet rätta svar med hjälp av färger
		if(numCorrect >= 7)
		{
			resultsContainer.style.color ='lightgreen';
			alert("Grattis, Mycket väl godkänt!!");
		}
		else if(numCorrect>=5)
		{
			resultsContainer.style.color ='orange';
			alert("Det gick okej, Godkänt!!");
		}
		else
		{
			resultsContainer.style.color ='red';
			alert("Underkänt, bättre lycka nästa gång!!");
		}
		// visa antalet rätta svar
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// visa frågor direkt
	showQuestions(questions, quizContainer);
	
	// vid inlämning, visa resultat
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
	
	
}