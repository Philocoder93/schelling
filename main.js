//these are my object constructors
function Red(x,y) {
  if (this instanceof Red) {
    this.id = "started at "+x+","+y;
    this.color = 'red';
    this.x = x;
    this.y = y;
  }
  else {
    console.log('error, this = window');
  }
}
function Blue(x,y) {
  if (this instanceof Blue) {
    this.id = "started at "+x+","+y;
    this.color = 'blue';
    this.x = x;
    this.y = y;
  }
  else {
    console.log('error, this = window');
  }
}
function White(x,y) {
  if (this instanceof White) {
    this.id = "started at "+x+","+y;
    this.color = 'white';
    this.x = x;
    this.y = y;
  }
  else {
    console.log('error, this = window');
  }
}
//this is the array that the pieces will go into
var pieces = [];
//this is the double loop that creates the pieces and pushes them to the array
for (x=1;x<=5;x++) {
  for (y=1;y<=5;y++) {
    var die = Math.random();
    if (die<0.33) {
      pieces.push(new Red(x,y));
    }
    else if (die<0.66) {
      pieces.push(new Blue(x,y));
    }
    else {
      pieces.push(new White(x,y));
    }
  }
}
//this is the triple loop that creates the squares and assigns classes to them
//based on how they line up with the array
$('document').ready(function(){
  for (y=5;y>=1;y--) {
    for (x=1;x<=5;x++) {
      for (i=0;i<pieces.length;i++) {
        if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'red')) {
          $('main').append('<div class="box x:'+x+' y:'+y+' red"><h3>test</h3></div>');
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'blue')) {
          $('main').append('<div class="box x:'+x+' y:'+y+' blue"><h3>test</h3></div>');
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'white')) {
          $('main').append('<div class="box x:'+x+' y:'+y+' white"><h3>test</h3></div>');
        }
        else {}
      }
    }
  }
})
//new board , aka previous work attached to a listener
$('.click').on('click',function() {
  $('main').find('*').remove();
  pieces =[];
  for (x=1;x<=5;x++) {
    for (y=1;y<=5;y++) {
      var die = Math.random();
      if (die<0.33) {
        pieces.push(new Red(x,y));
      }
      else if (die<0.66) {
        pieces.push(new Blue(x,y));
      }
      else {
        pieces.push(new White(x,y));
      }
    }
  }
  for (y=5;y>=1;y--) {
    for (x=1;x<=5;x++) {
      for (i=0;i<pieces.length;i++) {
        if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'red')) {
          $('main').append('<div class="box '+x+' '+y+' red"><h3>test</h3></div>');
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'blue')) {
          $('main').append('<div class="box '+x+' '+y+' blue"><h3>test</h3></div>');
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'white')) {
          $('main').append('<div class="box '+x+' '+y+' white"><h3>test</h3></div>');
        }
      }
    }
  }
})
//this is a function that searches the board and finds every red or blue square that is bordered
//by 3 squares of the opposite color
var posMoves = [];
for (y=5;y>=1;y--) {
  for (x=1;x<=5;x++) {
    // this is cycling correctly
    for (i=0;i<pieces.length;i++) {
      // this is cycling correctly
      if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'red')) {
        // this is cycling correctly
        var count = 0;
        for (j=0;j<pieces.length;j++) {
          // this line is cycling correctly
          if ((pieces[j].x == (pieces[i].x)-1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'blue')) {
            count++;
          }
          else if ((pieces[j].x == (pieces[i].x)+1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'blue')) {
            count++;
          }
          else if ((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)-1)&&(pieces[j].color == 'blue')) {
            count++;
          }
          else if ((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)+1)&&(pieces[j].color == 'blue')) {
            count++;
          }
          else {
          }
          // till here in both halves of the loop the entire thing is debugged
          if (count == 3) {
            var duplicate =0;
            for (k=0;k<posMoves.length;k++) {
              if (pieces[i] == posMoves[k]) {
                duplicate ++;
              }
            }
            if (duplicate == 0) {
              posMoves.push(pieces[i]);
            }
            duplicate = 0;
          }
          else {

          }
        }
      }
      else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'blue')) {
        // this is cycling correctly
        var count = 0;
        for (j=0;j<pieces.length;j++) {
          // this line is working
          if ((pieces[j].x == (pieces[i].x)-1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'red')) {
            count++;
          }
          else if ((pieces[j].x == (pieces[i].x)+1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'red')) {
            count++;
          }
          else if ((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)-1)&&(pieces[j].color == 'red')) {
            count++;
          }
          else if ((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)+1)&&(pieces[j].color == 'red')) {
            count++;
          } else {}
          // till here in both halves of the loop the entire thing is debugged
          if (count == 3) {
            var duplicate =0;
            for (k=0;k<posMoves.length;k++) {
              if (pieces[i] == posMoves[k]) {
                duplicate ++;
              }
            }
            if (duplicate == 0) {
              posMoves.push(pieces[i]);
            }
            duplicate = 0;
          }
          else {

          }
        }
      }
    }
  }
}
// this is a bit of code that searches the board and delivers an array of all the moves that need to be made
var moves = [];
for (y=5;y>=1;y--) {
  for (x=1;x<=5;x++) {
    for (i=0;i<posMoves.length;i++) {
      if ((posMoves[i].x == x)&&(posMoves[i].y == y)) {
        for (j=0;j<pieces.length;j++) {
          if ((pieces[j].x == (posMoves[i].x)-1)&&(pieces[j].y == posMoves[i].y)&&(pieces[j].color == 'white')) {
            var duplicate =0;
            for (k=0;k<moves.length;k++) {
              if (pieces[j] == moves[k]) {
                duplicate ++;
              }
            }
            if (duplicate == 0) {
              var out = [pieces[j],posMoves[i]];
              moves.push(out);
            }
            duplicate = 0;
          }
          else if ((pieces[j].x == (posMoves[i].x)+1)&&(pieces[j].y == posMoves[i].y)&&(pieces[j].color == 'white')) {
            var duplicate =0;
            for (k=0;k<moves.length;k++) {
              if (pieces[j] == moves[k]) {
                duplicate ++;
              }
            }
            if (duplicate == 0) {
              var out = [pieces[j],posMoves[i]];
              moves.push(out);
            }
            duplicate = 0;
          }
          else if ((pieces[j].x == posMoves[i].x)&&(pieces[j].y == (posMoves[i].y)-1)&&(pieces[j].color == 'white')) {
            var duplicate =0;
            for (k=0;k<moves.length;k++) {
              if (pieces[j] == moves[k]) {
                duplicate ++;
              }
            }
            if (duplicate == 0) {
              var out = [pieces[j],posMoves[i]];
              moves.push(out);
            }
            duplicate = 0;
          }
          else if ((pieces[j].x == posMoves[i].x)&&(pieces[j].y == (posMoves[i].y)+1)&&(pieces[j].color == 'white')) {
            var duplicate =0;
            for (k=0;k<moves.length;k++) {
              if (pieces[j] == moves[k]) {
                duplicate ++;
              }
            }
            if (duplicate == 0) {
              var out = [pieces[j],posMoves[i]];
              moves.push(out);
            }
            duplicate = 0;
          }
        }
      }
      else {
      }
    }
  }
}
//this is the piece of code that switches the position of the moves to be made
console.log(posMoves);
console.log(moves);

