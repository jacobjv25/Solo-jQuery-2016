var red = 0;
var yellow = 0;
var green = 0;
var blue = 0;

$(document).ready(function(){
  console.log('script is loaded');

  $('button').on('click', createBox);

  });

function createBox() {
  var color = $(this).data('color');
  if (color == "red") {
    red++;
    $('#red').empty();
    $('#red').append(red);
    console.log("Total number of red boxes: " + red);
  } else if (color == 'yellow') {
    yellow++;
    $('#yellow').empty();
    $('#yellow').append(yellow);
    console.log("Total number of yellow boxes: " + yellow);
  } else if (color == "green") {
    green++;
    $('#green').empty();
    $('#green').append(green);
    console.log("Total number of green boxes: " + green);
  }else if (color == "blue") {
    blue++
    $('#blue').empty();
    $('#blue').append(blue);
    console.log("Total number of blue boxes: " + blue);
  }
  console.log("Creating a " + color + " box.");
  $('.container').append("<div class = 'color-cube' style = 'background-color: " + color + ";'></div>")

};
