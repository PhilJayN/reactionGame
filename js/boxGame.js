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

  position: function () {
    var docWidth = $(document).width();
    var docHeight = $(document).height();
    var posx = (Math.random() * docWidth - 90);
    var posy = (Math.random() * docHeight - 90);
    return {
      // docWidth: docWidth,
      // docHeight: docHeight
      posx: posx,
      posy: posy
    };
  },
  ogtime: 0,

  render: function () {
    var $bullseye = $('.bullseye');
    // var startTime = Date.now();
    this.ogtime = Date.now();
    $bullseye.show();
    $bullseye.css({
      'background-color': 'blue',
      'position': 'absolute',
      // 'left': '-344px',
      'left': this.position().posx.toString() +'px',
      'top': this.position().posy.toString() + 'px',
    });
    // return startTime;
  },

  test: function () {
    console.log('test', this.position().posx.toString() + 'px');
    setInterval(function(){ App.render(); }, 500);
  },

  start: function () {
    var time = Date.now();
    return time;
  },

  handlers: (function () {
    var $startBtn = $('.start-btn');
    var $bullseye = $('.bullseye');
    var $reactionTxt = $('.reaction-txt');

    var endTime;

    $startBtn.on('click', function () {
      App.render();
      // this.startTime();
    });
    $bullseye.on('click', function () {
      console.log('start time', App.start());
      endTime = Date.now();
      console.log('endTime', endTime);
      // console.log('rxn time', reaction / 1000);
      // console.log('reset ', startTime);
      // var timeNow = Date.now();
      // var reaction = (endTime - App.start() ) / 1000;
      console.log('ogtime', App.ogtime);
      var reaction = (endTime - App.ogtime) / 1000;

      console.log('reaction', reaction);
      $reactionTxt.text( reaction + 'seconds');
      // $reactionTxt.text( (endTime - App.start()) / 1000 + 'seconds');
      $bullseye.hide();
      // App.render();
    });
    //
  })()

};

App.init();
