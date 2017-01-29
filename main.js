function Red(x,y) {
  if (this instanceof Red) {
    this.id = "started at"+x+","+y;
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
    this.id = "started at"+x+","+y;
    this.color = 'blue';
    this.x = x;
    this.y = y;
  }
  else {
    console.log('error, this = window');
  }
}

var pieces = [];
for (x=1;x<=5;x++) {
  for (y=1;y<=5;y++) {
    var die = Math.random();
    // console.log("die"+die);
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

$('document').ready(function(){
  console.log('firing');
})

$('document').ready(function(){
  for (y=5;y>=1;y--) {
    for (x=1;x<=5;x++) {
      done = false;
      for (i=0;i<pieces.length;i++) {
        if ((pieces[i].x == x)&&(pieces[i].y == y)&&(pieces[i].color == 'red')) {
          $('main').append('<div class="box '+x+' '+y+' red"><h3>this</h3></div>');
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

$('document').ready()
