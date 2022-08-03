$('#webTicker').webTicker({
    height:'130px',
    speed: 150
});

// Quiz
let questionIndex = 0;
const questions = [
	{
		question: "Question #1",
		questionText: "Which specialist are you looking for?",
		answers: ["Video Editor", "Sales Manager", "Designer", "Content Manager", "Marketer", "Copywriter", "Developer", "Illustrator", "Lead Generator", "Assistant"]
	},
	{
		question: "Question #2",
		questionText: "Do you need a full-time or part-time employee?",
		answers: [
			"Full-time",
			"Part-time"
		]
	},
	{
		question: "Question #3",
		questionText: "What qualities should your candidate have?",
		answers: [
			"Punctual",
			"Responsible",
			"Multifunctional",
			"Introvert",
			"Good sense of humor",
			"Extrovert",
			"Kind",
			"Purposeful"
		]
	},
	{
		question: "Question #4",
		questionText: "Do you want to work with us?",
		answers: ["Yes", "No"]
	},
];


const headerContainer = document.querySelector('#header');
const description = document.querySelector('#desc');
const submitButton = document.querySelector('#btn');
const listContainer = document.querySelector('#answers');
const questionContainer = document.querySelector('.quiz__question-container');
const instructionContainer = document.querySelector('.quiz__instruction-container');
const buttonContainer = document.querySelector('.btn-wrapper');

const quizContainer = document.querySelector('#quizContainer');

function clearPage() {
    headerContainer.innerHTML = '';
    submitButton.innerHTML = '';
    description.innerHTML = '';
	submitButton.removeEventListener('click', clearPage)
}

function addBtnText() {
	submitButton.innerHTML = 'Next ';
	submitButton.classList.add('btn--questions');
	buttonContainer.classList.add('btn-wrapper--quiz')
	submitButton.removeEventListener('click', addBtnText);
}

function addInstructionText() {
	instructionContainer.innerHTML = `<p>You can select multiple items</p>`;
	submitButton.removeEventListener('click', addInstructionText);
}

function clearAnswers() {
	listContainer.innerHTML = '';
}

// clearPage()

function showQuestion() {
    // Question
    const headerTemplate = `<h2 class="quiz__title quiz__title--blue section-title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;
	// Question Text
	const questionTextTemplate = `<p class="quiz__question">%question%</p>`;
	const question = questionTextTemplate.replace('%question%', questions[questionIndex]['questionText']);
	questionContainer.innerHTML = question;

    // Answers
	let answerNumber = 1; // значение для value
    for (answerText of questions[questionIndex]['answers']) {
		if (questionIndex == 1) {
			listContainer.classList.add('second-question');
		} else {
			listContainer.classList.remove('second-question');
		};
		if (questionIndex == questions.length - 1) {
			const alterBtn = 
			`<div class="alter-btn-wrapper">
				<div class="yes-btn-wrapper"><button class="btn btn--yes" id="yes">Yes</button></div>
				<div class="no-img-wrapper"><img src="./assets/img/no-btn.png" alt=""></div>
			</div>`;
			listContainer.innerHTML = alterBtn;
			submitButton.style.display = 'none';
			instructionContainer.innerHTML = "";
			const getFormButton = document.querySelector('#yes');
			console.log(getFormButton);
			getFormButton.addEventListener('click', showForm);
		} else {
			const questionTemplate = `<li class="form-group">
			<label>
		  		<input type="checkbox" name="video-editor" class="real-checkbox" value="%number%">
		  		<span class="custom-checkbox"></span>
		  		<span>%answer%</span>
			</label>
	  		</li>`
	  		const answerHtml = questionTemplate.replace('%answer%', answerText).replace('%number%', answerNumber);
	  		listContainer.innerHTML += answerHtml;
	  		listContainer.classList.add('answers');
	  		answerNumber++; // увеличиваем значение для value
		}
    //     const questionTemplate = `<li class="form-group">
	// 	<label>
	// 	  <input type="checkbox" name="video-editor" class="real-checkbox" value="%number%">
	// 	  <span class="custom-checkbox"></span>
	// 	  <span>%answer%</span>
	// 	</label>
	//   </li>`
	//   const answerHtml = questionTemplate.replace('%answer%', answerText).replace('%number%', answerNumber);
	//   listContainer.innerHTML += answerHtml;
	//   listContainer.classList.add('answers');
	//   answerNumber++; // увеличиваем значение для value
    }
}

function checkAnswer() {
	let checkedAnswer = document.querySelector('input:checked');
	if (listContainer.innerHTML == "" || checkedAnswer != null) {
		clearAnswers();
		showQuestion();
		questionIndex++;
	} else {
		submitButton.blur();
	}	
}

// function clearLastPage() {
// 	quizContainer.innerHTML = "";
// }


function showForm() {
	const form = `<form class="quiz__form">
	<h3 class="quiz__form-title">Enter your email and get test results</h3>
	<div class="quiz__form-holder">
	  <input type="email" placeholder="Enter your e-mail">
	  <button class="btn btn--form">Send</button>
	</div>
  </form>`;
  quizContainer.innerHTML = form;
}


submitButton.addEventListener('click', clearPage);
submitButton.addEventListener('click', addBtnText);
submitButton.addEventListener('click', addInstructionText);
submitButton.addEventListener('click', checkAnswer);
// getFormButton.addEventListener('click', clearLastPage);
// getFormButton.addEventListener('click', showForm);


//Accordion

const accordionBlocks = document.querySelectorAll('.accord__block');
for (let block of accordionBlocks) {
	block.addEventListener('click', function() {
		this.classList.toggle('active')
	})
}

// FAQ

let labels = document.querySelectorAll('.faq__label');
for (let elem of labels) {
	elem.addEventListener('click', function() {
		this.classList.toggle('active');
		let content = this.nextElementSibling;
		content.classList.toggle('active');
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	})
}

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
    document.querySelector('.header').classList.toggle('header--active');
};