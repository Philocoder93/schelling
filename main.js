function Red(x,y) {
  if (this instanceof Red) {
    this.id = "started at"+x+","+y;
    this.color = 'red';
    this.x = x;
    this.y = y;
    // Object.defineProperty(this, "x", {
    //   get: function() {
    //     return x;
    //   },
    //   set: function(newName) {
    //     name = newName;
    //   },
    //   configurable: false
    // });
    // Object.defineProperty(this, "y", {
    //   get: function() {
    //     return y;
    //   },
    //   set: function(newName) {
    //     name = newName;
    //   },
    //   configurable: false
    // });
    // alternate notation
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
    // Object.defineProperty(this, "x", {
    //   get: function() {
    //     return x;
    //   },
    //   set: function(newName) {
    //     name = newName;
    //   },
    //   configurable: false
    // });
    // Object.defineProperty(this, "y", {
    //   get: function() {
    //     return y;
    //   },
    //   set: function(newName) {
    //     name = newName;
    //   },
    //   configurable: false
    // });
    // alternate notation
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
  for (i=1;i<26;i++) {
    $('main').append('<p class="box" id="'+i+'">test</p>');
  }
  for ()
})

$('document').ready()
