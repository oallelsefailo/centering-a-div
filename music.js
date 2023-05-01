$(document).ready(function () {
  var verseIndex = 0;
  var verses = [
    ".fakeVerse",
    ".verseOne",
    ".verseTwo",
    ".verseThree",
    ".verseFour",
  ];

  function showNextVerse() {
    var currentVerse = verses[verseIndex];
    var nextVerse = verses[(verseIndex + 1) % verses.length];

    $(currentVerse).fadeOut(3600, function () {
      if (nextVerse === ".verseOne") {
        $(".musicBox").on("click", function () {
          showNextVerse();
          $(".musicBox").off("click");
        });
      }

      if (currentVerse === ".verseFour") {
        $(currentVerse).hide();
        verseIndex = 0;
        $(".musicBox").on("click", function () {
          showNextVerse();
          $(".musicBox").off("click");
        });
        return;
      }

      $(nextVerse).fadeIn(1000, function () {
        verseIndex++;
        showNextVerse();
      });
    });
  }

  $(".musicBox").on("click", function () {
    showNextVerse();
    $(".musicBox").off("click");
  });
});
