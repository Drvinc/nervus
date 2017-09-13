(function() {
  var makeNote;

  makeNote = function() {
    var height;
    height = parseInt(100 + Math.random() * 500, 10);
    return '<div class="note"><div class="note-inner" style="height: ' + height + 'px"></div></div>';
  };

  $(function() {
    var $note, $notes, i, x;
    $notes = $(".notes");
    for (x = i = 0; i <= 10; x = ++i) {
      $note = $(makeNote());
      $notes.append($note);
    }
    return $('.notes').isotope({
      itemSelector: '.note',
      layoutMode: 'masonry'
    });
  });

}).call(this);