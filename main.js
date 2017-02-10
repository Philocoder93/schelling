//ideal settings to see maximum effect are fillArray:0.3/0.6 checkRed/checkBlue:3
//if use without randomizer then will clump to one side
// ND: Code here is much more nicely spaced out and indented

$(document).ready(function () {
  arrayToDiv(fillArray(arrayWithinArray(50)));
});

// ND: Be mindful of naming conventions here. Might be confusing to someone else looking at your code why you `click` here twice
$('.click').on('click', function() {
  delDiv();
  arrayToDiv(fillArray(arrayWithinArray(50)));
  console.log('done');
});

// ND: Avoid having letter names, they're not semantic.
$('.next').on('click', function() {
  moveOutRan(z);
  delDiv();
  arrayToDiv(z);
  console.log('done');
})

$('.multi').on('click', function () {
  var i =0;
  while (i<1000) {
    moveOutRan(z);
    console.log('running');
    i = i+1;
  };
  console.log('done');
  delDiv();
  arrayToDiv(z);
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
      if (die<0.3) {
        z[i][j] = "red";
      }
      else if (die<0.6) {
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

// ND: Nice job with method chaining, great way to DRY up code.
function delDiv() {
  $('main').find('*').remove();
};

// by changing the values in the code below one can change how reactive each piece is

// ND: Great for now since it's working, but seeing a lot of redundancy in the following functions. Think about how you can make this more DRY.
function checkRed(z,i,j) {
  var count = 0;
  // ND: Super sweet that you taught yourself try, catch. That said, maybe I'm missing something, but the 'catch' statement doesn't seem to be doing anything.
  // ND: Additionally, we encourage newer devs to hold off on using try, catch. Just write good, working code.
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
  return ((count ==1 )||(count == 2)||(count == 3))? true : false;
};

// ND: Again, would avoid letter parameters
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
  return ((count ==1 )||(count == 2)||(count == 3))? true : false;
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

function switchWhiteRan(z,i,j) {
  var die = Math.random();
  if (die < 0.25) {
    switchWhite1(z,i,j);
  }
  else if (die < 0.5) {
    switchWhite2(z,i,j)
  }
  else if (die < 0.75) {
    switchWhite3(z,i,j)
  }
  else {
    switchWhite4(z,i,j)
  }

}

function switchWhite1(z,i,j) {
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

function switchWhite2(z,i,j) {
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

};

function switchWhite3(z,i,j) {
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
};

function switchWhite4(z,i,j) {
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

};

//maybe in the future come back and take a look at this, make it so that when count != 3
// the code randomly selects which one of the white matches it moves to.

function moveOutRan(z) {
  var die = Math.random();
  if (die < 0.25) {
    moveOut1(z);
  }
  else if (die < 0.5) {
    moveOut2(z);
  }
  else if (die < 0.75) {
    moveOut3(z);
  }
  else {
    moveOut4(z);
  }
}

// ND: When you find yourself going this deep with conditionals, consider using switch statements instead.
function moveOut1(z) {
  var length = z.length;
  for (i=0;i<length;i++) {
    for (j=0;j<length;j++) {
      if (z[i][j] == 'red') {
        if (checkBlue(z,i,j)) {
          if (checkWhite(z,i,j)) {
            switchWhiteRan(z,i,j);
          }
        }
      }
      else if (z[i][j] == 'blue') {
        if (checkRed(z,i,j)) {
          if (checkWhite(z,i,j)) {
            switchWhiteRan(z,i,j);
          }
        }
      }
    }
  }
};

function moveOut2(z) {
  var length = z.length;
  for (i=length-1;i>=0;i--) {
    for (j=length-1;j>=0;j--) {
      if (z[i][j] == 'red') {
        if (checkBlue(z,i,j)) {
          if (checkWhite(z,i,j)) {
            switchWhiteRan(z,i,j);
          }
        }
      }
      else if (z[i][j] == 'blue') {
        if (checkRed(z,i,j)) {
          if (checkWhite(z,i,j)) {
            switchWhiteRan(z,i,j);
          }
        }
      }
    }
  }
};

function moveOut3(z) {
  var length = z.length;
  for (i=0;i<length;i++) {
    for (j=length-1;j>=0;j--) {
      if (z[i][j] == 'red') {
        if (checkBlue(z,i,j)) {
          if (checkWhite(z,i,j)) {
            switchWhiteRan(z,i,j);
          }
        }
      }
      else if (z[i][j] == 'blue') {
        if (checkRed(z,i,j)) {
          if (checkWhite(z,i,j)) {
            switchWhiteRan(z,i,j);
          }
        }
      }
    }
  }
};
// ND: Holy brackets Batman! Nice job keeping this organized and clear. I imagine this function might've caused you a few syntax headaches
function moveOut4(z) {
  var length = z.length;
  for (i=length-1;i>=0;i--) {
    for (j=0;j<length;j++) {
      if (z[i][j] == 'red') {
        if (checkBlue(z,i,j)) {
          if (checkWhite(z,i,j)) {
            switchWhiteRan(z,i,j);
          }
        }
      }
      else if (z[i][j] == 'blue') {
        if (checkRed(z,i,j)) {
          if (checkWhite(z,i,j)) {
            switchWhiteRan(z,i,j);
          }
        }
      }
    }
  }
};
