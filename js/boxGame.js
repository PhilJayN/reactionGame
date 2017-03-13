
function winHeight() {
  console.log('height adjusting');
   var wH = $(window).height();

   $('.rxn-game-wrapper').css({'height': wH * (0.7)
 });

 $('.rxn-game-result').css({'height': wH * (0.29)
});

}
winHeight();

window.addEventListener("resize", winHeight);


// var main = function() {

var App = {

  init: function () {
    var $bullseye = $('.bullseye');
  },

  milliSec: function (min, max) {
      var ms = (Math.random() * (max - min) + min) * 1000;
      return ms;
  },

  ogtime: 0,
  personalRecord: null,
  colors: ['#D75D61', '#E5D347', '#FD9810', '#56AF5A', '#E8413D',
  '#05AFC4', '#8F4997' ],

  pickColor: function () {
    return Math.floor(Math.random() * (7 - 0) + 0);
  },

  render: function () {
    var $bullseye = $('.bullseye');
    var wMax = $('.rxn-game-wrapper').innerWidth();
    var hMax = $('.rxn-game-wrapper').innerHeight();
    var wBox = $('.bullseye').innerWidth();
    var hBox = $('.bullseye').innerHeight();

    var posX = Math.floor((Math.random() * (wMax - wBox)));
    var posY = (Math.random() * (hMax - hBox)).toFixed();

    this.ogtime = Date.now();
    $bullseye.show();
    $bullseye.css({
      'background-color': this.colors[this.pickColor()],
      'position': 'absolute',
      'left': posX +'px',
      'top': posY + 'px',
    });
    // console.log('posX', posX);
    // console.log('posY', posY);
    // console.log('-----------------');
  },

  countdown: function () {
    var $countdown = $('.countdown');
    var counter = 3;
    setInterval(function(){
      if (counter > 0) {
        $countdown.text(counter);
        counter = counter - 1 ;
        }
      else {
          $countdown.text('Go!');
        }
      }, 1000);
      setTimeout(function(){
        App.render();
      }, 4000);
  },

  handlers: (function () {
    var $startBtn = $('.start-btn');
    var $bullseye = $('.bullseye');
    var $reactionTxt = $('.reaction-txt');
    var $recordTxt = $('.record-txt');
    var endTime;
    var clicked = false;

    $startBtn.on('click', function () {
      if (clicked === false) {
        App.countdown();
      }
      clicked = true;
    });
    $bullseye.on('click', function () {
      endTime = Date.now();
      var reaction = (endTime - App.ogtime) / 1000;
      $reactionTxt.text( 'Reaction Time: ' + reaction + 's');
      if (App.personalRecord === null || reaction < App.personalRecord) {
        App.personalRecord = reaction;
        $recordTxt.text('Best Time: ' + App.personalRecord + 's');
      }

      $bullseye.hide();
      setTimeout(function() {
        App.render();
      }, App.milliSec(0.3, 2.5));

    });
  })()
};

App.init();

// });



// $(document).ready(main);

// var testRender = setInterval(function(){
//   App.render();
//
// }, 600);
//
// var stopRender = function () {
//   clearInterval(this.testRender);
// };


//challenges: and solutions:
// random num not generating proper num, so box not staying inside container.
// elemeent not inside html border, even though it is in html file
