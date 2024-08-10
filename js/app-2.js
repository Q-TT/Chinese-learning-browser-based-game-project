console.log("check")

let turn = 0 // start from 0, add 1 ecah time users make s seletion
let winTimes = 0 // when it is >= 6, users win

let audio1 = new Audio(); audio1.src = '';
let audio2 = new Audio(); audio1.src = '';
let audio3 = new Audio(); audio1.src = '';
let audio4 = new Audio(); audio1.src = '';

let redoList = []
let quizList = 
[{
    questionText:"1. What is the meaning of the following word?",
    questionChinese:"一",
    option1:"assest/pronunciation_zh_一.mp3",
    option2:"assest/pronunciation_zh_九.mp3",
    option3:"assest/pronunciation_zh_一.mp3",
    option4:"assest/pronunciation_zh_一.mp3",
    correctOption: "option1",
    redo: false},

{
    questionText:"2. What is the meaning of the following word?",
    questionChinese:"九",
    option1:"assest/pronunciation_zh_一.mp3",
    option2:"Five",
    option3:"Nine",
    option4:"Ten",
    correctOption: "option3",
    redo: false},
{
    questionText:"3. What is the meaning of the following word?",
    questionChinese:"四",
    option1:"Seven",
    option2:"Four",
    option3:"Eleven",
    option4:"Three",
    correctOption: "option2",
    redo: false},
{
    questionText:"4. What is the meaning of the following word?",
    questionChinese:"千",
    option1:"Seven",
    option2:"Two",
    option3:"Five",
    option4:"Thousand",
    correctOption: "option4",
    redo: false},
{
    questionText:"5. What is the meaning of the following word?",
    questionChinese:"五",
    option1:"Five",
    option2:"Six",
    option3:"Three",
    option4:"Ten",
    correctOption: "option1",
    redo: false},
{
    questionText:"6. What is the meaning of the following word?",
    questionChinese:"万",
    option1:"Two thousands",
    option2:"Ten thousands",
    option3:"Thirteen",
    option4:"Six",
    correctOption: "option2",
    redo: false},
{
    questionText:"7. What is the meaning of the following word?",
    questionChinese:"八",
    option1:"Five thousands",
    option2:"Eight",
    option3:"Six",
    option4:"Ten",
    correctOption: "option2",
    redo: false},
{
    questionText:"8. What is the meaning of the following word?",
    questionChinese:"七",
    option1:"Eleven",
    option2:"Hundred",
    option3:"Seven",
    option4:"Two",
    correctOption: "option3",
    redo: false},
{
    questionText:"9. What is the meaning of the following word?",
    questionChinese:"三",
    option1:"Twelve",
    option2:"Forteen",
    option3:"Ten",
    option4:"Three",
    correctOption: "option4",
    redo: false},
{
    questionText:"10. What is the meaning of the following word?",
    questionChinese:"六",
    option1:"Six",
    option2:"Four",
    option3:"Two",
    option4:"Ten",
    correctOption: "option1",
    redo: false},
]



const optionEls = document.querySelectorAll(".option")
// const quiz1_Option1 = document.querySelector("#quiz1-option1")
// const quiz1_Option2 = document.querySelector("#quiz1-option2")
// const quiz1_Option3 = document.querySelector("#quiz1-option3")
// const quiz1_Option4 = document.querySelector("#quiz1-option4")

const radioButEls = document.querySelectorAll("input")
const modalEl = document.querySelector(".moda")

const correctDialogEl = document.querySelector("#correctModal")
const wrongDialogEl = document.querySelector("#wrongModal")
const correctCloseEl = document.querySelector("#correctClose")
const wrongCloseEl = document.querySelector("#wrongClose")

const winDialogEl = document.querySelector("#winModal")
const loseDialogEl = document.querySelector("#loseModal")


const questionTextEl = document.querySelector(".question-text")
const questionChineseEl = document.querySelector(".question-chinese")
const option1El = document.querySelector("#option1")
const option2El = document.querySelector("#option2")
const option3El = document.querySelector("#option3")
const option4El = document.querySelector("#option4")

const redoButEl = document.querySelector("#redoBut")
const backToHomeEl = document.querySelector("#backToHome")
const nextLevelEl = document.querySelector("#nextLevel")

//* init() will let me initialize the first question
//* update quiz() will be called in init function on first render

init()

function init() {
    updateQuiz()
    console.log(option1El)  
}

// check if ach quiz is correct, if yes, wintine + 1. if no, push the current quiz to the redo list
function checkCorrect() {
    if (this.value === quizList[turn].correctOption) {
        correctDialogEl.showModal()
        winTimes += 1
    } 
    if(this.value !== quizList[turn].correctOption) {
        wrongDialogEl.showModal()
        redoList.push(quizList[turn])
    }
}
 
//check if users have more than 60% winrate, if so, show the win card. if not show the lose card
function checkIfWin () {
    if(turn === 10 && winTimes >= 6) {
        winDialogEl.showModal()
        console.log("win") //test
        console.log(redoList) //test
    } else if (turn === 10) {
        loseDialogEl.showModal()
    }
}
        
// update quiz content and clear the check of the radio button   
function updateQuiz() {
    questionTextEl.textContent = quizList[turn].questionText
    questionChineseEl.textContent = quizList[turn].questionChinese
    audio1.src = quizList[turn].option1
    audio2.src = quizList[turn].option2
    audio3.src = quizList[turn].option3
    audio4.src = quizList[turn].option4

    radioButEls.forEach((radioButEl) => {
        radioButEl.checked = false
    })

    console.log(turn)
    console.log(winTimes)
}

//update quiz content to reDoList
// if turn <= redoList.length, keep going, otherwise, exit the redo round and show them a card "congrats for finishing the redo the quizes"

// function updateToRedoList () {
//     questionTextEl.textContent = redoList[turn].questionText
//     questionChineseEl.textContent = redoList[turn].questionChinese
//     option1El.textContent = redoList[turn].option1
//     option2El.textContent = redoList[turn].option2
//     option3El.textContent = redoList[turn].option3
//     option4El.textContent = redoList[turn].option4

//     radioButEls.forEach((radioButEl) => {
//         radioButEl.checked = false
//     })
// }


// check of the selectiois correct when click on the radio button
radioButEls.forEach((radioButEl) => {
    radioButEl.addEventListener("click", checkCorrect)
})


// close the dialog by clicking the close button and move forward
correctCloseEl.addEventListener("click", () => {
    correctDialogEl.close()
    turn += 1
    checkIfWin()
    updateQuiz()
    
})

wrongCloseEl.addEventListener("click", () => {
    wrongDialogEl.close()
    turn += 1
    checkIfWin()
    updateQuiz()
})


// when users click on redo button, update the content to redoList
redoButEl.addEventListener("click", () => {
    // close the current modal
    winDialogEl.close()
    loseDialogEl.close()

    //reset turn to 0
    turn = 0

    //trigger the redolist
    updateToRedoList()
    console.log("end of redobutton")

})

option1El.addEventListener("click", () => {
    option1El.play()
})