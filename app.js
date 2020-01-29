colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 165, 0)",
  "rgb(0, 128, 0)",
  "rgb(128, 128, 128)",
  "rgb(0, 0, 0)",
  "	rgb(165, 42, 42)",
  "rgb(128, 0, 128)",
  "rgb(255, 192, 203)"
];

$("body")
  .prepend("<h1>Flexbox Study</h1>")
  .css("text-align", "center");

$("body").append(
  "<button type='button' class='btn btn-primary btnClick'>Click to start timer</button>",
  "<button type='button' class='btn btn-primary btnReset'>Click to Reset</button>"
);

let box = "";

function addColoredBoxes(colorList) {
  for (let i = 0; i < colorList.length; i++) {
    let selectedClass = ".flexbox-item-" + (i + 1);
    box = $(
      `<div class='flexbox-item ${selectedClass}'><p>${i + 1}</p></div>`
    ).appendTo($(".flexbox-container"));
    box.css({ "background-color": colorList[i], "border-radius": "10px" });
  }
}

function randomNumberGenerator() {
  var randomNumber = Math.floor(Math.random() * 9);
  return randomNumber;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function shuffleColoredBoxes() {
  $(".btnClick").on("click", function() {
    timer(colors);
    $(".count-down-label").animate({ opacity: "1" }, 2000);
    $(".lbl-timer").text("5");
  });
}

function timer(shuffleColors) {
  var remainingTime = 5;
  var timer = setInterval(function() {
    $(".timer").text(remainingTime);
    remainingTime -= 1;
    if (remainingTime < 0) {
      clearInterval(timer);
      $(".count-down-label").animate({ opacity: "0" }, 2000);
      $(".timer").text("Colors changed");
      $(".flexbox-container").css("background-color", "#bdc3c7");

      var newColors = [...shuffleColors];
      shuffle(newColors);

      $(".flexbox-item").remove();
      addColoredBoxes(newColors);

      $("h1").css({ color: newColors[randomNumberGenerator()] });
      randomNumberGenerator();
      $("body").css({ backgroundColor: colors[randomNumberGenerator()] });

      let h1Color = $("h1").css("color");
      let bodyColor = $("body").css("background-color");
      let labelColor = $(".count-down-label").css("color");

      if (h1Color === bodyColor) {
        $("h1").css("color", "white");
        randomNumberGenerator();
      }

      if (labelColor === bodyColor) {
        $(".count-down-label").css("color", "white");
      } else {
        $(".count-down-label").css("color", "black");
      }
    }
  }, 1000);
}

function resetToDefault() {
  $(".btnReset").on("click", function() {
    $(".flexbox-item").remove();
    addColoredBoxes(colors);
    console.log(colors);
    $("body").css("background-color", "white");
    $("h1").css("color", "black");
    $(".count-down-label").css("color", "black");
    $(".flexbox-container").css("background-color", "#eee");
    $(".lbl-timer").text("5");
    $(".count-down-label").animate({ opacity: "1" }, 2000);
  });
}

addColoredBoxes(colors);
shuffleColoredBoxes(colors);
resetToDefault();
