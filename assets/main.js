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
// const textBlocks = document.querySelectorAll('.quiz__text')
const description = document.querySelector('#desc');
const submitButton = document.querySelector('#btn');

function clearPage() {
    headerContainer.innerHTML = '';
    // for (let block of textBlocks) {
    //     block.innerHTML = '';
    // };
    submitButton.innerHTML = '';
    description.innerHTML = '';
}

// clearPage()

function showQuestion() {
    // Question
    const headerTemplate = `<h2 class="quiz__title" id="header">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    console.log(title);
    headerContainer.innerHTML = title;
    // Answers
    // for (let item of questions[questionIndex]['answers']) {
    //     const questionTemplate = 
    // }
}
// clearPage()
// showQuestion();