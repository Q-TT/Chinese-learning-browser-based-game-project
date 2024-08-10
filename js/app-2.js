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
    questionText:"1. What is the pronunciation of the following word?",
    questionChinese:"一",
    option1:"assest/pronunciation_zh_一.mp3",
    option2:"assest/pronunciation_zh_九.mp3",
    option3:"assest/pronunciation_zh_七.mp3",
    option4:"assest/pronunciation_zh_三.mp3",
    correctOption: "option1",
    redo: false},

{
    questionText:"2. What is the pronunciation of the following word?",
    questionChinese:"九",
    option1:"assest/pronunciation_zh_二.mp3",
    option2:"assest/pronunciation_zh_五.mp3",
    option3:"assest/pronunciation_zh_九.mp3",
    option4:"assest/pronunciation_zh_八.mp3",
    correctOption: "option3",
    redo: false},
{
    questionText:"3. What is the pronunciation of the following word?",
    questionChinese:"四",
    option1:"assest/pronunciation_zh_式.mp3",
    option2:"assest/pronunciation_zh_四.mp3",
    option3:"assest/pronunciation_zh_这.mp3",
    option4:"assest/pronunciation_zh_高.mp3",
    correctOption: "option2",
    redo: false},
{
    questionText:"4. What is the pronunciation of the following word?",
    questionChinese:"千",
    option1:"assest/pronunciation_zh_六.mp3",
    option2:"assest/pronunciation_zh_八.mp3",
    option3:"assest/pronunciation_zh_五.mp3",
    option4:"assest/pronunciation_zh_千.mp3",
    correctOption: "option4",
    redo: false},
{
    questionText:"5. What is the pronunciation of the following word?",
    questionChinese:"五",
    option1:"assest/pronunciation_zh_五.mp3",
    option2:"assest/pronunciation_zh_九.mp3",
    option3:"assest/pronunciation_zh_二.mp3",
    option4:"assest/pronunciation_zh_不.mp3",
    correctOption: "option1",
    redo: false},
{
    questionText:"6. What is the pronunciation of the following word?",
    questionChinese:"万",
    option1:"assest/pronunciation_zh_这.mp3",
    option2:"assest/pronunciation_zh_万.mp3",
    option3:"assest/pronunciation_zh_六.mp3",
    option4:"assest/pronunciation_zh_一.mp3",
    correctOption: "option2",
    redo: false},
{
    questionText:"7. What is the pronunciation of the following word?",
    questionChinese:"八",
    option1:"assest/pronunciation_zh_二.mp3",
    option2:"assest/pronunciation_zh_八.mp3",
    option3:"assest/pronunciation_zh_三.mp3",
    option4:"assest/pronunciation_zh_式.mp3",
    correctOption: "option2",
    redo: false},
{
    questionText:"8. What is the pronunciation of the following word?",
    questionChinese:"七",
    option1:"assest/pronunciation_zh_万.mp3",
    option2:"assest/pronunciation_zh_九.mp3",
    option3:"assest/pronunciation_zh_七.mp3",
    option4:"assest/pronunciation_zh_千.mp3",
    correctOption: "option3",
    redo: false},
{
    questionText:"9. What is the pronunciation of the following word?",
    questionChinese:"三",
    option1:"assest/pronunciation_zh_高.mp3",
    option2:"assest/pronunciation_zh_这.mp3",
    option3:"assest/pronunciation_zh_六.mp3",
    option4:"assest/pronunciation_zh_三.mp3",
    correctOption: "option4",
    redo: false},
{
    questionText:"10. What is the pronunciation of the following word?",
    questionChinese:"六",
    option1:"assest/pronunciation_zh_六.mp3",
    option2:"assest/pronunciation_zh_一.mp3",
    option3:"assest/pronunciation_zh_七.mp3",
    option4:"assest/pronunciation_zh_五.mp3",
    correctOption: "option1",
    redo: false},
]



const optionEls = document.querySelectorAll(".option")

const radioButEls = document.querySelectorAll("input")
const modalEl = document.querySelector(".moda")

const correctDialogEl = document.querySelector("#correctModal")
const wrongDialogEl = document.querySelector("#wrongModal")
const correctCloseEl = document.querySelector("#correctClose")
const wrongCloseEl = document.querySelector("#wrongClose")

const winDialogEl = document.querySelector("#winModal")
const loseDialogEl = document.querySelector("#loseModal")


const questionTextEl = document.querySelector(".question-text")
const questionChineseEl = document.querySelector(".question-chinese-pron")
const option1El = document.querySelector("#option1")
const option2El = document.querySelector("#option2")
const option3El = document.querySelector("#option3")
const option4El = document.querySelector("#option4")

const redoButEl = document.querySelector("#redoBut")
const backToHomeEl = document.querySelector("#backToHome")
const nextLevelEl = document.querySelector("#nextLevel")


init()

function init() {
    updateQuiz()
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

/*-------------------------------------------Code Graveyard section----------------------------------*/
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
