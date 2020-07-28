// task #1 to hide 'notify-section' done at CSS file

// task #2 generate random 4 digit pin
document
  .getElementById("random_generator")
  .addEventListener("click", function () {
    let numberGenerated = document.getElementById("random_number");
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    numberGenerated = randomNumber;
    document.getElementById("random_number").value = randomNumber;
  });
