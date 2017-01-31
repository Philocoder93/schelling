$(document).ready(function () {
  arrayToDiv(fillArray(arrayWithinArray(50)));
});

$('.click').on('click', function() {
  delDiv();
  arrayToDiv(fillArray(arrayWithinArray(50)));
  console.log('done');
});

$('.next').on('click', function() {
  moveOut(z);
  delDiv();
  arrayToDiv(z);
  console.log('done');
})
//by changing the values in the above code one can change how big one wants
//the board to be

function arrayWithinArray(x) {
  z = [];
  for (i=0;i<x;i++) {
    z.push(new Array(x));
  }
  return z;
};

//by changing the values in the function below you can set the relative chance of
//spawning any of the three values
function fillArray(z) {
  var length = z.length;
  for (i=0;i<length;i++) {
    for (j=0;j<length;j++) {
      var die = Math.random();
      if (die<0.33) {
        z[i][j] = "red";
      }
      else if (die<0.66) {
        z[i][j] = "blue";
      }
      else {
        z[i][j] = "white";
      }
    }
  }
  return z;
};

function arrayToDiv(z) {
  var length = z.length;
  for (i=0;i<length;i++) {
    for (j=0;j<length;j++) {
      if (z[i][j] == 'red') {
        $('main').append('<div class="box x:'+i+' y:'+j+' red"></div>');
      }
      else if (z[i][j] == 'blue') {
        $('main').append('<div class="box x:'+i+' y:'+j+' blue"></div>');
      }
      else {
        $('main').append('<div class="box x:'+i+' y:'+j+' white"></div>');
      }
    }
  }
};

function delDiv() {
  $('main').find('*').remove();
};

// by changing the values in the code below one can change how reactive each piece is

function checkRed(z,i,j) {
  var count = 0;
  try {
    count = (z[i][j+1] == 'red')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i][j-1] == 'red')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i+1][j] == 'red')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i-1][j] == 'red')? count+1 : count;
  } catch (e) {
  }
  return (count == 1)? true : false;
};

function checkBlue(z,i,j) {
  var count = 0;
  try {
    count = (z[i][j+1] == 'blue')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i][j-1] == 'blue')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i+1][j] == 'blue')? count+1 : count;
  } catch (e) {
  }
  try {
    count = (z[i-1][j] == 'blue')? count+1 : count;
  } catch (e) {
  }
  // console.log(count);
  return (count == 1)? true : false;
};

function checkWhite(z,i,j) {
  var dir = null;
  try {
    dir = (z[i][j+1] == 'white')? i+":"+(j+1) : dir;
  } catch(e) {
  }
  try {
    dir = (z[i][j-1] == 'white')? i+":"+(j-1) : dir;
  } catch(e) {
  }
  try {
    dir = (z[i+1][j] == 'white')? (i+1)+":"+j : dir;
  } catch(e) {
  }
  try {
    dir = (z[i-1][j] == 'white')? (i-1)+":"+j : dir;
  } catch(e) {
  }
  return (dir == null)? false : true;
};

function switchWhite(z,i,j) {
  try {
    if (z[i][j+1] == 'white') {
      // console.log(i+":"+j);
      var val1 = z[i][j+1];
      var val2 = z[i][j];
      z[i][j+1] = val2;
      z[i][j] = val1;
    }
  } catch(e) {
  }
  try {
    if (z[i][j-1] == 'white') {
      // console.log(i+":"+j);
      var val1 = z[i][j-1];
      var val2 = z[i][j];
      z[i][j-1] = val2;
      z[i][j] = val1;
    }
  } catch(e) {
  }
  try {
    if (z[i+1][j] == 'white') {
      // console.log(i+":"+j);
      var val1 = z[i+1][j];
      var val2 = z[i][j];
      z[i+1][j] = val2;
      z[i][j] = val1;
    }
  } catch(e) {
  }
  try {
    if (z[i-1][j] == 'white') {
      // console.log(i+":"+j);
      var val1 = z[i-1][j];
      var val2 = z[i][j];
      z[i-1][j] = val2;
      z[i][j] = val1;
    }
  } catch(e) {
  }
};

//maybe in the future come back and take a look at this, make it so that when count != 3
// the code randomly selects which one of the white matches it moves to.

function moveOut(z) {
  var length = z.length;
  for (i=0;i<length;i++) {
    for (j=0;j<length;j++) {
      if (z[i][j] == 'red') {
        if (checkBlue(z,i,j)) {
          if (checkWhite(z,i,j)) {
            switchWhite(z,i,j);
          }
        }
      }
      else if (z[i][j] == 'blue') {
        if (checkRed(z,i,j)) {
          if (checkWhite(z,i,j)) {
            switchWhite(z,i,j);
          }
        }
      }
    }
  }
};
