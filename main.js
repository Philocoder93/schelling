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
    }
  }
}
//this is the triple loop that creates the squares and assigns classes to them
//based on how they line up with the array
$('document').ready(function(){
  for (y=5;y>=1;y--) {
    for (x=1;x<=5;x++) {
      done = false;
      for (i=0;i<pieces.length;i++) {
        if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'red')) {
          $('main').append('<div class="box '+x+' '+y+' red"><h3>test</h3></div>');
          done = true;
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'blue')) {
          $('main').append('<div class="box '+x+' '+y+' blue"><h3>test</h3></div>');
          done = true;
        }
      }
      if (done == false) {
        $('main').append('<div class="box '+x+' '+y+'"><h3>test</h3></div>');
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
      }
    }
  }
  for (y=5;y>=1;y--) {
    for (x=1;x<=5;x++) {
      done = false;
      for (i=0;i<pieces.length;i++) {
        if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'red')) {
          $('main').append('<div class="box '+x+' '+y+' red"><h3>test</h3></div>');
          done = true;
        }
        else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'blue')) {
          $('main').append('<div class="box '+x+' '+y+' blue"><h3>test</h3></div>');
          done = true;
        }
      }
      if (done == false) {
        $('main').append('<div class="box '+x+' '+y+'"><h3>test</h3></div>');
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
    for (i=0;i<pieces.length;i++) {
      if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'red')) {
        for (j=0;j<pieces.length;j++) {
          var liberties = 0;
          if (!((pieces[j].x == (pieces[i].x)-1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'blue'))) {
            liberties++;
          } else {}
          if (!((pieces[j].x == (pieces[i].x)+1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'blue'))) {
            liberties++;
          } else {}
          if (!((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)-1)&&(pieces[j].color == 'blue'))) {
            liberties++;
          } else {}
          if (!((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)+1)&&(pieces[j].color == 'blue'))) {
            liberties++;
          } else {}
          ///
          if (liberties < 4) {
            console.log('fire');
            liberties = 0;
          } else {}
        }
      }
      else if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'blue')) {
        for (j=0;j<pieces.length;j++) {
          liberties = 0;
          if (!((pieces[j].x == (pieces[i].x)-1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'red'))) {
            liberties = liberties+1;
          } else {}
          if (!((pieces[j].x == (pieces[i].x)+1)&&(pieces[j].y == pieces[i].y)&&(pieces[j].color == 'red'))) {
            liberties = liberties+1;
          } else {}
          if (!((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)-1)&&(pieces[j].color == 'red'))) {
            liberties = liberties+1;
          } else {}
          if (!((pieces[j].x == pieces[i].x)&&(pieces[j].y == (pieces[i].y)+1)&&(pieces[j].color == 'red'))) {
            liberties = liberties+1;
          } else {}
          ///
          if (liberties < 4) {
            console.log('fire');
            liberties = 0;
          } else {}
        }
      }
    }
  }
}