$('.next').on('click', function () {
  var posMoves = [];
  for (y=5;y>=1;y--) {
    for (x=1;x<=5;x++) {
      // this is cycling correctly
      for (i=0;i<pieces.length;i++) {
        // this is cycling correctly
        if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'red')) {
          // this is cycling correctly
          var count = 0;
          for (j=0;j<pieces.length;j++) {
            // this line is cycling correctly
            if ((pieces[j].x == (pieces[i].x)-1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'blue')) {
              count++;
            }
            else if ((pieces[j].x == (pieces[i].x)+1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'blue')) {
              count++;
            }
            else if ((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)-1)&&(pieces[j].color == 'blue')) {
              count++;
            }
            else if ((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)+1)&&(pieces[j].color == 'blue')) {
              count++;
            }
            else {
            }
            // till here in both halves of the loop the entire thing is debugged
            if (count == 3) {
              var duplicate =0;
              for (k=0;k<posMoves.length;k++) {
                if (pieces[i] == posMoves[k]) {
                  duplicate ++;
                }
              }
              if (duplicate == 0) {
                posMoves.push(pieces[i]);
              }
              duplicate = 0;
            }
            else {

            }
          }
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'blue')) {
          // this is cycling correctly
          var count = 0;
          for (j=0;j<pieces.length;j++) {
            // this line is working
            if ((pieces[j].x == (pieces[i].x)-1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'red')) {
              count++;
            }
            else if ((pieces[j].x == (pieces[i].x)+1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'red')) {
              count++;
            }
            else if ((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)-1)&&(pieces[j].color == 'red')) {
              count++;
            }
            else if ((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)+1)&&(pieces[j].color == 'red')) {
              count++;
            } else {}
            // till here in both halves of the loop the entire thing is debugged
            if (count == 3) {
              var duplicate =0;
              for (k=0;k<posMoves.length;k++) {
                if (pieces[i] == posMoves[k]) {
                  duplicate ++;
                }
              }
              if (duplicate == 0) {
                posMoves.push(pieces[i]);
              }
              duplicate = 0;
            }
            else {

            }
          }
        }
      }
    }
  }
  var moves = [];
  for (y=5;y>=1;y--) {
    for (x=1;x<=5;x++) {
      for (i=0;i<posMoves.length;i++) {
        if ((posMoves[i].x == x)&&(posMoves[i].y == y)) {
          for (j=0;j<pieces.length;j++) {
            if ((pieces[j].x == (posMoves[i].x)-1)&&(pieces[j].y == posMoves[i].y)&&(pieces[j].color == 'white')) {
              var duplicate =0;
              for (k=0;k<moves.length;k++) {
                if (pieces[j] == moves[k]) {
                  duplicate ++;
                }
              }
              if (duplicate == 0) {
                var out = [pieces[j],posMoves[i]];
                moves.push(out);
              }
              duplicate = 0;
            }
            else if ((pieces[j].x == (posMoves[i].x)+1)&&(pieces[j].y == posMoves[i].y)&&(pieces[j].color == 'white')) {
              var duplicate =0;
              for (k=0;k<moves.length;k++) {
                if (pieces[j] == moves[k]) {
                  duplicate ++;
                }
              }
              if (duplicate == 0) {
                var out = [pieces[j],posMoves[i]];
                moves.push(out);
              }
              duplicate = 0;
            }
            else if ((pieces[j].x == posMoves[i].x)&&(pieces[j].y == (posMoves[i].y)-1)&&(pieces[j].color == 'white')) {
              var duplicate =0;
              for (k=0;k<moves.length;k++) {
                if (pieces[j] == moves[k]) {
                  duplicate ++;
                }
              }
              if (duplicate == 0) {
                var out = [pieces[j],posMoves[i]];
                moves.push(out);
              }
              duplicate = 0;
            }
            else if ((pieces[j].x == posMoves[i].x)&&(pieces[j].y == (posMoves[i].y)+1)&&(pieces[j].color == 'white')) {
              var duplicate =0;
              for (k=0;k<moves.length;k++) {
                if (pieces[j] == moves[k]) {
                  duplicate ++;
                }
              }
              if (duplicate == 0) {
                var out = [pieces[j],posMoves[i]];
                moves.push(out);
              }
              duplicate = 0;
            }
          }
        }
        else {
        }
      }
    }
  }

  var rep = 0;
  for (x=0;x<moves.length;x++) {
    for (y=0;y<moves.length;y++) {
      if ((x!=y)&&(moves[x][0]==moves[y][0])) {
        rep++;
      }
    }
  }
  if (rep == 0) {
    for (i=0;i<moves.length;i++) {
      var holder1 = moves[i][0].x;
      var holder2 = moves[i][0].y;
      moves[i][0].x = moves[i][1].x;
      moves[i][0].y = moves[i][1].y;
      moves[i][1].x = holder1;
      moves[i][1].y = holder2;
    }
  }


  $('main').find('*').remove();

  for (y=5;y>=1;y--) {
    for (x=1;x<=5;x++) {
      for (i=0;i<pieces.length;i++) {
        if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'red')) {
          $('main').append('<div class="box '+x+' '+y+' red"><h3>test</h3></div>');
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'blue')) {
          $('main').append('<div class="box '+x+' '+y+' blue"><h3>test</h3></div>');
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'white')) {
          $('main').append('<div class="box '+x+' '+y+' white"><h3>test</h3></div>');
        }
      }
    }
  }
})





// for (x=0;x<pieces.length;i++) {
//   $('main').find('x:'+pieces[i].x).find('y:'+pieces[i].y).css('background',pieces[i].color);
// }
