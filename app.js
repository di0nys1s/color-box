colors = [
  "red",
  "blue",
  "orange",
  "green",
  "yellow",
  "black",
  "brown",
  "purple",
  "pink"
];

$("body")
  .prepend("<h1>Flexbox Study</h1>")
  .css("text-align", "center");

for (let i = 0; i < colors.length; i++) {
  let selectedClass = ".flexbox-item-" + i;
  let box = $(
    `<div class='flexbox-item ${selectedClass}'><p>${i + 1}</p></div>`
  ).appendTo($(".flexbox-container"));
  box.css("background-color", colors[i]);
}
