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
  },



  createDivSize: function () {
    var divSize = Math.random() * 100;
    // return divSize;
  },

  generatePosition: function () {
    var docWidth = $(document).width();
    var docHeight = $(document).height();
    var posx = (Math.random() * 234);
    var posy = (Math.random() * 234);
    console.log(posx);
  },

  placement: function () {
    var $bullseye = $('.bullseye');
    $bullseye.css({
      'background-color': 'blue',
      'position': 'absolute',
      'left': '344px',
      'top': '344'
    });
  },

  handlers: (function () {
    var $startBtn = $('.start-btn');
    $startBtn.on('click', function () {
      console.log('clicked');
    });
  })()

};

App.init();
