$('#webTicker').webTicker({
    height:'130px',
    speed: 150
});

// Quiz
let questionIndex = 0;
const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"]
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		]
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		]
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"]
	},
];


const headerContainer = document.querySelector('#header');
const description = document.querySelector('#desc');
const submitButton = document.querySelector('#btn');
const listContainer = document.querySelector('#answers')

function clearPage() {
    headerContainer.innerHTML = '';
    submitButton.innerHTML = '';
    description.innerHTML = '';
}

// clearPage()

function showQuestion() {
    // Question
    const headerTemplate = `<h2 class="quiz__title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;
    // Answers
	let answerNumber = 1; // значение для value
    for (answerText of questions[questionIndex]['answers']) {
        const questionTemplate = `<li class="form-group">
		<label>
		  <input type="checkbox" name="video-editor" class="real-checkbox" value="%number%">
		  <span class="custom-checkbox"></span>
		  <span>%answer%</span>
		</label>
	  </li>`
	  const answerHtml = questionTemplate.replace('%answer%', answerText).replace('%number%', answerNumber);
	  console.log(answerHtml);
	  listContainer.innerHTML += answerHtml;
	  listContainer.classList.add('answers');
	  answerNumber++; // увеличиваем значение для value
    }
}
clearPage()
showQuestion();