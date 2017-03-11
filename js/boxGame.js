// var main = function() {

// $(function() {

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
  // var docWidth = $(document).width();
  // var docHeight = $(document).height();
  // var posx = (Math.random() * docWidth - 90);
  // var posy = (Math.random() * docHeight - 90);
  //
  // function getRandomArbitrary(min, max) {
  // },

  randomNum: function (min, wMax, hMax) {
      var posX = Math.random() * (wMax - min) + min;
      var posY = Math.random() * (hMax - min) + min;
      return {
        posX: posX,
        posY: posY
      };
  },

  ogtime: 0,
  personalRecord: null,
  colors: ['#D75D61', '#E5D347', '#FD9810', '#56AF5A', '#E8413D',
  '#05AFC4', '#4C4C4C' ],

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
    // console.log('wmax', wMax, 'hmax:', hMax);
    var $bullseye = $('.bullseye');
    // console.log('posX', this.randomNum(1, wMax, hMax).posX);
    // console.log('poxY', this.randomNum(1, wMax, hMax).posY);

    // var posx = ( Math.random() * ($(document).width() - divsize) ).toFixed();
    // var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    var posX = (Math.random() * (wMax - 90)).toFixed();
    var posY = (Math.random() * (hMax - 90)).toFixed();

    this.ogtime = Date.now();
    $bullseye.show();


    $bullseye.css({
      'background-color': this.colors[this.pickColor()],
      'position': 'absolute',
      // 'left': '50px',
      // 'top': '50' +'px',
      // 'left': this.randomNum(1, wMax, hMax).posX.toString() +'px',
      // 'top': this.randomNum(1, hMax, wMax).posY.toString() +'px',
      'left': posX +'px',
      'top': posY + 'px',
    });
    console.log('posX', posX);
    console.log('posY', posY);
    console.log('-----------------');
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
      App.render();
    });
    $bullseye.on('click', function () {
      endTime = Date.now();
      var reaction = (endTime - App.ogtime) / 1000;
      // console.log('reaction', reaction);
      $reactionTxt.text( 'Reaction Time: ' + reaction + 's');
      if (App.personalRecord === null || reaction < App.personalRecord) {
        App.personalRecord = reaction;
        $recordTxt.text('Best Time: ' + App.personalRecord);
      }

      $bullseye.hide();
      //timeout should random num seconds range to render, to make it fun:
      setTimeout(function() {
        App.render();
      }, 500);

    });
  })()
};

App.init();

// console.log('ready!');
// });

// $(document).ready(main);


var testRender = setInterval(function(){
  App.render();

}, 600);

var stopRender = function () {
  clearInterval(this.testRender);
};
