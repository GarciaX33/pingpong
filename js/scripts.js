// JQuery User Interface Logic
$(document).ready(function() {
  $('form#ping-pong').submit(function(event) {
    var inputNum = $('input#number1').val();
    event.preventDefault();

    outputAnswer(pongGen(inputNum));

  });
});

// Business Logic
var pongGen = function(inputNum) {
  var numberArr = [];
  if (inputNum < 0) {
    for (var i = -1; i >= inputNum; i--) {
      numberArr.push(i);
    }
    numberArr.forEach(function(number) {
      if (number % 15 === 0) {
        numberArr[-number-1] = 'pingpong';
      } else if (number % 3 === 0) {
        numberArr[-number-1] = 'ping';
      } else if (number % 5 === 0) {
        numberArr[-number-1] = 'pong';
      }
    });
    // Greater Than Zero, opposite of the negatives
  } else if (inputNum > 0) {
      for (var i = 1; i <= inputNum; i++) {
        numberArr.push(i);
      }
      numberArr.forEach(function(number) {
        if (number % 15 === 0) {
          numberArr[number-1] = 'pingpong';
        } else if (number % 3 === 0) {
          numberArr[number-1] = 'ping';
        } else if (number % 5 === 0) {
          numberArr[number-1] = 'pong';
        }
      });
  }
  return numberArr;
};

var outputAnswer = function(outputArr) {
    $('ul#answer').empty();
    outputArr.forEach(function(item) {
    $('ul#answer').append('<li>' + item + '</li>');
  });
  return;
}
