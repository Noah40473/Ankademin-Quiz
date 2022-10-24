var myQuestions = [
	{
		question: "Är Jorden plat?",
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
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	},{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	},{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	},{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
const darkmodeButton = document.getElementById('dark-mode')

darkmodeButton.addEventListener('click', toggelDarkMode)


function toggelDarkMode() {
    var element = document.body;
  
    element.classList.toggle('dark-mode');
    element.classList.toggle('container-dark')
  }

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

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
			if(userAnswer===questions[i].correctAnswer){
				// lägg till antalet korrekta svar
				numCorrect++;
				
				// färga svaren gröna
				answerContainers[i].style.color = 'lightgreen';
			}
			// om svaret är fel eller tomt
			else{
				// färga svaren röda
				answerContainers[i].style.color = 'red';
			}
			
		}

		// visa antalet rätta svar av totalt
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// visa frågor direkt
	showQuestions(questions, quizContainer);
	
	// vid inlämning, visa resultat
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}