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

  
  var $startBtn = $('.start-btn');
  $startBtn.on('click', function () {
    console.log('clicked');
  });

  var publicMethod = function (somethingOfInterest) {
  };

  return {
    publicMethod: publicMethod
  };

})();
