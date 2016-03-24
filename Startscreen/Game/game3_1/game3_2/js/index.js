$(document).ready(function() {

 setTimeout(function() {
    $("#enemy1").show();
  }, 2000);
  
  setTimeout(function() {
    $("#enemy1").css("top", "50%");
    $("#enemy1").css("left", "50%");
  }, 2200);

(function () {
  var count = 0;

  $('#enemy1').click(function () {
    count += 1;

    if (count == 100) {
      // come code
      $('#enemy1').hide();
      window.location.href="http://game-ashlar.github.io/Startscreen/You_Win/index.html";
      
    }
  });
})();
  
   function collision($div1, $div2) {
    var health = 5;
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      //if it is not colliding, do nothing

    }
    else {
      //if it is colliding, decrease health
      window.setInterval(function() {
        health--;
        //$("#enemy1").html(health);
        if (health == 4) {
          $("#hlth100pc").hide();
        } else if (health == 3) {
          $("#hlth80pc").hide();
        } else if (health == 2) {
          $("#hlth60pc").hide();
        } else if (health == 1) {
          $("#hlth40pc").hide();
        } else if (health == 0) {
          $("#healthbar").hide();
       window.location.href="http://game-ashlar.github.io/End_Screen/index.html";
        } else {}
      }, 2000);
      return true;
    }
  }

  window.setInterval(function() {
    $('#result').text(collision($('.enemy'), $('#character')));
  }, 200);

  
  
});