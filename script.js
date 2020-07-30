// task #1 to hide 'notify-section' done at CSS file line 98

// task #2 generate random 4 digit pin
document
  .getElementById("random_generator")
  .addEventListener("click", function () {
    let numberGenerated = document.getElementById("random_number");
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    numberGenerated = randomNumber;
    document.getElementById("random_number").value = randomNumber;
  });

// task #3 to create function to type value on the keypad

function inputValue(num) {
  var inputNum = num;
  document.getElementById("resultScreen").value += inputNum;
  return inputNum;
}

// task #4 to create function to compare value and display message

function submitButton() {
  const numKeypad = document.getElementById("resultScreen").value;
  const keypadNum = parseInt(numKeypad);
  const randomNumber = document.getElementById("random_number").value;

  if (keypadNum == randomNumber) {
    document.getElementById("pin-match").style.display = "block";
    document.getElementById("pin-noMatch").style.display = "none";
  } else {
    document.getElementById("pin-match").style.display = "none";
    document.getElementById("pin-noMatch").style.display = "block";
  }
  // count number of try
  const count = document.getElementById("counter").innerText;
  const countNew = parseInt(count);
  const updateValue = countNew - 1;
  if (updateValue >= 0) {
    document.getElementById("counter").innerText = updateValue;
  }
}

// additional function for keypad button to delete/clear screen
function deleteSingleDigit() {
  const screenView = document.getElementById("resultScreen");
  screenView.value = screenView.value.slice(0, screenView.value.length - 1);
}
function clearAll() {
  document.getElementById("resultScreen").value = " ";
}
