//* Queryselect all the components that will have interations
//* Created variable:
    //* checkCorrect = false
    //* wins=0
//* Check each quiz: 
    //* if the anserr is correct, trigger popup dialog says" you're correct"; 
    //* if the answer is not correct, trigger popup dialog says "you're incorrect"
//* Move to next quiz
//* Add the wrong-answered quiz to the "redo-list"
//* After 10 quizes, check correct-rate, winCondition is correct-rate >= 60%
//* If winRate >= 60%, they reveived the message "Congrats! you pass the quizes. Now you can move to next level"
//! how can I automatically move to the next quiz/page???
//! how can I check the correct-rate corss all html pages??

console.log("check")

let winTimes = 0 // when it is >= 6, users win
let quizList = 
[{
    question:"What is the meaning of the following word?",
    word:"一",
    option1:"One",
    option2:"Two",
    option3:"Three",
    option4:"Four",
    correctOption: "One"},

{
    question:"What is the meaning of the following word?",
    word:"九",
    option1:"Two",
    option2:"Five",
    option3:"Nine",
    option4:"Ten",
    correctOption: "Nine"},

]


const optionEls = document.querySelectorAll(".option")
// const quiz1_Option1 = document.querySelector("#quiz1-option1")
// const quiz1_Option2 = document.querySelector("#quiz1-option2")
// const quiz1_Option3 = document.querySelector("#quiz1-option3")
// const quiz1_Option4 = document.querySelector("#quiz1-option4")

const checkmarkEls = document.querySelectorAll(".checkmark")
const modalEl = document.querySelector(".moda")
const correctDialogEl = document.querySelector("#correctModal")
const wrongDialogEl = document.querySelector("#wrongModal")
const correctCloseEl = document.querySelector("#correctClose")
const wrongCloseEl = document.querySelector("#wrongClose")

//* init() will let me initialize the first question
//* update quiz() will be called in init function on first render
//* 

function init() {
    updateQuiz()

}

function checkCorrect() {
    if (this.id === "correct") {
        correctDialogEl.showModal()
        winTimes += 1
    } 
    if(this.id === "wrong") {
        wrongDialogEl.showModal()
    }
}
//! why the function below doesn't work???
// function checkCorrect(event) {
//     if (event.target.id === "correct" ) {
//         console.log("correct")
//     }
// }

function updateQuiz() {
//* update

}






checkmarkEls.forEach((checkmarkEl) => {
    checkmarkEl.addEventListener("click", checkCorrect)
})

// close the dialog by clicking the close button
correctCloseEl.addEventListener("click", () => {
    correctDialogEl.close()
    updateQuiz()
})
wrongCloseEl.addEventListener("click", () => {
    wrongDialogEl.close()
    updateQuiz()
})
