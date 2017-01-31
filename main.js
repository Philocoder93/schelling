function arrayWithinArray(x) {
  z = [];
  for (i=0;i<x;i++) {
    z.push(new Array(x));
  }
  return z;
};

//this works^^^

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

//this works too^^^

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

//this works^^^

function delDiv() {
  $('main').find('*').remove();
};

//this works^^^

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
  return (count == 3)? true : false;
};

//this works ^^^

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
  return (count == 3)? true : false;
};

//this works ^^^

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
}

function switchWhite(z,i,j) {
  try {
    if (z[i][j+1] == 'white') {
      console.log(i+":"+j);
      var val1 = z[i][j+1];
      var val2 = z[i][j];
      z[i][j+1] = val2;
      z[i][j] = val1;
    }
  } catch(e) {
  }
  try {
    if (z[i][j-1] == 'white') {
      console.log(i+":"+j);
      var val1 = z[i][j-1];
      var val2 = z[i][j];
      z[i][j-1] = val2;
      z[i][j] = val1;
    }
  } catch(e) {
  }
  try {
    if (z[i+1][j] == 'white') {
      console.log(i+":"+j);
      var val1 = z[i+1][j];
      var val2 = z[i][j];
      z[i+1][j] = val2;
      z[i][j] = val1;
    }
  } catch(e) {
  }
  try {
    if (z[i-1][j] == 'white') {
      console.log(i+":"+j);
      var val1 = z[i-1][j];
      var val2 = z[i][j];
      z[i-1][j] = val2;
      z[i][j] = val1;
    }
  } catch(e) {
  }
}

//this works ^^^

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

// function redOrBlue(x) {
//   var length = x.length;
//   for (i=0;i<length;i++) {
//     for (j=0;j<length;j++) {
//       if ((x[i][j] != undefined)&&(x[i][j+1]== 'red')) {
//         console.log('red');
//       }
//       else if ((x[i][j+1] != undefined)&&(x[i][j+1]== 'blue')) {
//         console.log('blue');
//       }
//     }
//   }
// };
