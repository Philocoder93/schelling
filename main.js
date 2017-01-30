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
          $('main').append('<div class="box '+x+' '+y+' red"><h3>test</h3></div>');
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'blue')) {
          $('main').append('<div class="box '+x+' '+y+' blue"><h3>test</h3></div>');
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'white')) {
          $('main').append('<div class="box '+x+' '+y+' white"><h3>test</h3></div>');
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
//this is the adjacency detector
//alter the game logic so that it records how many sides there are free, not how
//many are occupied, that way the computer can record how often you get a hit as
//well as the location of the hit then, if the hit counter = 1, you know theres
//only one value in the free array and you can reset the location properties of
//the object in question in order to recreate the bord later with those altered
//values.
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
            console.log('fire');
            console.log(x);
            console.log(y);
            for (k=0;k<pieces.length;k++) {
              if ((pieces[k].x == x-1)&&(pieces[k].y == y)&&(pieces[k].color == 'white')) {
                console.log('left');
              }
              else if ((pieces[k].x == x+1)&&(pieces[k].y == y)&&(pieces[k].color == 'white')) {
                console.log('right');
              }
              else if ((pieces[k].x == x)&&(pieces[k].y == y-1)&&(pieces[k].color == 'white')) {
                console.log('down');
              }
              else if ((pieces[k].x == x)&&(pieces[k].y == y+1)&&(pieces[k].color == 'white')) {
                console.log('up');
              }
              else {
              }
            }
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
            console.log('fire');
            console.log(x);
            console.log(y);
            for (k=0;k<pieces.length;k++) {
              if ((pieces[k].x == x-1)&&(pieces[k].y == y)&&(pieces[k].color == 'white')) {
                console.log('left');
                pieces[i].x =
                piece
              }
              else if ((pieces[k].x == x+1)&&(pieces[k].y == y)&&(pieces[k].color == 'white')) {
                console.log('right');
              }
              else if ((pieces[k].x == x)&&(pieces[k].y == y-1)&&(pieces[k].color == 'white')) {
                console.log('down');
              }
              else if ((pieces[k].x == x)&&(pieces[k].y == y+1)&&(pieces[k].color == 'white')) {
                console.log('up');
              }
              else {
              }
            }
          }
        }
      }
    }
  }
}
