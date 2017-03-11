// var main = function() {

$(function() {

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

  render: function () {
    var wMax = $('.content-wrapper').innerWidth();
    var hMax = $('.content-wrapper').innerHeight();
    console.log('wmax', wMax, 'hmax:', hMax);
    var $bullseye = $('.bullseye');
    console.log('posX', this.randomNum(1, wMax, hMax).posX);
    console.log('poxY', this.randomNum(1, wMax, hMax).posY);

    this.ogtime = Date.now();
    $bullseye.show();
    $bullseye.css({
      'background-color': 'pink',
      'position': 'absolute',
      // 'left': '50px',
      // 'top': '50' +'px',
      'left': this.randomNum(1, wMax, hMax).posX.toString() +'px',
      'top': this.randomNum(1, hMax, wMax).posY.toString() +'px',
    });
  },

  test: function () {
    console.log('test', this.position().posx.toString() + 'px');
    setInterval(function(){ App.render(); }, 500);
  },

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
      $reactionTxt.text( 'Reaction time: ' + reaction + 'seconds');
      if (App.personalRecord === null || reaction < App.personalRecord) {
        App.personalRecord = reaction;
        $recordTxt.text('Personal record: ' + App.personalRecord);
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

console.log('ready!');
});

// $(document).ready(main);
