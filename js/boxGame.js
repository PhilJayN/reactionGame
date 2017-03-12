// var main = function() {

// $(function() {

var App = {

  init: function () {
    this.createDivSize();
    var $bullseye = $('.bullseye');
    return {
      $bullseye: $bullseye
    };
  },

  createDivSize: function () {
    var divSize = Math.random() * 100;
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

  testNum: function () {
    while (this.pickColor() !== 6) {
      this.pickColor();
    }
  },

  render: function () {
    var wMax = $('.content-wrapper').innerWidth();
    var hMax = $('.content-wrapper').innerHeight();
    var wBox = $('.bullseye').innerWidth();
    var hBox = $('.bullseye').innerHeight();

    // console.log('wBox', wBox, 'hBox', hBox);
    // console.log('wmax', wMax, 'hmax:', hMax);
    var $bullseye = $('.bullseye');

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
    console.log('posX', posX);
    console.log('posY', posY);
    console.log('-----------------');
  },

  countdown: function () {
    var $countdown = $('.countdown');
    var counter = 3;
    // debugger;
    setInterval(function(){
      if (counter > 0) {
        $countdown.text(counter);
        counter = counter - 1 ;
        }
      }, 1000);
    App.render();
  },

  // testRender: function () {
  //   setInterval(function(){ App.render(); }, 600);
  // },
  handlers: (function () {
    var $startBtn = $('.start-btn');
    var $bullseye = $('.bullseye');
    var $reactionTxt = $('.reaction-txt');
    var $recordTxt = $('.record-txt');
    var endTime;

    $startBtn.on('click', function () {
      App.countdown();
      // App.render();
    });
    $bullseye.on('click', function () {
      // console.log('test sec', App.milliSec(0.5, 2.2));
      endTime = Date.now();
      var reaction = (endTime - App.ogtime) / 1000;
      $reactionTxt.text( 'Reaction Time: ' + reaction + 's');
      if (App.personalRecord === null || reaction < App.personalRecord) {
        App.personalRecord = reaction;
        $recordTxt.text('Best Time: ' + App.personalRecord + 's');
      }

      $bullseye.hide();
      //timeout should random num seconds range to render, to make it fun:
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



// randomNum: function (min, wMax, hMax) {
//     var posX = Math.random() * (wMax - min) + min;
//     var posY = Math.random() * (hMax - min) + min;
//     return {
//       posX: posX,
//       posY: posY
//     };
// },
