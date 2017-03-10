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
    var posy = (Math.random() * docHeight - 90);
    return {
      // docWidth: docWidth,
      // docHeight: docHeight
      posx: posx,
      posy: posy
    };
  },

  render: function () {
    var $bullseye = $('.bullseye');
    $bullseye.show();
    $bullseye.css({
      'background-color': 'blue',
      'position': 'absolute',
      // 'left': '-344px',
      'left': this.position().posx.toString() +'px',
      'top': this.position().posy.toString() + 'px',
    });
    return {
      $bullseye: $bullseye
    };
  },

  test: function () {
    console.log('test', this.position().posx.toString() + 'px');
    setInterval(function(){ App.render(); }, 500);
  },

  handlers: (function () {
    var $startBtn = $('.start-btn');
    var $bullseye = $('.bullseye');
    // var startTime;
    // var startTime = Date.now();
    var startTime;

    $startBtn.on('click', function () {
      // console.log('clicked', startTime);
      startTime = Date.now();
      App.render();
    });
    $bullseye.on('click', function () {
      // console.log('clicked bullseye');
      var reaction = Date.now() - startTime;
      startTime = 0;
      console.log('rxn time', reaction / 1000);
      console.log('reset ', startTime);
      $bullseye.hide();
      App.render();
    });
    //
  })()

};

App.init();

// setInterval(function() {
// }, App.render(), 500);


// setInterval(function(){ console.log('hi'); }, 1000);
