let timerFirst = document.getElementById('timer-first')
const btnFirst = document.getElementById('button-first')
let timerSecond = document.getElementById('timer-second')
const btnSecond = document.getElementById('button-second')
console.log(timerFirst, timerSecond)

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

// setTimeout(makeIteration, 1000);  // 1 second waiting

const inputElOne = document.getElementById('file-one')
const fileLabelOne = document.getElementById('file-label-one')

// const inputElTwo = document.getElementById('file-two')
// const fileLabelTwo = document.getElementById('file-label-two')

inputElOne.addEventListener('change', loadFileOne)
// inputElTwo.addEventListener('change', loadFileTwo)


function loadFileOne(event) {
  fileLabelOne.style.display = "none";
	const imageOne = document.getElementById('output-one');
  imageOne.style.display = "block";
    imageOne.src = URL.createObjectURL(event.target.files[0]);
};

// function loadFileTwo(event) {
//   fileLabelTwo.style.display = "none";
// 	const imageTwo = document.getElementById('output-two');
//   imageTwo.style.display = "block";
//     imageTwo.src = URL.createObjectURL(event.target.files[0]);
// };


 
