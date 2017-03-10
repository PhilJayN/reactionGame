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


var App = (function () {

  var publicMethod = function (somethingOfInterest) {
  };

  var createDivSize = function () {
    var divSize = Math.random() * 100;
  };

  var createPos = function () {
    // var posx = ()
  };


  var handlers = (function () {
    var $startBtn = $('.start-btn');
    $startBtn.on('click', function () {
      console.log('clicked');
    });
  })();

  return {
    publicMethod: publicMethod
  };

})();
