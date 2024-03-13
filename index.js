let timerFirst = document.getElementById('timer-first')
const btnFirst = document.getElementById('button-first')
let timerSecond = document.getElementById('timer-second')
const btnSecond = document.getElementById('button-second')

const hideBtnTimer = document.getElementById('hide-button-timer')
const hideBtnTextarea = document.getElementById('hide-button-textarea')
const textareaEl = document.getElementById('writing-section')
let isHideBtnTimer = true
let isHideBtnTextarea = true

// HIDE ELEMENTS 
hideBtnTimer.addEventListener('click', () => {
  if(isHideBtnTimer) {
    hideBtnTimer.innerText = `Show 
                              Timer`
    timerFirst.style.visibility = 'hidden'
    btnFirst.style.visibility = 'hidden'
    timerSecond.style.visibility = "hidden"
    btnSecond.style.visibility = "hidden"
    isHideBtnTimer = false
  } else {
    timerFirst.style.visibility = "visible"
    btnFirst.style.visibility = "visible"
    timerSecond.style.visibility = "visible"
    btnSecond.style.visibility = "visible"
    isHideBtnTimer = true
    hideBtnTimer.innerText = `Hide 
                              Timer`
  }
})

hideBtnTextarea.addEventListener('click', () => {
  if(isHideBtnTextarea) {
    hideBtnTextarea.innerText = `Show
                                  Input`
    textareaEl.style.visibility = "hidden"
    isHideBtnTextarea = false
  } else {
    textareaEl.style.visibility = "visible"
    isHideBtnTextarea = true
    hideBtnTextarea.innerText = `Hide
                                  Input`
  }

})

timerFirst.innerText = "01 : 30"
timerSecond.innerText = "02 : 00"

let seconds = 30;
let count = 90;
let countSecond = 120;
let secondsSecond = 59;
let newSecondsSecond = 59;

let newSeconds = 59;
let intervalFirst = ''
let intervalSecond = ''
let stateFirst = true
let stateSecond = true


// FIRST TIMER FOR 1 MINUTE AND 30 MIN

btnFirst.addEventListener("click", () => {
 if(stateFirst == true) {
  btnFirst.innerText = "Stop"
  makeIterationFirst()
  stateFirst = false
 } else {
  btnFirst.innerText = "Start"
  clearInterval(intervalFirst);
  stateFirst = true
 }
})

function makeIterationFirst () {
  if(count >= 60) {
     timerFirst.innerText = seconds >= 10 ? "01 : " + seconds : "01 : 0" + seconds 
     seconds -= 1;
     count -= 1;
    intervalFirst = setTimeout(makeIterationFirst, 1000);  // 1 second waiting
  } else if (count < 60 && count > 0) {
   console.log(count)
    timerFirst.innerText = newSeconds >= 10 ? "00 : " + newSeconds : "00 : 0" + newSeconds
    newSeconds -= 1;
    count -=1;
    intervalFirst = setTimeout(makeIterationFirst, 1000);  // 1 second waiting
  } else {
       timerFirst.innerText = "Done!"
       console.log('Done!');
   }
};

// SECOND TIMER FOR 2 MINUTES
btnSecond.addEventListener("click", () => {
  if(stateSecond == true) {
    btnSecond.innerText = "Stop"
    makeIterationSecond()
    stateSecond = false
   } else {
    btnSecond.innerText = "Start"
    clearInterval(intervalSecond);
    stateSecond = true
   }
  })

function makeIterationSecond () {
  console.log(countSecond)
  if(countSecond >= 60 && countSecond === 120 ) {
      timerSecond.innerText = "02 : 00"
      countSecond -= 1;
      intervalSecond = setTimeout(makeIterationSecond, 1000);
    } else if(countSecond >= 60) {
     timerSecond.innerText = secondsSecond >= 10 ? "01 : " + secondsSecond : "01 : 0" + secondsSecond 
     secondsSecond -= 1;
     countSecond -= 1;
    intervalSecond = setTimeout(makeIterationSecond, 1000);  // 1 second waiting
  } else if (countSecond < 60 && countSecond > 0) {
    timerSecond.innerText = newSecondsSecond >= 10 ? "00 : " + newSecondsSecond : "00 : 0" + newSecondsSecond
    newSecondsSecond -= 1;
    countSecond -=1;
    intervalSecond = setTimeout(makeIterationSecond, 1000);  // 1 second waiting
  } else {
       timerSecond.innerText = "Done!"
       console.log('Done!');
   }
};
// TO START A TIMER AUTOMATICALLY: //  setTimeout(makeIterationFirst, 1000);  // 1 second waiting

// TO UPLOAD AND DISPLAY AN IMAGE TO THE PAGE
const inputElOne = document.getElementById('file-one')
const fileLabelOne = document.getElementById('file-label-one')

inputElOne.addEventListener('change', loadFileOne)

function loadFileOne(event) {
  fileLabelOne.style.display = "none";
	const imageOne = document.getElementById('output-one');
  imageOne.style.display = "block";
    imageOne.src = URL.createObjectURL(event.target.files[0]);
};




 
