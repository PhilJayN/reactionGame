// var Module = (function () {
//
//   var privateArray = [];
//
//   var publicMethod = function (somethingOfInterest) {
//     privateArray.push(somethingOfInterest);
// 		console.log('private arr is now', privateArray);
//   };
//
//   return {
//     publicMethod: publicMethod
//   };
//
// })();
//
// Module.publicMethod('text');


// var $card = $('.card');
// $card.off().on('click', function() {


var App = {



  init: function () {
    this.createDivSize();
    console.log('asdfjk');
    var $bullseye = $('.bullseye');
    return {
      $bullseye: $bullseye
    };
  },

  createDivSize: function () {
    var divSize = Math.random() * 100;
  },

  // docWidth: $(document).width(),
  // docHeight: $(document).height(),
  // posx: (Math.random() * 234),
  // posy: (Math.random() * 234),

  bullseye: function () {

  },

  position: function () {
    var docWidth = $(document).width();
    var docHeight = $(document).height();
    var posx = (Math.random() * docWidth - 90);
    var posy = (Math.random() * 232);
    return {
      // docWidth: docWidth,
      // docHeight: docHeight
      posx: posx,
      posy: posy
    };
  },

  placement: function () {
    var $bullseye = $('.bullseye');
    $bullseye.css({
      'background-color': 'blue',
      'position': 'absolute',
      // 'left': '-344px',
      'left': this.position().posx.toString() +'px',
      'top': this.position().posy.toString() + 'px',
    });
  },

  test: function () {
    console.log('test', this.position().posx.toString() + 'px');
    setInterval(function(){ App.placement(); }, 500);
  },


  handlers: (function () {
    var $startBtn = $('.start-btn');
    $startBtn.on('click', function () {
      console.log('clicked');
    });
  })()

};

App.init();

// setInterval(function() {
// }, App.placement(), 500);


// setInterval(function(){ console.log('hi'); }, 1000);
