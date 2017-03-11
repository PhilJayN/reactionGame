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
  personalRecord: null,

  render: function () {
    var $bullseye = $('.bullseye');
    this.ogtime = Date.now();
    $bullseye.show();
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
      }, 2000);

    });
  })()
};

App.init();
